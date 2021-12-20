import { DefaultTheme } from "styled-components";
import mixins from "./mixins";

const theme: DefaultTheme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },

  colors: {
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#112240",
    lightestNavy: "#233554",
    navyShadow: "rgba(2,12,27,0.7)",
    darkSlate: "#495670",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    white: "#e6f1ff",
    green: "#64ffda",
    greenTint: "rgba(100,255,218,0.1)",
    pink: "#f57dff",
    blue: "#57cbff",
  },

  fs: {
    xs: "0.8rem",
    sm: "1.25rem",
    md: "1.563rem",
    lg: "1.953rem",
    xl: "2.441rem",
    xxl: "3.052rem",
  },

  mixins,
};

export default theme;
