export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

const themes = {
  light: {
    primary: "#61DAFB",
    secondary: "#254E70",
    negative: "#e45b78",
    positive: "#A3D9B1",
    textPrimary: "#333",
    backgroundPrimary: "#efefef",
    backgroundSecondary: "#F6F9FC",
  },
  dark: {
    primary: "#61DAFB",
    secondary: "#254E70",
    negative: "#e45b78",
    positive: "#A3D9B1",
    textPrimary: "#fff",
    backgroundPrimary: "#444444",
    backgroundSecondary: "#7b7b7b",
  },
};

export const applyTheme = (type) => {
  let themeMap = {};
  Object.keys(themes[type]).forEach((style) => {
    themeMap[`--theme-${style}`] = themes[type][style] || "";
  });

  if (!themeMap) {
    console.warn(`Theme mapping error. themeMap: ${themeMap}`);
    return;
  }

  Object.keys(themeMap).forEach((property) => {
    if (property === "name") {
      console.warn(
        `Theme applying error. property === "name". property: ${property}`,
        `themeMap: ${themeMap}`
      );
      return;
    }

    document.documentElement.style.setProperty(property, themeMap[property]);
  });
};

/**
 * TypeScript
 */
// export const DEFAULT_THEME: string = 'light';

// export const themes: IThemes = {
//   light,
// };

/**
 * For TypeScript
 * **/

// export interface ITheme {
//   [key: string]: string;
// }

// export interface IThemes {
//   [key: string]: ITheme;
// }

// export interface IthemeMap {
//   [key: string]: string | null;
// }

// export const mapTheme = (variables: ITheme): IthemeMap => {
//   return {
//     '--color-primary': variables.primary || '',
//     '--color-secondary': variables.secondary || '',
//     '--color-positive': variables.positive || '',
//     '--color-negative': variables.negative || '',
//     '--color-text-primary': variables.textPrimary || '',
//     '--background-primary': variables.backgroundPrimary || '',
//     '--background-sec': variables.backgroundSecondary || '',
//   };
// };

// export const applyTheme = (theme: string): void => {
//   const themeObject: IthemeMap = mapTheme(themes[theme]);
//   if (!themeObject) return;

//   const root = document.documentElement;

//   Object.keys(themeObject).forEach((property) => {
//     if (property === 'name') {
//       return;
//     }

//     root.style.setProperty(property, themeObject[property]);
//   });
// };

// export const extend = (
//   extending: ITheme,
//   newTheme: ITheme
// ): ITheme => {
//   return { ...extending, ...newTheme };
// };
