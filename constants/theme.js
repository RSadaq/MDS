import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // custom colors go here
    black: "#000000",
    white: "#ffffff",
    blue: "#3c58e6",
    transparentBlack: 'rgba(0, 0, 0, 0.5)',
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