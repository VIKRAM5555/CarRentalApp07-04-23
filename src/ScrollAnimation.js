import "./styles.css";
import { motion } from "framer-motion";

import ListSubheader from "@mui/material/ListSubheader";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";
import React from "react";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function hue(h) {
  return "hsl(" + h + ", 100%, 50%)";
}

function Card(props) {
  const background =
    "linear-gradient(306deg, " + hue(props.hueA) + ", " + hue(props.hueB) + ")";
  const navigate = useNavigate();
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }}>
        <Typography
          color="black"
          sx={{
            marginTop: "325px",
            fontWeight: 900,
            fontSize: "40px",
            color: "orange",
          }}
        >
          {props.price}
        </Typography>
      </div>
      <motion.div className="card" variants={cardVariants}>
        <img
          className="card"
          onClick={() => navigate(`/scrollanimation/${props.id}`)}
          src={props.images}
          alt={props.altText}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ScrollAnimation() {
  const food = React.useContext(UserContext);
  return food.map(function (item) {
    const images = item[0];
    const altText = item[1];
    const hueA = item[2];
    const hueB = item[3];
    const price = item[4];
    const id = item[5];
    return (
      <Card
        images={images}
        altText={altText}
        hueA={hueA}
        hueB={hueB}
        price={price}
        id={id}
        key={altText}
      />
    );
  });
}
