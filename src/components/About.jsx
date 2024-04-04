import React from "react";

const About = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row h-full">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start p-5">
        <h1 className="text-4xl sm:text-6xl text-white p-4">
          I am Karthikeyan P
        </h1>
        <h3 className="text-2xl sm:text-4xl p-4 hover:text-white">
          Frontend Developer
        </h3>
        <p className="text-lg sm:text-2xl text-justify p-4">
          Recent post graduate with a degree in Master of Computer Application
          (MCA) and a passion for FrontEnd development. Proficient in HTML, CSS,
          JavaScript with a strong foundation in React UI Library. Used Redux
          State Management in my real-world projects. Eager to contribute to a
          dynamic team and apply my skills in a collaborative environment.
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-5">
        <img
          className="rounded-lg mx-auto sm:mx-0"
          src="https://avatars.githubusercontent.com/u/149820314?v=4"
          alt="photo"
        />
      </div>
    </section>
  );
};

export default About;
