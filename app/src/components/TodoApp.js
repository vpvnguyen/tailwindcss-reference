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
  const [currentPage, setCurrentPage] = useState(1);
  const todos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  const todosPerPage = 3;

  // Logic for displaying page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // Logic for displaying current todos
  const indexOfLastTodo = currentPage * todosPerPage; // 1 * 3 = 3; 3 * 3 = 9
  console.log(`indexOfLastTodo: ${indexOfLastTodo}`);
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  console.log(`indexOfFirstTodo: ${indexOfFirstTodo}`);
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  console.log(`currentTodos: ${currentTodos}`);
  const pageNumbers = getPageNumbers();

  const renderTodos = currentTodos.map((todo, index) => {
    console.log("renderTodos");
    return <li key={index}>{todo}</li>;
  });

  const renderPageNumbers = pageNumbers.map((number) => {
    console.log("renderPageNumbers");
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
