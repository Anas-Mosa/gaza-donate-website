import React from "react";

function Hero() {
  return (
    <div
      style={{
        zIndex: 0,
        left: 0,
        width: '100%',
        height: 0,
        position: 'relative',
        paddingBottom: '',
      }}
    >
      <iframe
        src="https://skybox.blockadelabs.com/e/939b09a3e212845b52e5809c6415d96e"
        style={{
          top: '0',
          left: 0,
          width: '100%',
          height: '100vh',
          position: 'absolute',
          border: 0,
        }}
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>
  );
}

export default Hero;
