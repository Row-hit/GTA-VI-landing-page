import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2.5,

      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: () => {
        if (tl.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          tl.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.5,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.2,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.7,
      rotate: 0,
      x: "-50%",
      bottom: "-70%",
      duration: 2,
      delay: -0.7,
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.7,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      {/* ------Entry Point------ */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group ">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {/* ------End Entry Point------ */}

      {/* ------Hero Content----- */}
      {showContent && (
        <div className="main w-full  bg-black -rotate-[10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen">
            {/* ---Navbar--- */}
            <div className="navbar absolute top-0 left-0 z-[10] py-10 px-10 w-full  ">
              <div className="logo flex gap-7 items-center">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white" />
                  <div className="line w-8 h-2 bg-white" />
                  <div className="line w-5 h-2 bg-white" />
                </div>
                <h3 className="text-4xl -mt-[10px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            {/* --- bg & girl images && Content---  */}
            <div className="imagesDiv overflow-hidden w-full h-screen relative ">
              {/* --- sky ---   */}
              <img
                src="./sky.png"
                alt="bg"
                className="sky -rotate-[20deg] scale-[1.5] absolute top-0  left-0  w-full h-full object-cover"
              />
              {/* --- background ---   */}
              <img
                src="./bg.png"
                alt="bg"
                className="bg rotate-[-5deg] scale-[1.8] absolute bottom-0 right-0  w-full h-full object-cover"
              />
              {/* --- text ---   */}
              <div className="text text-white flex flex-col gap-3 absolute top-12 left-1/2 -translate-x-1/2 scale-[1.5] -rotate-[10deg]">
                <h1 className="text-[7rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[7rem] leading-none -ml-20">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-40">auto</h1>
              </div>
              {/* --- girl ---   */}
              <img
                src="./girlbg.png"
                alt="bg"
                className="character absolute  -bottom-[170%]  left-1/2 -translate-x-1/2  scale-[0.5] "
              />
            </div>

            {/* --- Bottom bar ---  */}
            <div className="btmBar text-white absolute bottom-0 left-0 z-[10] py-15 px-10 w-full bg-gradient-to-t from-black to-transparent ">
              <div className="flex items-center gap-3">
                <i className="ri-arrow-down-line text-4xl"></i>
                <h3 className="font-[Helvetica_Now_Display] text-xl">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-screen bg-black mt-10 flex items-center justify-center  px-10">
            <div className="flex text-white w-full h-screen ">
              <div
                className="left w-1/2
               relative h-screen "
              >
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="right w-1/2">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10  font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae, adipisci. Distinctio soluta facilis cupiditate aliquid
                  sed quisquam maxime praesentium mollitia architecto doloremque
                </p>
                <p className="mt-3  font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae, adipisci. Distinctio soluta facilis cupiditate aliquid
                  sed quisquam maxime praesentium mollitia architecto doloremque
                </p>
                <p className="mt-5  font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae, adipisci. Distinctio soluta facilis cupiditate aliquid
                  sed quisquam maxime praesentium mollitia architecto doloremque
                </p>
                <button className="bg-yellow-500 px-10 py-8 text-black mt-10 text-4xl cursor-pointer rounded">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
