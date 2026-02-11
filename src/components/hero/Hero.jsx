import { Card, CardContent } from '@mui/material';
import './hero.css'
import { useEffect, useState } from 'react';

function Hero({ className }) {
  const [beganScroll, setBeganScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setBeganScroll(window.scrollY > 0)
    })
  }, [])

  return (
    <section className={`hero ${className}`}>
      <h1 className={`hero-title ${!beganScroll }`}>Tour del <span className="condor">Condor</span></h1>
      <div className={`hero-card ${!beganScroll }`}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              padding: "10px",
              border: "none",
              borderRadius: "15px",
              backdropFilter: "blur(7px)",
              background: "rgba(230, 230, 230, 0.5)",
              boxShadow: "3px 3px 10px 3px rgba(0, 0, 0, 0.5)",
              width: "75%",
              maxWidth: "400px",
              alignSelf: "left",
              justifySelf: "start"
            }}
          >
            <CardContent>
              <h3 className='hero-card-text'>Desafía tus límites. Vive el tour que todos quieren conquistar.</h3>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}

export default Hero;