import { Card, CardContent, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import './tour-description.css'
// import { useAnimateOnScroll } from "../../utils/useAnimateOnScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardStyles ={
  display: "flex",
  flexDirection: "row",
  justifySelf: "end",
  gap: "30px",
  padding: "10px",
  position: "sticky",
  top: "140px",
  width: "87%",
  maxWidth: "520px",
  height: "calc(100dvh - 200px)",
  border: "none",
  borderRadius: "15px",
  backdropFilter: "blur(7px)",
  background: "rgba(230, 230, 230, 0.5)",
  boxShadow: "3px 3px 10px 3px rgba(0, 0, 0, 0.5)",
}

const lastCardStyles ={
  display: "flex",
  flexDirection: "row",
  justifySelf: "end",
  gap: "30px",
  padding: "10px",
  position: "sticky",
  top: "140px",
  width: "87%",
  maxWidth: "520px",
  height: "100dvh",
  border: "none",
  borderRadius: "15px",
  backdropFilter: "blur(7px)",
  background: "rgba(230, 230, 230, 0.5)",
  boxShadow: "3px 3px 10px 3px rgba(0, 0, 0, 0.5)",
}

const cardContentStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
}

const loaderStyles = {
  width: "100%",
  borderRadius: "50px",
}

function TourDescription1() {
  
  return (
    <section className={`tour-description-n`}>
      <div className="tour-description-container-n">
        {/* <div className={`loader-container ${isFirstCardVisible ? 'opacity' : ''}`}> */}
        
        {/* <div className="loader-maxi-container">
        </div> */}
          <Card
            sx={ cardStyles }
            // className={`feature__card ${isFirstCardVisible && !isSecondCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Evento oficial de MTB & Gravel</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis possimus, repudiandae alias facere non est quae. Quod, aut at tenetur placeat eius, id ab, reiciendis impedit excepturi maxime quos libero?
                Fugiat accusamus fuga in sit eveniet ullam animi, vel tempore, excepturi debitis hic cumque nobis sunt sapiente nam ea, provident quia. Delectus voluptates sapiente minima magnam, asperiores vitae aut iure.</p>
              </div>
            </CardContent>
          </Card>
          
      </div>
    </section>
  );
}

export default TourDescription1;