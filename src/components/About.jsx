import React from "react";

function About() {
  return (
    <div
      name="About"
      className=" bg-gray-100 max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl text-center font-bold mb-5">About</h1>
        <p>
          Hello, I'm Prashant, Enthusiastic Computer Science Engineering student with a strong technical foundation and a passion for
          development. Skilled in programming and teamwork, with excellent communication abilities. Quick to adapt and
          eager to apply knowledge to real-world projects while continuously learning in the IT field.
        </p>
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Education
        </h1>
        <span>
       <b>Chandigarh University </b>  2025<br/>
        <b>BE-CSE</b>  [CGPA - 8.01]  -  Mohali, India<br/>
        <b>Higher Secondary </b> 2021<br/>
        SGRR Public School - CBSE - Percentage - 84.6% Srinagar Garhwal, India
        </span>
        
       
      
        
        
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Skills & Courses
        </h1>
        <span>
       <b>Programming Languages:</b>  C/C++,Python,HTML5,CSS3,Javascript,SQL<br/>
       <b>Technologies/Libraries:</b> ReactJs,Redux,TailwindCSS,Firebase<br/>
       <b>Database/Tools:</b> MYSQL,VS-Code,Git/GitHub,Linux<br/>
       <b>Courses:</b> DBMS,OOPS,Machine-learning,Data Structures and Algorithms,Operating System
        </span>
        <br />
        <br />

        <h1 className="text-blue-600 font-semibold text-xl">
           Achivements
        </h1>
        <span>
        Completed various courses on basic sciences (Discrete Maths, Probablity and Statistics,IOT) from
        NPTEL – platform to learn from the professors of IIT.<br/>
        SQL Proficiency: <b>5-Star</b> rank on HackerRank platform.<br/>
        Solved 250+ programming questions on various platform.<br/>
        2nd Runner-up in a University <b>Hackathon</b>, excelling in problem-solving, teamwork, and coding under a
        limited time constraint.

        </span>
       
      </div>
    </div>
  );
}

export default About;
