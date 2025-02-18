import React from "react";
import { Box, Typography, Rating } from "@mui/material";

const RatingContainer = () => {
    const ratingValue = 4.5; // Default rating
    const numberOfRatings = 12;
    return (
        <Box sx={{ padding: 2, marginTop: 2, marginBottom: 4, marginLeft: 8, borderRadius: '8px', width: 'fit-content' }}>
            <Typography variant="h6">Rating: {ratingValue}</Typography>
            <Rating name="size-large" defaultValue={4.5} precision={0.5} size="large" />
            <Typography variant="body2">{numberOfRatings} ratings</Typography>
        </Box>
    );
};

export default RatingContainer;
