import Image from "next/image";
import Header from "./components/Header";
import Marquee from "react-fast-marquee";
import Project from "./components/Project";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="w-full h-1/2 bg-gradient-to-br from-brand-secondary via-brand-primary-dark to-brand-secondary flex flex-col items-center py-24 gap-4">
        <h1 className="font-Astronika text-white text-center text-9xl">Nico Diaz</h1>
        <div className="flex justify-between gap-4 my-auto mx-2/5">
          <p className="font-14 bg-brand-primary border border-2 border-brand-background text-center py-2 px-2 rounded-xl">Jr. Full Stack Web Dev.</p>
          <p className="font-14 bg-brand-primary border border-2 border-brand-background text-center py-2 px-2 rounded-xl">Est. 2025</p>
        </div>
      </section>
      {/* Panel 1 */}
      <section className="flex flex-col w-full md:flex-row" id="about">
        <div className="flex py-10 bg-brand-primary items-center justify-center w-full md:w-1/3">
          <Image
            src="https://res.cloudinary.com/drnaycy06/image/upload/c_crop,w_350,h_350,ar_1:1/v1739913357/bend_zi3sbw.jpg"
            alt="Nico Leaning on Rail"
            width={350}
            height={350}
          />
        </div>
        <div className="ml-4 my-4">
          <h2 className="text-brand-primary text-6xl my-4 font-bold">Who... <span className="italic">Is</span> Nico?</h2>
          <p className="text-lg">I'm Nicolas Diaz, or Nico, and I'm a driven and adept entry level web developer with an immense passion for both web development and technology.</p>
        </div>
      </section>
      {/* Panel 2 */}
      <section className="flex w-full flex-col">
        <div className="ml-6 w-full md:w-2/3">
          <h2 className="text-8xl"><span className="text-6xl">For ...</span><br />Creative Ideas</h2>
          <p className="text-lg m-4">How much I know in each of my web development skills:</p>
        </div>
        {/* Skillset */}
        <div className="flex flex-col justify-center gap-4 mt-2 py-8">
            <div className="flex flex-col mx-16 md:mx-0 md:justify-around md:flex-row">
              {/* HTML */}
              <div className="radial-progress text-brand-primary text-center" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                HTML<br />100%
              </div>
              {/* JavaScript */}
              <div className="radial-progress text-brand-primary text-center self-end md:self-auto" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                JS<br />100%
              </div>
              {/* Express.js */}
              <div className="radial-progress text-brand-primary text-center" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                EJS<br />100%
              </div>
              {/* React */}
              <div className="radial-progress text-brand-primary text-center self-end md:self-auto" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                ReactJS<br />100%
              </div>
              {/* TailwindCSS */}
              <div className="radial-progress text-brand-primary text-center" style={{'--value':'95', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                Tailwind<br />95%
              </div>
            </div>
            <div className="flex flex-col mx-16 md:justify-around md:flex-row md:mx-32">
              {/* CSS */}
              <div className="radial-progress text-brand-primary text-center self-end md:self-auto" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                CSS<br />100%
              </div>
              {/* Node.js */}
              <div className="radial-progress text-brand-primary text-center" style={{'--value':'95', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                NodeJS<br />95%
              </div>
              {/* MongoDB */}
              <div className="radial-progress text-brand-primary text-center self-end md:self-auto" style={{'--value':'80', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                MongoDB<br />80%
              </div>
              {/* Next.js */}
              <div className="radial-progress text-brand-primary text-center" style={{'--value':'70', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
                NextJS<br />70%
              </div>
            </div>
        </div>
      </section>
      {/* Panel 3 */}
      <section className="flex items-center w-full">
        <Marquee className="my-32 text-[35vh] overflow-y-none" autoFill speed={150}>
          <span className="px-8 text-brand-background" style={{'WebkitTextStroke':'6px #942c2c'}}>PORTFOLIO</span>
          <span className="px-8 text-brand-background" style={{'WebkitTextStroke':'6px #942c2c'}}>RESUME</span>
          <span className="px-8 text-brand-background" style={{'WebkitTextStroke':'6px #942c2c'}}>PROJECTS</span>
        </Marquee>
      </section>
      {/* Panel 4 */}
      <section id="projects">
        <div className="flex flex-wrap gap-10 justify-center md:px-48">
          <Project title="First Business" img="https://res.cloudinary.com/drnaycy06/image/upload/c_crop,ar_1:1/v1740256458/a12a2b50-fefa-465a-83e8-39735087af80.png" desc="One of my first projects, a website for a coffee business I made up." date="12/6/23" />
          <Project title="Tic Tac Toe" img="https://res.cloudinary.com/drnaycy06/image/upload/c_crop,ar_1:1/v1740210074/e4d572b8-49b2-408e-a109-461bc8016dee.png" desc="A simple Tic-Tac-Toe web game that can be played with a friend" date="2/23/24" />
          <Project title="Memory Game" img="https://res.cloudinary.com/drnaycy06/image/upload/v1740256954/f1603c1b-d0d5-4300-8e0c-f0198aaf825f.png" desc="A memory card game using HTML, CSS, and JavaScript with pictures from the indie game Risk of Rain" date="3/5/24" />
          <Project title="Hangman Game" img="https://res.cloudinary.com/drnaycy06/image/upload/v1740257137/6dc0df33-e4b8-403e-818b-8c0bd30de5bd.png" desc="A Hangman game as a part of a hangman design contest for our class. I focused on visual design for this project, and I used SCSS and JQuery for animations/styling." date="4/25/24" />
          <Project title="Pantheon Energy" img="https://res.cloudinary.com/drnaycy06/image/upload/v1740550490/5d8dfcb3-f165-4335-bd5c-4ee262dbd6d6.png" desc="My capstone project for my first year of West-MEC. The goal was to create a startup business, figure out the budget for one year given 100k starting, and design a site for the products the business sells." date="5/20/24" />
          <Project title="Jenkin's Secret Society" img="https://res.cloudinary.com/drnaycy06/image/upload/c_crop,ar_1:1/v1740548646/52bd16fa-c86d-4892-a19c-67e6ed9337d8.png" desc="A practice for servers and NodeJS modules by creating a puzzle game that uses the url as the answer check" date="9/10/24" />
          <Project title="MovieBuster API" img="https://res.cloudinary.com/drnaycy06/image/upload/v1740549251/37fc1e41-b36c-4658-b45a-4e4da558a500.png" desc="Created an API with two or more related JSON databases. Using this data, I made a fully RESTful API that includes all the standard REST requirements is implemented. This project includes GET, and POST endpoints and admin functionality that can update or remove parts of the database." date="10/7/24" />
          <Project title="JobConnect" img="https://res.cloudinary.com/drnaycy06/image/upload/v1740257511/a28f6940-f3f6-47e0-91fa-1e3c80c23e1d.png" desc="A website for FBLA Website Coding and Development 2024-25. The purpose for this project is a website for your school's guidance department so students can easily search job postings and employers can easily submit them. This website is made based on West-MEC" date="4/1/24" />
        </div>
        <div className="hidden md:flex w-1/2 mx-auto py-12 before:content-[''] before:flex-1 before:border-b-4 before:border-black before:m-auto after:content-[''] after:flex-1 after:border-b-4 after:border-black after:m-auto">
          <span className="flex items-center mx-6 text-2xl">Even More Projects on Github! <PiArrowBendUpRightBold className="mx-1 text-2xl"/> <Link href={'https://github.com/red4cted25'} className="mx-1 text-3xl hover:text-brand-primary"><FaGithub/></Link> </span>
        </div>
      </section>
      {/* Footer */}
      <footer className="flex flex-col items-center bg-brand-secondary-light p-6 md:justify-between md:flex-row">
        <div className="flex flex-col items-center md:flex-row">
          <Image src="https://res.cloudinary.com/drnaycy06/image/upload/v1739917223/NicoLogo_njsqtc.svg" alt="Nico Diaz Logo" width={200} height={100} className="w-28 h-16"/>
          <p className="ml-4 mb-4 md:mb-0 pt-2 text-sm text-white">All rights reserved &copy; 2025 Nicolas "Nico" Diaz</p>
        </div>
        <div className="flex gap-4 text-white text-3xl my-4 md:my-0">
          <Link href="https://github.com/red4cted25"><FaGithub /></Link>
          <Link href="https://www.linkedin.com/in/nicolas-diaz-6010b9353"><FaLinkedin /></Link>
          <Link href="https://www.instagram.com/red4cted25/"><FaInstagram /></Link>
        </div>
      </footer>
    </>
  );
}
