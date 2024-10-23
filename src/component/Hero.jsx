import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
<div className="">
    <div className="bg-black bg-opacity-30 w-full h-full absolute"></div>
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
<div className="flex justify-center ">
        <div className="absolute top-80 text-center z-20 ">
          <h1 className="text-orange-700 font-extrabold text-4xl box-">مساعدتك اليوم يمكن أن تصنع غداً أفضل لأحدهم</h1>
          <Link to="/home" className="block px-4 py-2 my-5 mx-auto w-32 text-write bg-orange-700 font-bold text-xl hover:text-white rounded-2xl  ">
              سجل الان
              </Link>
        </div>
</div>
</div>
  );
}

export default Hero;
