import React from "react";
import { AppBar, Toolbar, Typography, Grid, Link } from "@material-ui/core";
import { Security, Info } from "@material-ui/icons";
import Form from "./form";
import { Box } from "@mui/material";

const Footer = () => (
  <>
    <Grid
      container
      justify="center"
      style={{ minHeight: "300px", backgroundColor: "black" }}
    >
      <Grid container item sm={6} xs={10} justify="space-between">
        <Grid item sm={5} xs={11}>
          <Info color="action" />
          <Typography paragraph style={{ color: "white", fontSize: "20px" }}>
            <strong>Un estilo moderno derivado de una IPA Americana, pero con mayor
            sabor a malta caramelo similar a una Amber Ale. Tan lupulada como la
            IPA Americana pero añadiendo mayor carácter a malta con algo de
            caramelo, toffee y/o frutos secos. La IPA Roja es un poco más
            sabrosa y maltosa que una IPA Americana sin ser dulce o pesada. El
            color suele ser rojizo-ámbar y con una espuma blanca de buena
            retención.
            </strong>
          </Typography>
        </Grid>
        <Grid item sm={5} xs={12}>
          
          <Box>

          <Form />
          </Box>
          
        </Grid>
      </Grid>
    </Grid>
    <AppBar position="static" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: "center", backgroundColor: "white" }}>
        <Typography style={{ color: "black" }} variant="caption">
          ©2022
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default Footer;
