import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // custom colors go here
    DarkOrange: "rgba(211, 84, 0, 1)",
    black: "#000000",
    white: "#ffffff",
    blue: "rgba(31, 58, 147, 1)",
    transparentdarkOrange: "rgba(211, 84, 0, 0.2)",
    transparentdarkPurple: "rgba(154, 18, 179, 0.2)",
    transparentBlack: 'rgba(0, 0, 0, 0.7)',
    transparentWhite: 'rgba(255, 255, 255, 0.7)',
    
};

export const SIZES = {
    paddingHeader: 30,

    // font sizes
    small: 14,
    medium: 18,
    large: 24,

    // App dimensions
    width,
    height
};

const appTheme = { COLORS, SIZES };
export default appTheme;