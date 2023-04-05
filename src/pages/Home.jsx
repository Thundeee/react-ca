import { useContext } from "react";
import { ItemContext } from "../context/itemGetter";
import { Link } from "react-router-dom";
import { DiscountBadge } from "../components/DiscountBadge";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActions,
    Box,
} from "@mui/material";

const Home = () => {
    const { items, isLoading, isError } = useContext(ItemContext);
    return (
        <div>
            <h1>Catalogue</h1>

            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    margin: "30px 10%",
                }}
            >
                {items &&
                    items.map((item) => (
                        <Card
                            key={item.id}
                            sx={{
                                position: "relative",
                                margin: "1px",
                                marginBottom: "20px",
                                width: "300px",
                            }}
                        >
                            <DiscountBadge item={item}/>
                            
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.imageUrl}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Kr {item.price},-
                                </Typography>

                                {item.originalPrice > item.price && (
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        sx={{ textDecoration: "line-through" }}
                                    >
                                        Kr {item.originalPrice},-
                                    </Typography>
                                )}
                            </CardContent>
                            <CardActions>
                                <Button
                                    component={Link}
                                    to={`/product/${item.id}`}
                                    variant="contained"
                                    color="primary"
                                >
                                    View Product
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
            </Box>
        </div>
    );
};

export default Home;
