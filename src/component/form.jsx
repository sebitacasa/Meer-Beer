import React from "react";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import './style.css'

function Form() {


  return (
    <div > 
    
      <Grid>
        <Card style={{ width: "auto", maxWidth: "auto", margin: "0 auto", backgroundColor: "black" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
          
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={15} item >
                  <TextField style={{backgroundColor: "white"}} placeholder="Enter first name"  variant="outlined" fullWidth required />
                </Grid>
              
                <Grid item xs={12} sm={15}>
                  <TextField style={{backgroundColor: "white"}} type="email" placeholder="Enter email"  variant="outlined" fullWidth required />
                </Grid>
               
                <Grid item  xs={12} sm={15} >
                  <TextField style={{backgroundColor: "white"}}  multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} >
                  {/* <Button type="submit" variant="contained" color="common.white" fullWidth>Submit</Button> */}
                  <a href="something" type="submit" class="button1">Enviar</a>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Form;