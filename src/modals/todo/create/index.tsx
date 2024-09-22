import React, { useState } from "react";
import "./styles.scss";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Nova tarefa</h2>
        <label>Título</label>
        <input className="modal-content input "
          type="text"
          placeholder="Digite"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="add-btn" onClick={handleAddTask}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
