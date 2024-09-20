"use client";
import Header from "@/components/header";
import Card from "@/components/card";
import "./page.scss";
import { Fragment, useEffect, useState } from "react";
import { useTasks } from "@/lib/todos/context";
import TaskModal from "@/modals/todo/create";

export default function Home() {
  const { tasks, setTasks, addTask, deleteTask } = useTasks();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTasks([
      { id: 1, name: "Lavar as mãos", isCompleted: false },
      { id: 2, name: "Fazer um bolo", isCompleted: false },
      { id: 3, name: "Lavar a louça", isCompleted: false },
    ])
  }, []);

  return (
    <Fragment>
      <div className="page-container">
        <Header />

        <div className="task-list">
          { tasks.map(task => 
            <Card className="task-card" key={task.id}>
              <div className="task-card__content">
                <input
                  type="checkbox"
                  className="task-card__checkbox"
                  defaultChecked={task.isCompleted}
                  />
                <span className={`task-card__task ${task.isCompleted ? "completed" : ""}`}>
                  {task.name}
                </span>
                <button onClick={() => deleteTask(task.id)} className="task-card__delete-btn">
                  🗑️
                </button>
              </div>
            </Card>
          )}
        </div>

        {/* Botão para adicionar nova tarefa */}
        <button className="add-task-btn" onClick={() => setModalOpen(true)}>Adicionar nova tarefa</button>

      </div>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddTask={(task) => addTask(task)}
      />
    </Fragment>
  );
}
