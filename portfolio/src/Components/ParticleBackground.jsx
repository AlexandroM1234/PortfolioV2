import Particles from "react-tsparticles";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

const ParticleBackground = (props) => {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Particles
      id="tsparticles"
      init={props.init}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 15,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: colorMode === "light" ? "000000" : "FFFFFF",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: colorMode === "light" ? "000000" : "FFFFFF",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    ></Particles>
  );
};

export default ParticleBackground;
