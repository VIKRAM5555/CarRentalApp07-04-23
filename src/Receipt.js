import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";
import { useParams } from "react-router-dom";
import { UserContext } from "./App";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import React from "react";
export function Receipt() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const food = React.useContext(UserContext);

  let foodData = food.find((data) => +data[5] === +id);
  return (
    <div className="Skills">
      <Box className="MainDiv">
        <Button
          startIcon={
            skill ? (
              <KeyboardDoubleArrowUpIcon />
            ) : (
              <KeyboardDoubleArrowDownIcon />
            )
          }
          onClick={() => setSkill(!skill)}
          class="button-75"
          role="button"
          style={{
            width: "25vw",
            marginLeft: "40%",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <span class="text">
            Booked Successfully .....{skill ? null : "<Tap once>"}
          </span>
        </Button>

        {skill ? (
          <div>
            {" "}
            <motion.p
              initial={{ x: -1600 }}
              animate={{ x: -2 }}
              transition={{ duration: 2, delay: 1 }}
              style={{ width: "35vw", marginLeft: "35%" }}
            >
              <Button
                class="button-75"
                role="button"
                style={{ height: "35vh" }}
              >
                <span class="text">
                  <img
                    style={{
                      height: "20vh",
                      width: "20vw",
                      display: "flex",
                      justifyItems: "center",
                      marginLeft: "80px",
                    }}
                    src={foodData[0]}
                  />
                  <div
                    style={{
                      letterSpacing: "2px",
                      lineHeight: "30px",
                      padding: "5px",
                    }}
                  >
                    <div style={{ fontWeight: "900" }}>{foodData[1]}</div>
                    <div style={{ fontWeight: "900" }}>{foodData[4]}</div>
                    <div style={{ fontWeight: "600" }}>
                      {" "}
                      Congratulations! Your car rental booking has been
                      confirmed and booked successfully!{" "}
                    </div>
                  </div>
                </span>
              </Button>
            </motion.p>
          </div>
        ) : null}

        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowCircleLeftIcon />}
          role="button"
          class="button-back"
        >
          <span class="text">Back</span>
        </Button>
      </Box>
    </div>
  );
}
