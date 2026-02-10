import { Card, CardContent, CardMedia, LinearProgress, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './header.css';
import { useEffect, useRef, useState } from 'react';

function Header() {

  const [menu, setMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const menuOpenIcon = useRef(null)
  const [progress, setProgress] = useState(0)

  const handleClose = (close, e = null) => {
    if (close) {
      setMenu(false)
      setAnchorEl(e)
    } else {
      setMenu(true)
      setTimeout(() => {
        setAnchorEl(menuOpenIcon.current)
      }, 100)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollPosition / maxScrollHeight;
      setProgress(scrollPercent * 100)
    })
  }, [])

  return (
    <header>
      <div className="header-container">
        <div>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              padding: "10px 20px",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              backdropFilter: "blur(30px)",
              background: "rgba(255, 255, 255, 0.1)",
              width: "210px"
            }}
          >
            <CardMedia
              component="img"
              height="55"
              image="/public/assets/logos/logotipo blanco transparente_1.svg"
              alt="logotipo"
            />
            <CardContent className='hamburger-menu__container'>
              { menu
                ? <MenuOpenIcon ref={menuOpenIcon} className='hamburger-menu hamburger-menu__open' sx={{ fontSize: 40 }} onClick={() => handleClose(true)} />
                : <MenuIcon className='hamburger-menu hamburger-menu__open' sx={{ fontSize: 40 }} onClick={(e) => handleClose(false, e)} />
              }
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menu}
                onClose={() => handleClose(true)}
                slotProps={{
                  list: {
                    'aria-labelledby': 'navigation',
                  },
                  paper: {
                    sx: {
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "4px",
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"
                    }
                  }
                }}
              >
                <MenuItem >Bienvenida</MenuItem>
                <MenuItem >Tour</MenuItem>
                <MenuItem >Detalles del camino</MenuItem>
                <MenuItem >Detalles de la ruta</MenuItem>
                <MenuItem >Detalles de la carrera</MenuItem>
                <MenuItem >Detalles de logística</MenuItem>
                <MenuItem >Reglas generales</MenuItem>
                <MenuItem >Cierre</MenuItem>
              </Menu>
            </CardContent>
          </Card>
          <LinearProgress variant="determinate" value={progress} />
        </div>
        <div>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              padding: "10px",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              backdropFilter: "blur(30px)",
              background: "rgba(79, 192, 212, 0.5)",
              height: "60px",
              width: "130px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h4 className='header-button' role='button'>Suscribirse &gt;</h4>
          </Card>
        </div>
      </div>
    </header>
  );
}

export default Header;