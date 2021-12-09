module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--theme-primary)",
        secondary: "var(--theme-secondary)",
        negative: "var(--theme-negative)",
        positive: "var(--theme-positive)",
        "primary-background": "var(--theme-backgroundPrimary)",
        "sec-background": "var(--theme-backgroundSecondary)",
        "primary-text": "var(--theme-textPrimary)",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  variants: {
    backgroundColor: ["active"],
  },
  plugins: [],
};
