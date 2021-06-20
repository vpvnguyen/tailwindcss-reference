import classNames from "classnames";
import { useState } from "react";

const StringButton = ({ toggle, onClick }) => {
  const defaultClass = `p-10 border rounded-lg w-72`;

  const defaultButton = `text-red-700 border-red-700 hover:border-red-100 hover:bg-red-100`;
  const activeButton = `text-green-700 border-green-700 hover:border-green-100 hover:bg-green-100`;

  const className = classNames(
    defaultClass,
    toggle ? activeButton : defaultButton
  );

  return (
    <button className={className} onClick={onClick}>
      String Button
    </button>
  );
};

const ObjectButton = ({ toggle, onClick }) => {
  const defaultStyle = {
    color: "text-red-700",
    border: "border border-red-700",
    hover: "hover:border-red-100 hover:bg-red-100",
  };

  const defaultClass = classNames(
    defaultStyle.color,
    defaultStyle.border,
    defaultStyle.hover
  );

  const activeStyle = {
    color: "text-green-700",
    border: "border border-green-700",
    hover: "hover:border-green-100 hover:bg-green-100",
  };

  const activeClass = classNames(
    activeStyle.color,
    activeStyle.border,
    activeStyle.hover
  );

  const className = classNames(
    "p-10 border rounded-lg w-72",
    toggle ? activeClass : defaultClass
  );

  return (
    <button className={className} onClick={onClick}>
      Object Button
    </button>
  );
};

const SeparateButtons = ({ toggle, onClick }) => {
  const DefaultButton = () => {
    const className =
      "w-full p-10 text-red-700 border border-red-700 rounded-lg hover:border-red-100 hover:bg-red-100";
    return (
      <button className={className} onClick={onClick}>
        Separate Buttons
      </button>
    );
  };

  const ActiveButton = () => {
    const className =
      "w-full p-10 text-green-700 border border-green-700 rounded-lg hover:border-green-100 hover:bg-green-100";
    return (
      <button className={className} onClick={onClick}>
        SeparateButtons
      </button>
    );
  };

  return toggle ? <ActiveButton /> : <DefaultButton />;
};

const TemplateLiteralButton = ({ toggle, onClick }) => {
  return (
    <button
      className={`p-10 border rounded-lg w-72 ${
        toggle
          ? "text-green-700 border-green-700 hover:border-green-100 hover:bg-green-100"
          : "text-red-700 border-red-700 hover:border-red-100 hover:bg-red-100"
      }`}
      onClick={onClick}
    >
      Literal Button
    </button>
  );
};

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center gap-5">
        <StringButton toggle={toggle} onClick={() => setToggle(!toggle)} />
        <ObjectButton toggle={toggle} onClick={() => setToggle(!toggle)} />
        <SeparateButtons toggle={toggle} onClick={() => setToggle(!toggle)} />
        <TemplateLiteralButton
          toggle={toggle}
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
}

export default App;
