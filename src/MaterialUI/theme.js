import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

// Design Document: Colors
const primary = "#263238";
const secondary = "#bf360c";
const background = "#f5f5f5";
const paper = "#e0e0e0";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        constrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            default: background,
            paper: paper,
        },
    },
});

export default responsiveFontSizes(theme);