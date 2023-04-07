import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";
import silveSeden from "./Images/silveSedan.png";
import whiteJeep from "./Images/whiteJeep.png";
import sportCar from "./Images/sportCar.png";
import redSeden from "./Images/redSedan.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export function StartPage() {
  const navigate = useNavigate();
  const [index, SetIndex] = useState("");
  const startContent = [
    {
      title: "The Ultimate Luxury ",
      description:
        "The 2023 Mercedes-Benz S-Class Sedan - Experience the pinnacle of luxury with the latest iteration of the iconic Mercedes-Benz S-Class Sedan. With cutting-edge technology, unparalleled comfort, and a sleek design, this car is the epitome of automotive excellence",
      img: silveSeden,
    },
    {
      title: " The Perfect Adventure Companion ",
      description:
        "  Whether you're heading off-road or taking a weekend camping trip, the 2023 Jeep Wrangler Rubicon is the perfect adventure companion. With its rugged design, powerful engine, and advanced 4x4 system, this car can handle any terrain.",
      img: whiteJeep,
    },
    {
      title: "The Future of Driving",
      description:
        "Model S Plaid represents the future of driving. With its advanced electric powertrain, cutting-edge technology, and lightning-fast acceleration, this car is a true game-changer.",
      img: sportCar,
    },
    {
      title: "The Ultimate Sports Car ",
      description:
        "With its sleek design, powerful engine, and legendary performance, the Chevrolet Corvette Stingray is the ultimate sports car. Whether you're on the track or cruising down the highway, this car delivers an exhilarating driving experience like no other.",
      img: redSeden,
    },
  ];
  const handleClick = (val) => {
    const element = document.getElementById(`content${val}`);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="page">
      <div className="startpage">
        <div
          style={{ width: "5vw", height: "3vh" }}
          className="startpageContentButton"
        >
          {" "}
          <h1>Started</h1>
        </div>
        <div className="startpageContent">
          {startContent.map((a, i) => (
            <div
              id={i}
              onClick={(e) => {
                handleClick(e.target.id);
              }}
              className="startpageContentButton"
              style={{ overflow: "hidden", padding: "20px" }}
            >
              {
                <h4
                  id={i}
                  onClick={(e) => {
                    handleClick(e.target.id);
                  }}
                >
                  {a.title}
                </h4>
              }
              {a.description}
            </div>
          ))}
        </div>
      </div>

      <div className="startpageContent containers">
        <div className="desc">
          {startContent.map((a, i) => (
            <RollOn a={a} i={i} SetIndex={SetIndex} />
          ))}
        </div>

        {index !== "" && (
          <div>
            <img
              style={{ borderRadius: "20px", width: "50vw" }}
              src={startContent[index].img}
            />
          </div>
        )}
      </div>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowCircleLeftIcon />}
        role="button"
        class="button-back"
      >
        <span class="text">Back</span>
      </Button>
      <Button
        onClick={() => navigate("/signin")}
        startIcon={<ArrowCircleRightIcon />}
        role="button"
        class="button-next"
      >
        <span class="text">Next</span>
      </Button>
    </div>
  );
}
function RollOn({ i, a, SetIndex }) {
  const [colors, setColors] = useState();
  const myRef = useRef();
  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver((entries) => {
      console.log("entry", entries[0]);
      setColors(entries[0].isIntersecting);
      entries[0].isIntersecting && SetIndex(i);
    }, options);
    observer.observe(myRef.current);
  }, []);
  return (
    <div
      style={{
        width: "40vw",
        height: "74vh",
        color: colors ? "black" : "tomato",
        fontWeight: 700,
        letterSpacing: "5px",
        wordSpacing: "5px",
      }}
      className="startpageContentButton"
      id={`content${i}`}
      ref={myRef}
    >
      {<h1>{a.title}</h1>}
      {a.description}
    </div>
  );
}
