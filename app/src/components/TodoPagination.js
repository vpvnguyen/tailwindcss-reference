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

const getPageNumbers = (TODOS, TODOS_PER_PAGE) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(TODOS.length / TODOS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};

const getCurrentTodos = (currentPage, TODOS, TODOS_PER_PAGE) => {
  const indexOfLastTodo = currentPage * TODOS_PER_PAGE;
  const indexOfFirstTodo = indexOfLastTodo - TODOS_PER_PAGE;
  const currentTodos = TODOS.slice(indexOfFirstTodo, indexOfLastTodo);
  return currentTodos;
};

const TodoPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const TODOS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
  const TODOS_PER_PAGE = 3;

  const pageNumbers = getPageNumbers(TODOS, TODOS_PER_PAGE);
  const currentTodos = getCurrentTodos(currentPage, TODOS, TODOS_PER_PAGE);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <>
      <h1>Todo Pagination</h1>
      <ul>
        {currentTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <ul style={style.pageNumbers}>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            id={pageNumber}
            style={style.pageItem}
            onClick={handleClick}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoPagination;
