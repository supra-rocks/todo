"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { Add, Check } from "@mui/icons-material";
import config from "@/config";
import AppFrame from "@/components/AppFrame";
import LoadingScreen from "@/components/LoadingScreen";
import useWallet from "@/hooks/useWallet";
import useTodos from "@/hooks/useTodos";
import { Todo } from "@/types/todo";

const App: React.FC = () => {
  const MODULE_NAME = "advanced_todo_list";
  const CONTRACT_ADDRESS = config.ADVANCED_TODO_LIST_CONTRACT_ADDRESS;
  const [newTodo, setNewTodo] = useState("");
  const [address, setAddress] = useState<string | null>();
  const { walletClient, loading: walletLoading } = useWallet();
  const {
    todoLists,
    todos,
    currentListIdx,
    loading: todosLoading,
    fetchTodoLists,
    fetchTodos,
    createTodoList,
    addTodo,
    completeTodo,
  } = useTodos(walletClient!, CONTRACT_ADDRESS, MODULE_NAME);

  useEffect(() => {
    const init = async () => {
      if (walletClient) {
        fetchTodoLists();
        const address = await walletClient.getAddress();
        setAddress(address);
      }
    };
    init();
  }, [walletClient]);

  if (walletLoading) return <LoadingScreen />;

  if (!address) {
    return (
      <AppFrame>
        <Card
          variant="outlined"
          sx={{ width: 400, borderRadius: 3, textAlign: "center" }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Connect Your Wallet
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              Please connect your wallet to use this application
            </Typography>
          </CardContent>
        </Card>
      </AppFrame>
    );
  }

  return (
    <AppFrame>
      <Card variant="outlined" sx={{ width: 400, borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ position: "relative" }}>
            <Tooltip title="Create new list">
              <IconButton
                onClick={createTodoList}
                size="small"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
              >
                <Add />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, textAlign: "center", mb: 2 }}
          >
            To do list
          </Typography>
          {todoLists.length > 0 && (
            <Box mb={2}>
              <Select
                fullWidth
                value={currentListIdx ?? ""}
                onChange={(e) => fetchTodos(Number(e.target.value))}
              >
                {todoLists.map((idx) => (
                  <MenuItem key={idx} value={idx}>
                    List {idx + 1}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
          <Box display="flex" gap={1} mb={2}>
            <TextField
              label="New item"
              variant="outlined"
              fullWidth
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              disabled={todosLoading}
            />
            <Button
              variant="contained"
              onClick={() => addTodo(newTodo)}
              disabled={!newTodo || todosLoading}
            >
              Add
            </Button>
          </Box>
          {todosLoading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <List>
              {todos.map((todo: Todo) => (
                <ListItem
                  key={todo.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: 1,
                  }}
                >
                  <ListItemText
                    primary={todo.content}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: todo.completed ? "text.secondary" : "text.primary",
                    }}
                  />
                  {todo.completed ? (
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Check />
                    </Box>
                  ) : (
                    <Button onClick={() => completeTodo(todo.id)}>
                      Mark done
                    </Button>
                  )}
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </AppFrame>
  );
};

export default App;
