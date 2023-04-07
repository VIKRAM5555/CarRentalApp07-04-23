import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { UserContext } from "./App";
import React from "react";
import { useNavigate } from "react-router-dom";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const food = React.useContext(UserContext);
  const navigate = useNavigate();
  let foodData = food.find((data) => +data[5] === +id);
  console.log("answer", foodData);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
      style={{ marginLeft: "450px" }}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          background: "#6600ff",
        }}
      >
        {" "}
        <img
          style={{
            width: "50vw",
          }}
          src={foodData[0]}
        />
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        onClick={() => navigate(`/payment/${id}`)}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          width: "30vw",
          marginLeft: "100px",
          height: "20vh",
        }}
      >
        <motion.li
          variants={itemVariants}
          style={{
            lineHeight: "2PX",
          }}
        >
          <h3
            style={{
              fontWeight: "900",
            }}
          >
            {foodData[1]}
          </h3>
          <h2
            style={{
              fontWeight: "900",
            }}
          >
            {foodData[4]}
          </h2>
          <h5
            style={{
              fontWeight: "900",
              lineHeight: "50px",
            }}
          >
            DEPOSIT AMOUNT : $200 (Refundable)
          </h5>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
