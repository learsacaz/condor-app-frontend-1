

function RouteDetails() {
  return (
    <Card
    ref={ addCard }
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
  );
}

export default RouteDetails;