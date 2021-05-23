import { notPurgedTheme, useTheme } from "./theme";
const ProgramA = () => {
  return (
    <div className="text-programA-primary-dark bg-programA-primary-light">
      Program A
    </div>
  );
};

const ProgramB = () => {
  const purgedTheme = {
    program: "programB",
    primary: {
      light: "primary-light",
      default: "primary-default",
      dark: "primary-dark",
    },
    secondary: {
      light: "secondary-light",
      default: "secondary-default",
      dark: "secondary-dark",
    },
  };

  return (
    <div
      className={`text-${purgedTheme.program}-primary-dark bg-${purgedTheme.program}-${purgedTheme.primary.light}`}
    >
      Program B
    </div>
  );
};

const ProgramC = () => {
  // const notPurgedTheme = {
  //   program: "programC",
  //   primary: {
  //     light: "#ADD8E6",
  //     default: "#0000ff",
  //     dark: "#FF4500",
  //   },
  //   secondary: {
  //     light: "#ffcccb",
  //     default: "#ff0000",
  //     dark: "#8b0000",
  //   },
  // };

  // const mapTheme = (notPurgedTheme) => {
  //   return {
  //     "--colors-primary-light": notPurgedTheme.primary.light || "pink",
  //     "--colors-primary-default": notPurgedTheme.primary.default || "red",
  //     "--colors-primary-dark": notPurgedTheme.primary.dark || "forestgreen",
  //     "--colors-secondary-light": notPurgedTheme.primary.light || "lightblue",
  //     "--colors-secondary-default": notPurgedTheme.primary.default || "blue",
  //     "--colors-secondary-dark": notPurgedTheme.primary.dark || "darkred",
  //   };
  // };

  // const applyTheme = (notPurgedTheme) => {
  //   const themeObject = mapTheme(notPurgedTheme);

  //   if (!themeObject) console.error("Theme Object does not exist");

  //   const root = document.documentElement;

  //   Object.keys(themeObject).forEach((property) => {
  //     if (property === "name") {
  //       return;
  //     }

  //     root.style.setProperty(property, themeObject[property]);
  //   });
  // };

  useTheme(notPurgedTheme);

  return <div className="text-primary-dark bg-primary-light">Program C</div>;
};

function App() {
  return (
    <div>
      <ProgramA />
      <ProgramB />
      <ProgramC />
    </div>
  );
}

export default App;
