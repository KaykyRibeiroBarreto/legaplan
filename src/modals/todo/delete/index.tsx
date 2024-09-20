import React from "react";
import "./styles.scss";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="delete-btn" onClick={onDelete}>Deletar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
