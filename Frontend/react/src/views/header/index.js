import {
    AppBar,
    Avatar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography, Button,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton
                            color="inherit"
                            onClick={handleDrawerToggle}
                            aria-label="open drawer"
                            sx={{ m: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h4"
                            color="initial"
                            sx={{
                                color: "white",
                            }}
                        >
                            Pizzeria
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer onClose={handleDrawerToggle} anchor="left" open={open}>
                <Box
                    sx={{
                        backgroundColor: "#E6B437",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        width: "250px",
                    }}
                >
                    <Avatar
                        src="./logo.jpg"
                        sx={{ m: 2, width: 144, height: 144 }}
                    ></Avatar>
                    <Divider />
                    <Typography
                        variant="h5"
                        color="initial"
                        component="div"
                        sx={{ color: "white", m: 2, width: "100%", textAlign: "center" }}
                    >
                        Pizzeria
                    </Typography>
                    <Typography
                        variant="h7"
                        color="initial"
                        component="div"
                        sx={{ color: "white", m: 2, width: "100%", textAlign: "center" }}
                    >
                        Navegacion
                    </Typography>
                    <Divider />
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;