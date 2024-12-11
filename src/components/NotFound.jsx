import { Typography, Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h1" color="white" sx={{ mb: 2, fontWeight: 'bold' }}>
                    404 - Not Found
                </Typography>
                <Typography variant="h6" color="white" sx={{ mb: 4, fontWeight: 'bold' }}>
                    The page you are looking for does not exist.
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleGoHome} sx={{
                    background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
                    padding: "0.75rem 2rem",
                    borderRadius: "2rem",
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                    "&:hover": {
                        background: "linear-gradient(45deg, #7873f5, #ff6ec4)",
                        boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
                    },
                }}>
                    Go to Home
                </Button>
            </Box>
        </Container>
    );
}