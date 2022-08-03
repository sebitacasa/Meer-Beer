import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import imagen from "../images/WhatsApp Image 2022-07-29 at 4.42.08 AM (1).jpeg";
import imagen2 from "../images/WhatsApp Image 2022-07-29 at 4.42.08 AM.jpeg";

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <img src={props.item.image} width="1300" height="700" />
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: imagen,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: imagen2,
    },
  ];

  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "0px", // 1
          color: "white", // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "white", // 2
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "0px", // 5
          textAlign: "right", // 4
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
