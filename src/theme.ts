import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core";
import { merge } from "lodash";

// colors
const primary = "#1DAED6";
const secondaryDark = "rgb(40, 145, 249)";
const primaryDark = "#1C2938";
const secondary = "#344252";

const black = "#000000";
const white = "#ffffff";

const textPrimary = "rgba(255, 255, 255, 0.87)";
const bgColor = "#12131a";
const bgColor1 = "rgb(247, 248, 250)";

const successMain = "#2464F4";
const successDark = "#1DB2D5";

const divider = "rgba(130, 177, 255, 0.08)";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 700;
const xs = 0;

// spacing
const spacing = 8;

function createQuickTheme(
  custom: any,
  options?: ThemeOptions | undefined,
  ...args: object[]
) {
  return createTheme(merge(custom, options), ...args);
}

export const mainTheme = responsiveFontSizes(
  createQuickTheme({
    palette: {
      action: {
        disabledBackground: "",
        disabled: "set color of text here",
      },
      primary: {
        main: primary,
        dark: primaryDark,
      },
      secondary: {
        main: secondary,
        dark: secondaryDark,
      },
      common: {
        black,
        white,
      },
      text: {
        primary: textPrimary,
        secondary: white,
        hint: bgColor1,
      },
      background: {
        default: bgColor,
        paper: white,
      },
      success: {
        main: successMain,
        dark: successDark,
      },
      divider: divider,
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: "'Inter', sans-serif",
      fontSize: 14,
      h1: {
        fontSize: 60,
        fontWeight: "bold",
        lineHeight: 0.93,
      },
      h2: {
        fontSize: 40,
        fontWeight: "bold",
        lineHeight: 1.2,
      },
      h3: {
        fontSize: 30,
        fontWeight: "bold",
        lineHeight: 1.33,
      },
      h4: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 1.5,
      },
      h5: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 1.5,
      },
      h6: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1.38,
      },
      subtitle1: {
        fontSize: 20,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: 18,
        lineHeight: 1.56,
      },
      body1: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.57,
      },
      caption: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.33,
      },
      overLine: {
        fontSize: 13,
        fontWeight: "bold",
        lineHeight: 1.69,
      },
    },
    spacing,
    breakpoints: {
      values: {
        xl,
        lg,
        md,
        sm,
        xs,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          fontSize: 14,
          fontWeight: "bold",
          lineHeight: "20px",
          textTransform: "none",
          backgroundColor: primary,
          color: white,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: primary,
            opacity: 0.8,
          },
          "&$disabled": {
            opacity: 0.3,
          },
        },
        secondary: {
          background: secondary,
        },
        textPrimary: {
          background: `transparent linear-gradient(279deg, ${successMain} 0%, ${successDark} 100%) 0% 0% no-repeat padding-box`,
          borderRadius: 50,
          color: white,
        },
      },
      MuiContainer: {
        root: {
          paddingLeft: "40px !important",
          paddingRight: "40px !important",
        },
      },
    },
  })
);

const theme = { mainTheme };

export default theme;
