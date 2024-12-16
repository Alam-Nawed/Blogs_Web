import React from "react";
import image from "../images/hello.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row space-y-4 items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={image} alt="img" className="rounded-full scale-75" />
      </div>

      <div className="w-full md:w-2/4 space-y-4 font-semibold text-xl">
        <p className="text-center text-3xl text-orange-500">
          Welcome to our blog!
        </p>
        <p>
          Whether you're interested in art, science, technology, food, sports,
          or any other topic, you'll find something here that piques your
          interest. Our team of writers is dedicated to delivering informative
          and entertaining articles that keep you informed and entertained.
        </p>
        <p>
          We value your feedback and suggestions, so please feel free to reach
          out to us with your thoughts or ideas. We're here to make your reading
          experience enjoyable and enriching.
        </p>
        <p>
          Thank you for visiting our blog, and we hope you enjoy exploring our
          content!
        </p>

        <div className="text-center items-center justify-center">
          {" "}
          <Link to="/contact" spy={true} smooth={true} duration={500}>
            <button className="bg-orange-500 rounded-md text-white px-4 py-3">
              CONTACT US
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
