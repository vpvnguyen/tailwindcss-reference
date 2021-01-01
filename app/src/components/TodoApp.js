import { useState } from "react";

const style = {
  pageNumbers: {
    listStyle: "none",
    display: "flex",
  },
  pageItem: {
    marginRight: "0.3em",
    color: "blue",
    userSelect: "none",
    cursor: "pointer",
  },
};

const TodoApp = () => {
  const [todos, setTodos] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(3);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // Logic for displaying current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} style={style.pageItem} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <ul>{renderTodos}</ul>
      <ul style={style.pageNumbers}>{renderPageNumbers}</ul>
    </div>
  );
};

export default TodoApp;
