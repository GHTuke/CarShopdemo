import { createTheme } from "@mui/material";
import { colorSchemeDark, themeQuartz } from 'ag-grid-community';

export const darkTheme = createTheme({
    //https://mui.com/material-ui/customization/dark-mode/
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFD700',
        },
    },
    //https://mui.com/material-ui/customization/theme-components/
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '10px'
                }
            }
        }
    },
});

export const newTheme = createTheme({
    palette: {
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#311b92',
        },
    },
});

export const myTheme = themeQuartz
.withPart(colorSchemeDark);