import { createTheme } from "@mui/material";
import { indigo, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main:  indigo[500],
    },
    secondary: {
      main: amber[300],
    },
  },

});



export {theme};