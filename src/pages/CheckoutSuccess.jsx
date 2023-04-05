import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CheckoutSuccess = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Checkout Success</h1>
            <p style={{ fontSize: "24px" }}>Thank you for your purchase!</p>

            <Button
                component={Link}
                to={`/`}
                variant="contained"
                color="primary"
            >
                Return
            </Button>
        </div>
    );
};

export default CheckoutSuccess;
