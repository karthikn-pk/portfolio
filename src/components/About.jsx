import React from "react";

const About = () => {
  return (
    <section className="h-[700px] flex ">
      <div className="w-1/2 text-center p-5">
        <h1 className="text-5xl">I am Karthikeyan P</h1>
        <h3 className="text-xl">Frontend Developer</h3>
        <p>I am</p>
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
