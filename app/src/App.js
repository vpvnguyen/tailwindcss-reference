import "./App.css";
import { Router } from "@reach/router";
import Landing from "./components/Landing";
import Form from "./components/Form";
import TodoPagination from "./components/TodoPagination";
import Dashboard from "./components/TailwindUI/Dashboard";
import ResponsiveDesign from "./components/Variants/ResponsiveDesign";
import CTA from "./components/TailwindUI/CTA";
import Hero from "./components/TailwindUI/Hero";
import Feature from "./components/TailwindUI/Feature";
import Heading from "./components/TailwindUI/Heading";
import Description from "./components/TailwindUI/Description";
import FormLayout from "./components/TailwindUI/Form";
import Select from "./components/TailwindUI/Select";
import Login from "./components/TailwindUI/Login";
import Navbar from "./components/TailwindUI/Navbar";
import Pagination from "./components/TailwindUI/Pagination";
import Modal from "./components/TailwindUI/Modal";
import SlideOver from "./components/TailwindUI/SlideOver";
import Avatar from "./components/TailwindUI/Avatar";
import SimpleDropdown from "./components/TailwindUI/SimpleDropdown";
import DividedDropdown from "./components/TailwindUI/DividedDropdown";
import Banner from "./components/TailwindUI/Banner";

const Home = () => (
  <>
    <Landing />
    <Form />
    <TodoPagination />
    <CTA />

    <Hero />

    <Feature />

    <Heading />

    <Description />

    <FormLayout />

    <Select />

    <h1>LOGIN</h1>
    <h1>LOGIN</h1>
    <Login />

    <Navbar />

    <Pagination />

    {/* <Modal /> */}

    {/* <SlideOver /> */}

    <Avatar />

    <SimpleDropdown />

    <DividedDropdown />

    <Banner />
  </>
);

const CatchAll = () => <h1>404</h1>;

export default function App() {
  return (
    <Router>
      <Home path="/" />

      <Dashboard path="/dashboard" />
      <ResponsiveDesign path="responsive" />
      <CatchAll path="*" />
    </Router>
  );
}
