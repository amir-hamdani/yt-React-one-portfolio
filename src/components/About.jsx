import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify- center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
            </p>
        </div>
        <p className="text-xl mt-20">
            I am full stack Developer. Befor devlopmet i was working as a lawyer and practice in Kasur.
            I am completing my education from PIAIC of Pakistan.  
        </p>

        <br />

        <p className="text-xl">
            I am full stack Developer. Befor devlopmet i was working as a lawyer and practice in Kasur.
            I am completing my education from PIAIC of Pakistan.
        
        </p>
    </div>
      
    </div>
  );
};

export default About;