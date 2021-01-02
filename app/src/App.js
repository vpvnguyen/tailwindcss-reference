import "./App.css";
import { Router } from "@reach/router";
import Landing from "./components/Landing";
import Form from "./components/Form";
import TodoPagination from "./components/TodoPagination";
import Dashboard from "./components/TailwindUI/Dashboard";

const Home = () => (
  <>
    <Landing />
    <Form />
    <TodoPagination />
  </>
);

const CatchAll = () => <h1>404</h1>;

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
      <CatchAll path="*" />
    </Router>
  );
}
