import React from 'react';

function Hero() {
  const imageUrl = "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
          WE CREATE IMPACTFUL
          <br />
          DIGITAL EXPERIENCES
        </h1>
        <p className="mt-8 text-lg font-light">
          Innovate. Create. Elevate.
        </p>
      </div>
    </div>
  );
}

export default Hero;