import React from "react";

interface ITheme {
  [key: string]: string;
}

const mapTheme = (program: any) => {
  return {};
};

const applyTheme = (programTheme: any) => {
  const theme: ITheme = mapTheme(programTheme);

  Object.keys(theme).forEach((property) => {
    document.documentElement.style.setProperty(property, theme[property]);
  });
};

export const useTheme = (theme: any) => {
  React.useEffect(() => {
    let isEffectMounted = true;
    if (isEffectMounted) {
      applyTheme(theme);
    }
    () => {
      isEffectMounted = false;
    };
  }, [theme]);
};
