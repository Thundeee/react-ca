import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FooterWrapper } from "./styles";
const Footer = () => {
  const theme = useTheme();
  return (
    <FooterWrapper theme={theme}>
      <Typography variant="h6" align="center" gutterBottom>
        @ {new Date().getFullYear()} - QuickShop
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
