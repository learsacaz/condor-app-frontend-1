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

function TourDescription3({ className }) {
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

  // const { ref: firstCard, isVisible: isFirstCardVisible } = useAnimateOnScroll();
  // const { ref: secondCard, isVisible: isSecondCardVisible } = useAnimateOnScroll();
  // const { ref: thirdCard, isVisible: isThirdCardVisible } = useAnimateOnScroll();
  // const { ref: fourthCard, isVisible: isFourthCardVisible } = useAnimateOnScroll();

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
            start: "top 140px",
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
    <section className={`tour-description-n ${className}`}>
      <div className="tour-description-container">
        {/* <div className={`loader-container ${isFirstCardVisible ? 'opacity' : ''}`}> */}
        <div className="loader-container">
        </div>
        {/* <div className="loader-maxi-container">
        </div> */}
        <div>
          <Card
            ref={ addCard }
            sx={ cardStyles }
            // className={`feature__card ${isThirdCardVisible && !isFourthCardVisible ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}
          >
            <CardContent sx={ cardContentStyles }>
              <div className="tour-description-content">
                <div className="divider"></div>
                <h3 className='tour-description-title'>Para todos los niveles</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis possimus, repudiandae alias facere non est quae. Quod, aut at tenetur placeat eius, id ab, reiciendis impedit excepturi maxime quos libero?
                Fugiat accusamus fuga in sit eveniet ullam animi, vel tempore, excepturi debitis hic cumque nobis sunt sapiente nam ea, provident quia. Delectus voluptates sapiente minima magnam, asperiores vitae aut iure.</p>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}

export default TourDescription3;