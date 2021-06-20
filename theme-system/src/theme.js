import { useEffect } from "react";

export const notPurgedTheme = {
  program: "programC",
  primary: {
    light: "#ADD8E6",
    default: "#0000ff",
    dark: "#FF4500",
  },
  secondary: {
    light: "#ffcccb",
    default: "#ff0000",
    dark: "#8b0000",
  },
};

const colorsPrimaryLight = "--colors-primary-light";
const colorsPrimaryDark = "--colors-primary-dark";

const mapTheme = (notPurgedTheme) => {
  return {
    [colorsPrimaryLight]: notPurgedTheme.primary.light || "pink",
    "--colors-primary-default": notPurgedTheme.primary.default || "red",
    [colorsPrimaryDark]: notPurgedTheme.primary.dark || "forestgreen",
    "--colors-secondary-light": notPurgedTheme.primary.light || "lightblue",
    "--colors-secondary-default": notPurgedTheme.primary.default || "blue",
    "--colors-secondary-dark": notPurgedTheme.primary.dark || "darkred",
  };
};

export const applyTheme = (notPurgedTheme) => {
  const themeObject = mapTheme(notPurgedTheme);

  if (!themeObject) console.error("Theme Object does not exist");

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      console.log("name!", property);
    }

    document.documentElement.style.setProperty(property, themeObject[property]);
  });
};

export const useTheme = (theme) => {
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
};
