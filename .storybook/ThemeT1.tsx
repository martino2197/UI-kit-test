// .storybook/YourTheme.js
import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: "Mulish",
  fontCode: "monospace",

  brandTitle: "T1 Design system",
  brandUrl: "/",
  brandImage: "/T1-logo.svg",
  brandTarget: "_self",

  //
  colorPrimary: "#585C6D",
  colorSecondary: "#DB3B2A",
  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#4C4C4C",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
