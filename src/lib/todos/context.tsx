"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (name: string) => void;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  setTasks: (tasks: Task[]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provedor do Contexto de Tarefas
export const TaskProvider: React.FC<{ children: ReactNode  }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, name, isCompleted: false },
    ]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompletion, deleteTask, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Hook para usar o contexto de tarefas
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  return context;
};
