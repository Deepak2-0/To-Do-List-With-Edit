import React, { useState } from "react";

function ToDoItem(props) {
  const {
    id,
    item,
    onDelete,
    onEdit,
    onShow,
    onEditText,
    onEditSave,
    checkSaveButton
  } = props;

  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="list">
      <div>
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {item}
        </li>
        <div className="comboButton">
          <button className="doneButton " onClick={handleClick}>
            <i className="fas fa-check-square"></i>
          </button>
          <button className="editButton" onClick={() => onEdit(id)}>
            <i className="fas fa-pen"></i>
          </button>
          <button className="deleteButton" onClick={() => onDelete(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      {onShow && (
        <div className="edit">
          <input
            type="text"
            className="editItem"
            defaultValue={item}
            onChange={onEditText}
          />
          <button
            className="saveItem"
            onClick={() => onEditSave(id)}
            disabled={!checkSaveButton}
          >
            <i className="far fa-save fa-lg"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
