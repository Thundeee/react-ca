import { useContext } from "react";
import { ItemContext } from "../context/itemGetter";
import { Link } from "react-router-dom";
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
    console.log(items);

    return (
        <div>
            <h1>Catalogue</h1>

            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    margin: "30px 10%",
                }}
            >
                {items &&
                    items.map((item) => (
                        <Card
                            key={item.id}
                            sx={{
                                position: "relative",
                                flexBasis: "30%",
                                marginBottom: "30px",
                            }}
                        >
                            {item.discount !== false && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        padding: "5px",
                                        backgroundColor: "#F44336",
                                        color: "white",
                                        borderRadius: "5px",
                                    }}
                                >
                                    {item.discount} OFF
                                </div>
                            )}
                            <CardMedia
                                component="img"
                                height="250"
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
