export interface Todo {
  id: number; // Index in the todos vector
  content: string;
  completed: boolean;
}

export interface TodoList {
  owner: string; // address
  todoCount: number;
}

// For use in forms/creation
export interface CreateTodoInput {
  content: string;
}

// Response from get_todo_list view function
export type GetTodoListResponse = [string, number]; // [owner, todoCount]

// Response from get_todo view function
export type GetTodoResponse = [string, boolean]; // [content, completed]
