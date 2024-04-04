import React from "react";

const About = () => {
  return (
    <section className="h-[700px] flex ">
      <div className="w-1/2 text-center p-5 mt-10">
        <h1 className="text-6xl text-white p-4">I am Karthikeyan P</h1>
        <h3 className="text-4xl p-4 hover:text-white">Frontend Developer</h3>
        <p className="text-2xl text-justify">
          Recent post graduate with a degree in Master of Computer Application
          and a passion for FrontEnd development. Proficient in HTML, CSS,
          JavaScript with a strong foundation in React UI Library. Eager to
          contribute to a dynamic team and apply my skills in a collaborative
          environment.
        </p>
      </div>
      <div className="p-20">
        <img
          className="rounded-lg"
          src="https://avatars.githubusercontent.com/u/149820314?v=4"
          alt="photo"
        />
      </div>
    </section>
  );
};

export default About;
