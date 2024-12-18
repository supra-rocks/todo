import { logDebug } from "@/utils/logDebug";
import { WalletClient } from "@/lib/WalletClient";
import {
  Todo,
  TodoList,
  GetTodoListResponse,
  GetTodoResponse,
} from "@/types/todo";

export const loadTodoLists = async (
  walletClient: WalletClient,
  contractAddress: string,
  moduleName: string
): Promise<number[]> => {
  logDebug("Fetching Todo Lists", { contractAddress, moduleName });

  const accountAddress = await walletClient.getAddress();
  logDebug("Using account address", { accountAddress });

  const functionFullName = `${contractAddress}::${moduleName}::get_todo_list_counter`;
  logDebug("Invoking view method", { functionFullName });

  const result = await walletClient.invokeViewMethod!(
    functionFullName,
    [],
    [accountAddress]
  );
  logDebug("Raw result from view method", { result });

  if (!result) {
    logDebug("Could not load lists");
    return [];
  }

  const counter = parseInt(result[0] ?? "0", 10);
  logDebug("Parsed counter value", { counter });

  const listIndexes = Array.from({ length: counter }, (_, idx) => idx);
  logDebug("Generated list indexes", { listIndexes });

  return listIndexes;
};

export const loadTodos = async (
  walletClient: WalletClient,
  contractAddress: string,
  moduleName: string,
  listIdx: number
): Promise<Todo[]> => {
  logDebug("Loading Todos", { contractAddress, moduleName, listIdx });

  const accountAddress = await walletClient.getAddress();
  logDebug("Using account address", { accountAddress });

  const functionFullName = `${contractAddress}::${moduleName}::get_todo_list`;
  logDebug("Invoking view method for todo list", { functionFullName });

  const response = (await walletClient.invokeViewMethod!(
    functionFullName,
    [],
    [accountAddress, listIdx.toString()]
  )) as GetTodoListResponse;
  logDebug("Raw response for todo list", { response });

  const todosLength = parseInt(response[1], 10);
  logDebug("Number of todos in list", { todosLength });

  const todos = await Promise.all(
    Array.from({ length: todosLength }, async (_, i) => {
      const todoResponse = (await walletClient.invokeViewMethod!(
        `${contractAddress}::${moduleName}::get_todo`,
        [],
        [accountAddress, listIdx.toString(), i.toString()]
      )) as GetTodoResponse;
      logDebug("Raw response for individual todo", { index: i, todoResponse });
      return {
        id: i,
        content: todoResponse[0],
        completed: todoResponse[1],
      };
    })
  );

  logDebug("Final list of todos", { todos });
  return todos;
};

export const sendTransaction = async (
  walletClient: WalletClient,
  contractAddress: string,
  moduleName: string,
  functionName: string,
  args: any[]
): Promise<any> => {
  logDebug("Preparing transaction", {
    contractAddress,
    moduleName,
    functionName,
    args,
  });

  const result = await walletClient.sendTransaction(
    contractAddress,
    moduleName,
    functionName,
    args,
    "contractInteraction"
  );
  logDebug("Transaction result", { result });

  return result;
};
