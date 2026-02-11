import './inscription.css';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@mui/material';

function Inscription({ className }) {
  return (
    <section className={`inscription ${className} snap-section`}>
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
                <h3 className='hero-card-text'>Inscribirme &gt;</h3>
            </CardContent>
          </Card>

        <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              padding: "10px",
              marginTop: "20px",
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
                <h3 className='hero-card-text'>Ver Ruta &gt;</h3>
            </CardContent>
          </Card>
        <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
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
                <h3 className='hero-card-text'>&#8226; Cupos limitados</h3>
                <h3 className='hero-card-text'>&#8226; Invitación de reconocidos riders</h3>
            </CardContent>
          </Card>
    </section>
  );
}

export default Inscription;