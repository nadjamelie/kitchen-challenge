import React from "react";
import { Box, Container } from "@mui/material";
import Rating from '@mui/material/Rating';

const LeftContainer = () => {
    return (
        <Container maxWidth="sm" sx={{ ml: 0, px: 2 }}>

            <Box component="main">
                <img
                    src="https://tatyanaseverydayfood.com/wp-content/uploads/2017/05/resized-Raspberry-Pistachio-Eclairs-video-recipe-768x1024.jpg"
                    alt="Recipe Image"
                    className="recipe-img"
                />
            </Box>
        </Container>
    );
};

export default LeftContainer;
