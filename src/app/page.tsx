"use client";
import Header from "@/components/header";
import Card from "@/components/card";
import DeleteModal from "@/modals/todo/delete/index";
import "./page.scss";
import { Fragment, useEffect, useState } from "react";
import { useTasks } from "@/lib/todos/context";
import TaskModal from "@/modals/todo/create";

export default function Home() {
  const { tasks, setTasks, addTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  useEffect(() => {
    setTasks([
      { id: 1, name: "Lavar as mãos", isCompleted: false },
      { id: 2, name: "Fazer um bolo", isCompleted: false },
      { id: 3, name: "Lavar a louça", isCompleted: false },
    ]);
  }, [setTasks]);


  const openDeleteModal = (taskId: number) => {
    setTaskToDelete(taskId);
    setDeleteModalOpen(true);
  };

  
  const handleDeleteTask = () => {
    if (taskToDelete !== null) {
      deleteTask(taskToDelete);
      setDeleteModalOpen(false);
    }
  };

  return (
    <Fragment>
      <div className="page-container">
        <Header />

        <div className="task-list">
          {tasks.map((task) => (
            <Card className="task-card" key={task.id}>
              <div className="task-card__content">
                <input
                  type="checkbox"
                  className="task-card__checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <span className={`task-card__task ${task.isCompleted ? "completed" : ""}`}>
                  {task.name}
                </span>
                <button
                  onClick={() => openDeleteModal(task.id)}
                  className="task-card__delete-btn"
                >
                  🗑️
                </button>
              </div>
            </Card>
          ))}
        </div>

        <button className="add-task-btn" onClick={() => setModalOpen(true)}>
          Adicionar nova tarefa
        </button>
      </div>

     
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddTask={(task) => addTask(task)}
      />

      
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDeleteTask}
      />
    </Fragment>
  );
}
