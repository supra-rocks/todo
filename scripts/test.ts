// Import the Supra TypeScript SDK
import { SupraClient, SupraAccount } from "supra-l1-sdk";
import { HexString } from "supra-l1-sdk";

// Define constants for the module and functions
const MODULE_NAME = "advanced_todo_list_addr::advanced_todo_list";
const CREATE_TODO_LIST_FUNCTION = `${MODULE_NAME}::create_todo_list`;
const CREATE_TODO_FUNCTION = `${MODULE_NAME}::create_todo`;
const COMPLETE_TODO_FUNCTION = `${MODULE_NAME}::complete_todo`;
const GET_TODO_LIST_COUNTER_FUNCTION = `${MODULE_NAME}::get_todo_list_counter`;

async function main() {
  // Initialize the Supra client
  const client = new SupraClient({ nodeUrl: "https://your-node-url.com" });

  // Load a Supra account
  const privateKey = "<your-private-key>"; // Replace with your private key
  const account = new SupraAccount(privateKey);

  // Connect the client
  await client.connect(account);

  // Create a new todo list
  console.log("Creating a new todo list...");
  const createTodoListTx = await client.executeFunction(
    CREATE_TODO_LIST_FUNCTION,
    []
  );
  console.log("Create Todo List Transaction:", createTodoListTx);

  // Fetch the todo list counter to get the new list index
  console.log("Fetching todo list counter...");
  const todoListCounter = await client.callView(
    GET_TODO_LIST_COUNTER_FUNCTION,
    [account.address]
  );
  console.log("Todo List Counter:", todoListCounter);

  // Add a new todo to the list
  const todoContent = "My first todo";
  console.log(`Adding todo: "${todoContent}"`);
  const addTodoTx = await client.executeFunction(CREATE_TODO_FUNCTION, [
    todoListCounter,
    todoContent,
  ]);
  console.log("Add Todo Transaction:", addTodoTx);

  // Mark the todo as completed
  const todoIndex = 0; // Index of the todo item to complete
  console.log(`Completing todo at index ${todoIndex}...`);
  const completeTodoTx = await client.executeFunction(COMPLETE_TODO_FUNCTION, [
    todoListCounter,
    todoIndex,
  ]);
  console.log("Complete Todo Transaction:", completeTodoTx);
}

// Execute the script
main().catch((error) => {
  console.error("Error executing script:", error);
});
