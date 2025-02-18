import React, { useState } from 'react';
import {
  AppBar,
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import PortionAdjuster from './components/PortionAdjuster';
import Rating from '@mui/material/Rating';
import RatingContainer from './components/RatingContainer';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import SearchAppBar from './components/SearchAppBar';

function App() {
  const [portion, setPortion] = useState(1);

  return (
    <>
      <SearchAppBar />
      <Container sx={{ minWidth: "100vw", justifyContent: 'center', mx: "auto", px: 2 }}>

        <Box sx={{ ml: 8, mt: 10 }}>
          <Typography variant="h3" sx={{ ml: 1 }}>
            Raspberry Pistachio Éclair
          </Typography>
        </Box>

        <Box>
          <RatingContainer />
        </Box>

        <Box sx={{
          display: "flex", justifyContent: "flex-start",
          flexDirection: { xs: "column", sm: "row" },
          gap: "5vw",
          padding: { xs: "10px", sm: "20px" },
          maxWidth: "80vw",
          minWidth: "80vw",
        }}>
          <LeftContainer sx={{ flex: 1, minWidth: "45%" }} />
          <RightContainer sx={{ flex: 2, minWidth: "55%" }} />
        </Box>

        <Box component="main" sx={{ mt: 4, ml: "auto", mr: "auto" }}>
          <PortionAdjuster portion={portion} setPortion={setPortion} />
        </Box>

      </Container>
    </>
  );
}

export default App;