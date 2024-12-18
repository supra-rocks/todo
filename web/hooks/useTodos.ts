import { useState } from "react";
import {
  loadTodoLists,
  loadTodos,
  sendTransaction,
} from "@/services/todoService";
import { WalletClient } from "@/lib/WalletClient";

const useTodos = (
  walletClient: WalletClient,
  contractAddress: string,
  moduleName: string
) => {
  const [todoLists, setTodoLists] = useState<number[]>([]);
  const [todos, setTodos] = useState([]);
  const [currentListIdx, setCurrentListIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTodoLists = async () => {
    if (!walletClient) return;
    setLoading(true);
    try {
      const lists = await loadTodoLists(
        walletClient,
        contractAddress,
        moduleName
      );
      setTodoLists(lists);
      if (lists.length > 0) fetchTodos(lists[0]);
    } finally {
      setLoading(false);
    }
  };

  const fetchTodos = async (listIdx: number) => {
    if (!walletClient) return;
    setLoading(true);
    try {
      const fetchedTodos = await loadTodos(
        walletClient,
        contractAddress,
        moduleName,
        listIdx
      );
      setTodos(fetchedTodos);
      setCurrentListIdx(listIdx);
    } finally {
      setLoading(false);
    }
  };

  const createTodoList = async () => {
    if (!walletClient) return;
    setLoading(true);
    try {
      await sendTransaction(
        walletClient,
        contractAddress,
        moduleName,
        "create_todo_list",
        []
      );
      await fetchTodoLists();
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (content: string) => {
    if (!walletClient || currentListIdx === null) return;
    setLoading(true);
    try {
      await sendTransaction(
        walletClient,
        contractAddress,
        moduleName,
        "create_todo",
        [currentListIdx, content]
      );
      await fetchTodos(currentListIdx);
    } finally {
      setLoading(false);
    }
  };

  const completeTodo = async (todoIdx: number) => {
    if (!walletClient || currentListIdx === null) return;
    setLoading(true);
    try {
      await sendTransaction(
        walletClient,
        contractAddress,
        moduleName,
        "complete_todo",
        [currentListIdx, todoIdx]
      );
      await fetchTodos(currentListIdx);
    } finally {
      setLoading(false);
    }
  };

  return {
    todoLists,
    todos,
    currentListIdx,
    loading,
    fetchTodoLists,
    fetchTodos,
    createTodoList,
    addTodo,
    completeTodo,
  };
};

export default useTodos;
