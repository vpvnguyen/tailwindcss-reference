import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import Form from "./components/Form";
import TailwindFigure from "./components/TailwindFigure";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <Landing />
      <Form />
      {/* <TailwindFigure /> */}
      <TodoApp />
    </>
  );
}

export default App;
