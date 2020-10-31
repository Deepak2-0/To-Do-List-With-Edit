import React, { useState } from "react";
import "./styles.css";

import ToDoItem from "./component/ToDoItem";

export default function App() {
  let keyCount = 1;

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [display, setDisplay] = React.useState([]);
  const [editableText, setEditableText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.length === 0) return;

    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    let arr = [...display];

    arr.push(false);
    setDisplay(arr);

    setInputText("");
  }

  function handleDelete(id) {
    setItems((prevItems) => {
      return prevItems.filter((el, index) => {
        return index !== id;
      });
    });

    let arr = [...display];
    arr.splice(id, 1);
    setDisplay(arr);
  }

  function handleKeypress(event) {
    //for keyboard enter
    // console.log(event.keyCode);

    if (event.keyCode === 13) {
      addItem();
    }
  }

  function handleEdit(id) {
    let arr = [...display];
    arr[id] = true;
    setDisplay(arr);
    //console.log(display);
    setEditableText(items[id]);
  }

  function onEditText(event) {
    // editableText = event.target.value;
    setEditableText(event.target.value);
  }

  function onEditSave(id) {
    let arr = [...display];
    arr[id] = false;
    setDisplay(arr);

    let textArr = [...items];
    textArr[id] = editableText;

    setItems(textArr);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          onKeyDown={handleKeypress}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={keyCount++}
              item={todoItem}
              id={index}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onShow={display[index]}
              onEditText={onEditText}
              onEditSave={onEditSave}
              checkSaveButton={editableText}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
