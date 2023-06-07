import { useSessionStorage } from "../hooks/useSessionStorage";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem, clearItems } from "../store/cartSlice/cart";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Checkout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [cart, setCart] = useSessionStorage("cart", []);
  console.log(cart);

  const remover = (event) => {
    const id = event.target.value;
    let products = JSON.parse(sessionStorage.getItem("cart"));
    const index = products.find((item) => item.id === id);
    console.log(index);
    if (index.amount > 1) {
      index.amount--;
      sessionStorage.setItem("cart", JSON.stringify(products));
    } else {
      console.log("remove");
      products = cart.filter((item) => item.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(products));
    }

    setCart(products);
    dispatch(removeItem());
  };

  const exiter = () => {
    sessionStorage.removeItem("cart");
    setCart([]);
    dispatch(clearItems());
  };

  const isSmallScreen = useMediaQuery("(max-width:556px)");
  const marginX = isSmallScreen ? "3%" : "15%";

  return (
    <div>
      <h1>Cart</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginX,
          marginBottom: "3rem",
        }}
      >
        {cart.length === 0 && <p>Cart is empty</p>}
        {cart.map((item) => (
          <Card
            key={item?.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item?.imageUrl}
              alt={item?.title}
              sx={{
                width: 150,
                height: 150,
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h5">{item?.title}</Typography>
              <Typography variant="body1">{item?.description}</Typography>
              <Typography variant="body1" fontWeight="bold">
                Kr {item?.price} per stk
              </Typography>
              <Typography variant="body1">{item?.amount} stk</Typography>
              <Typography variant="body1" fontWeight="bold">
                Kr {(item?.price * item?.amount).toFixed(2)} total
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={remover}
                value={item?.id}
              >
                Remove from cart
              </Button>
            </CardActions>
          </Card>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Button onClick={exiter} variant="contained" color="error">
            Clear cart
          </Button>

          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "right" }}
          >
            Total price: Kr{" "}
            {cart
              .reduce((total, item) => total + item.price * item.amount, 0)
              .toFixed(2)}
          </Typography>
          <Button
            component={Link}
            to={`/CheckoutSuccess`}
            variant="contained"
            color="success"
            onClick={exiter}
          >
            Checkout!
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Checkout;
