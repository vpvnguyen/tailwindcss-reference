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
import DarkMode from "./components/TailwindUI/DarkMode";
import LoremCards from "./components/LoremCards";
import CSSTricksProfile from "./components/CSS-Tricks/Profile";
import CSSTricksForm from "./components/CSS-Tricks/Form";

const Nav = ({ children }) => (
  <>
    <nav className="text-center p-8 bg-green-500">
      <a className="border-solid text-xl font-bold p-4" href="/sandbox">
        Sandbox
      </a>
      <a className="border-solid text-xl font-bold p-8" href="/ui">
        Tailwind UI
      </a>
      <a className="border-solid text-xl font-bold p-4" href="/dashboard">
        Dashboard
      </a>
      <a className="border-solid text-xl font-bold p-4" href="/ui">
        Responsive Design
      </a>
    </nav>

    {children}
  </>
);

const Sandbox = () => {
  return (
    <div className="container mx-auto">
      <CSSTricksProfile />
      <CSSTricksForm />
      <LoremCards />
    </div>
  );
};

const TailwindUI = () => (
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
    <Login />
    <Navbar />
    <Pagination />
    {/* <Modal /> */}
    {/* <SlideOver /> */}
    <Avatar />
    <SimpleDropdown />
    <DividedDropdown />
    <Banner />
    <DarkMode />
  </>
);

const CatchAll = () => <Nav />;

export default function App() {
  return (
    <Router>
      <Nav path="/">
        <Sandbox path="sandbox" />
        <TailwindUI path="ui" />
        <Dashboard path="dashboard" />
        <ResponsiveDesign path="responsive" />
      </Nav>
      <CatchAll path="*" />
    </Router>
  );
}
