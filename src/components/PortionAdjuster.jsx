import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const decimalToFraction = (decimal) => {
    if (decimal % 1 === 0) return decimal.toString();
    const fractions = {
        0.5: "1/2",
        0.25: "1/4",
        0.75: "3/4",
        0.33: "1/3",
        0.67: "2/3",
        0.125: "1/8",
    };
    if (fractions[decimal]) return fractions[decimal];
    return decimal.toFixed(2);
};

const PortionAdjuster = ({ portion, setPortion }) => {
    const handlePortionChange = (change) => {
        setPortion((prev) => Math.max(1, prev + change));
    };

    const adjustIngredient = (amount) => {
        const adjusted = amount * portion;
        return decimalToFraction(adjusted);
    };

    return (
        <Box sx={{ width: "100%", p: 2, marginLeft: 8 }}>

            <Box sx={{ display: "flex", justifyContent: "left", alignItems: "center", gap: 0, mb: 2 }}>
                <Button
                    onClick={() => handlePortionChange(-1)}
                    variant="contained"
                    sx={{
                        minWidth: "40px",
                        height: "50px",
                        backgroundColor: "#F39BB5",
                        "&:hover": { backgroundColor: "#FFCCC0" },
                    }}
                >
                    -
                </Button>
                <TextField
                    value={portion}
                    onChange={(e) => setPortion(Number(e.target.value))}
                    type="number"
                    InputProps={{
                        inputProps: { min: 1 }
                    }}
                    sx={{
                        width: 60,
                        height: "50px",
                        backgroundColor: "white",
                        textAlign: "center",
                        "& input": {
                            "-moz-appearance": "textfield",
                            "-webkit-appearance": "none",
                            appearance: "none",
                            paddingRight: "0px",
                            textAlign: "center",
                            height: "100%",
                        },
                    }
                    }
                />
                <Button
                    onClick={() => handlePortionChange(1)}
                    variant="contained"
                    sx={{
                        minWidth: "40px",
                        height: "50px",
                        backgroundColor: "#F39BB5",
                        "&:hover": { backgroundColor: "#FFCCC0" },
                    }}
                >
                    +
                </Button>
                <Typography variant="h6" sx={{ ml: 1 }}>
                    Portion(s)
                </Typography>
            </Box>

            <Typography variant="h6">For the Choux Pastry:</Typography>
            <Box sx={{ pl: 2, py: 1 }}>
                <Typography variant="body1">{adjustIngredient(236)} ml water</Typography>
                <Typography variant="body1">{adjustIngredient(113)} g unsalted butter</Typography>
                <Typography variant="body1">{adjustIngredient(0.25)} tsp salt</Typography>
                <Typography variant="body1">{adjustIngredient(125)} g all-purpose flour</Typography>
                <Typography variant="body1">{adjustIngredient(4)} large eggs</Typography>
            </Box>
            <Typography variant="h6">For the Filling:</Typography>
            <Box sx={{ pl: 2, py: 1 }}>
                <Typography variant="body1">{adjustIngredient(100)} g shelled pistachios</Typography>
                <Typography variant="body1">{adjustIngredient(118)} ml Irish cream; Bailey’s</Typography>
                <Typography variant="body1">green food coloring</Typography>
                <Typography variant="body1">{adjustIngredient(227)} g cream cheese, softened</Typography>
                <Typography variant="body1">{adjustIngredient(90)} g white chocolate chips, melted</Typography>
                <Typography variant="body1">{adjustIngredient(236)} ml heavy cream, chilled</Typography>
            </Box>

            <Typography variant="h6">For the Glaze:</Typography>
            <Box sx={{ pl: 2, py: 1 }}>
                <Typography variant="body1">{adjustIngredient(0.5)} cup freeze-dried raspberries</Typography>
                <Typography variant="body1">{adjustIngredient(175)} g white chocolate chips</Typography>
                <Typography variant="body1">{adjustIngredient(118)} ml heavy cream</Typography>
                <Typography variant="body1">{adjustIngredient(250)} g fresh raspberries</Typography>
            </Box>
        </Box>
    );
};

export default PortionAdjuster;
