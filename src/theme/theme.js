import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      main:  purple[500],
    },
    secondary: {
      main: '#ffcc00',
    },
    background: {
        default: 'red',
    },
  },

});

const DefaultComponent = styled.main`
min-height: 90vh;
padding: 0 10px;
margin: 10px auto;
`;

export {theme, DefaultComponent};