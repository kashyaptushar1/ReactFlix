import React, { useEffect, useRef } from "react";
import my_photo from "/My_photo.jpg"; // Import the image
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";

function About() {
  const navigate = useNavigate();
  const typedRef = useRef(null); // Create a ref to hold the Typed.js instance

  // Color function for random color
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.7)`;
  };

  useEffect(() => {
    // Initialize Typed.js with a callback to change color
    typedRef.current = new Typed(".role", {
      strings: [
        "Tushar Kashyap",
        "Java Developer",
        "Full Stack Developer",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      
      preStringTyped: (arrayPos, self) => {
        // Dynamically change color before each string is typed
        const newColor = color(); // Get a random color
        self.el.style.color = newColor; // Apply the color to the element
      },
    });

    return () => {
      // Cleanup on unmount
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${my_photo})`, // Interpolate the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1 className="text-2xl font-semibold mt-[2%] text-zinc-400">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ml-[2%] mr-[2%]  ri-arrow-left-line"
        ></i>
        About
      </h1>

      <h1 className="text-white text-lg md:text-[3vw] mb-4 font-bold mt-[8%] ml-[4%]">
        Hello, I am{" "}
        <span className="role text-white"></span>
      </h1>

      <p className="text-white w-[40%] ml-[4%] text-[1.6vw]">
        👋 Hi, I'm Tushar Kashyap, a 19-year-old full-stack web developer currently pursuing a Bachelor of Science (Honours) in Computer Science from Jaypee University, Anoopshahr. I'm passionate about building modern, responsive web applications and have hands-on experience with technologies like React, Node.js, Express, MongoDB, and more.

I’ve worked with startups on real-world projects and love turning ideas into functional web platforms. I completed my schooling from L.D.A.V Inter College, Anoopshahr, and I’m constantly exploring new tech and tools to sharpen my development skills.
      </p>
    </div>
  );
}

export default About;
