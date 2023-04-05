import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../context/itemGetter";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice/cart";
import { DiscountBadge } from "../components/DiscountBadge";
import { Box, Button, Rating, Typography, Grid } from "@mui/material";

const Product = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const { items, isLoading, isError } = useContext(ItemContext);

    const CorrectItem = items.find((item) => item.id === id);

    const [cart, setCart] = useSessionStorage("cart", []);

    const handleAddToCart = (event) => {
        const id = event.target.value;

        if (cart.find((item) => item.id === id)) {
            const updatedCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            setCart(updatedCart);
            dispatch(addItem());
            return;
        }

        const item = items.find((item) => item.id === id);
        item.amount = 1;
        setCart([...cart, item]);
        dispatch(addItem());
    };

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}

            <Box sx={{ textAlign: "center" }}>
                <h1> {CorrectItem?.title}</h1>
                <div style={{ position: "relative", display: "inline-block" }}>
                <DiscountBadge item={CorrectItem}/>


                    <img
                        src={CorrectItem?.imageUrl}
                        alt={CorrectItem?.title}
                        style={{
                            width: "100%",
                            maxWidth: "250px",
                            height: "auto",
                        }}
                    />
                </div>

                <Typography variant="body2" component="p">
                    Kr {CorrectItem?.price},-
                </Typography>

                {CorrectItem?.originalPrice > CorrectItem?.price && (
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{ textDecoration: "line-through" }}
                    >
                        Kr {CorrectItem?.originalPrice},-
                    </Typography>
                )}

                <Typography color="textSecondary">
                    {CorrectItem?.description}
                </Typography>

                <Rating
                    name="Star-Rating"
                    precision={0.1}
                    value={
                        parseFloat(CorrectItem?.rating)
                            ? CorrectItem?.rating
                            : 0
                    }
                    readOnly
                />
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleAddToCart}
                    value={CorrectItem?.id}
                >
                    Add to Cart
                </Button>
            </Box>

            <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
                <Typography variant="h4">Reviews</Typography>

                <Grid
                    container
                    spacing={2}
                    alignContent="center"
                    flexDirection="column"
                >
                    {CorrectItem?.reviews.map((review) => (
                        <Grid item key={review.id}>
                            <Box sx={{ border: "1px solid grey", p: 2 }}>
                                <Typography variant="subtitle1">
                                    {review.username}
                                </Typography>
                                <Rating
                                    precision={0.1}
                                    value={review.rating}
                                    readOnly
                                />
                                <Typography variant="body2">
                                    {review.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default Product;
