import { Card, CardContent } from "@mui/material";
import './tour-description.css'
import { useEffect } from "react";

const cardStyles ={
  display: "flex",
  flexDirection: "row",
  justifySelf: "end",
  gap: "30px",
  marginTop: "70px",
  marginBottom: "30dvh",
  padding: "10px",
  position: "sticky",
  top: "150px",
  width: "87%",
  maxWidth: "700px",
  height: "calc(100dvh - 200px)",
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

function TourDescription() {
  useEffect(() => {
    // window.addEventListener('scroll', () => {
      
    // })
  }, [])

  return (
    <section className="tour-description">
      <Card
        sx={ cardStyles }
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
      <Card
        sx={ cardStyles}
      >
        <CardContent sx={ cardContentStyles }>
          <div className="tour-description-content">
            <div className="divider"></div>
            <h3 className='tour-description-title'>Experiencia única con tecnología</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis possimus, repudiandae alias facere non est quae. Quod, aut at tenetur placeat eius, id ab, reiciendis impedit excepturi maxime quos libero?
            Fugiat accusamus fuga in sit eveniet ullam animi, vel tempore, excepturi debitis hic cumque nobis sunt sapiente nam ea, provident quia. Delectus voluptates sapiente minima magnam, asperiores vitae aut iure.</p>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={ cardStyles }
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
      <Card
        sx={ cardStyles }
      >
        <CardContent sx={ cardContentStyles }>
          <div className="tour-description-content">
            <div className="divider"></div>
            <h3 className='tour-description-title'>Paisajes que te van a enamorar de este deporte</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis possimus, repudiandae alias facere non est quae. Quod, aut at tenetur placeat eius, id ab, reiciendis impedit excepturi maxime quos libero?
            Fugiat accusamus fuga in sit eveniet ullam animi, vel tempore, excepturi debitis hic cumque nobis sunt sapiente nam ea, provident quia. Delectus voluptates sapiente minima magnam, asperiores vitae aut iure.</p>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={ [cardStyles, { transform: "scale(0)", marginBottom: "0px" }] }
      >
      </Card>
    </section>
  );
}

export default TourDescription;