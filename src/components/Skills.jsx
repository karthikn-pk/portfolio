import React from "react";

const Skills = () => {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold m-4">FrontEnd Technologies</h1>
        <ul className="flex sm:min-w-[360px] flex-wrap">
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://msatechnosoft.in/blog/wp-content/uploads/2017/04/Web-Design-using-HTML-msa-technosoft.png"
              alt="html"
            />
          </li>
          <li className="m-4">
            <img
              className=" tech-logo shadowrounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lBJ4VTdro7PwcUoAAMaYyj_psG5FCucupPWZG3fUbQ&s"
              alt="css"
            />
          </li>
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss.png"
              alt="tailwind"
            />
          </li>
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://qph.cf2.quoracdn.net/main-qimg-d24933a6c63057c57c49521e3363a929"
              alt="react"
            />
          </li>
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://amani.home.blog/wp-content/uploads/2018/12/javascript-logo.png"
              alt="js"
            />
          </li>
          <li className="m-4">
            <img
              className=" tech-logo shadowrounded"
              src="https://chriscourses.com/blog/redux.jpg"
              alt="redux"
            />
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold m-4">Version Control</h1>
        <ul className="flex sm:min-w-[360px] flex-wrap">
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png"
              alt="git"
            />
          </li>
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-6-02-larger.png"
              alt="github"
            />
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold m-4">Testing Tools</h1>
        <ul className="flex sm:min-w-[360px] flex-wrap">
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://media.licdn.com/dms/image/D4D12AQHenDACAzjtPA/article-cover_image-shrink_720_1280/0/1694155689368?e=2147483647&v=beta&t=v7WFNjsY0lGyIcv6UfwEjra0ahnYnmx_cjySAjUc_W4"
              alt=""
            />
          </li>
          <li className="m-4">
            <img
              className="tech-logo shadowrounded"
              src="https://frontend-stuff.com/static/7c857cadee053c761fa7e2ca3ccae895/807a7/testing.jpg"
              alt="react testing"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
