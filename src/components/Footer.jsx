import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography variant="h6" align="center" gutterBottom>
    @ {new Date().getFullYear()} - QuickShop
      </Typography>
    </footer>
  );
};

export default Footer;