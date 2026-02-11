import { Card, CardContent, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import './route-details.css'
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
  height: "80dvh",
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
  height: "80dvh",
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

function RouteDetails({ className }) {
  const cardsRef = useRef([]);
  const progressRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0
  });
  // cardsRef.current = [];
  
  const addCard = el => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addProgress = el => {
  if (el && !progressRef.current.includes(el)) {
    progressRef.current.push(el);
  }
};

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      // const nextCard = cardsRef.current[i + 1];
      const progressBar = progressRef.current[i];

      gsap.fromTo(
        card,
        { scale: 0.85, opacity: 0, duration: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            // start: "top 150px",
            start: "top 180px",
            markers: false,
            end: "bottom 0px",
            toggleActions: "restart none none reverse",
            // end: "+=150px",
            // scrub: true,
            invalidateOnRefresh: true,
            onUpdate: ({ progress }) => {
              setScrollProgress({ ...scrollProgress, [i]: Math.round(progress * 100) });
              // scrollProgress[i] = Math.round(progress * 100);
              // console.log("onEnter", progress, direction, isActive);
            }
            // scroll(position) {
            //   console.log(position);
            // }
          },
        }
      );
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section className={`tour-description ${className}`}>
      <div className="tour-description-container">
        {/* <div className={`loader-container ${isFirstCardVisible ? 'opacity' : ''}`}> */}
        
        {/* <div className="loader-maxi-container">
        </div> */}
          <Card
            ref={ addCard }
            sx={ cardStyles }
            className="snap-section"
            // className={`feature__card ${isFirstCardVisible && !isSecondCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Una experiencia que combina innovación, tecnología, desafíos, naturaleza y comunidad ciclista</h3>
              </div>
            </CardContent>
          </Card>
          <Card
            ref={ addCard }
            sx={ cardStyles }
            className="snap-section"
            // className={`feature__card ${isFirstCardVisible && !isSecondCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Experiencia potenciada por tecnología</h3>
              </div>
            </CardContent>
          </Card>
          <Card
            ref={ addCard }
            sx={ cardStyles}
            className="snap-section"
            // className={`feature__card ${isSecondCardVisible && !isThirdCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Terrenos épicos </h3>
              </div>
            </CardContent>
          </Card>
          <Card
            ref={ addCard }
            sx={ cardStyles }
            className="snap-section"
            // className={`feature__card ${isThirdCardVisible && !isFourthCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Ambiente de élite y amateur</h3>
              </div>
            </CardContent>
          </Card>
          <Card
            ref={ addCard }
            sx={ cardStyles }
            className="snap-section"
            // className={`feature__card ${isFourthCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Premios y sorpresas</h3>
              </div>
            </CardContent>
          </Card>
          <Card
          className="snap-section"
            sx={ [lastCardStyles, { transform: "scale(0)", marginBottom: "0px" }] }
          >
          </Card>
      </div>
    </section>
  );
}

export default RouteDetails;