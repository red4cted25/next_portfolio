import Image from "next/image";
import Header from "./components/Header";
import Marquee from "react-fast-marquee";

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
      <section className="flex flex-col w-full md:flex-row">
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
          <p className="text-lg m-4">How much I know in each of my web development skills</p>
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
            <div className="flex flex-col items-center mx-16 md:justify-around md:flex-row md:mx-32">
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
        <Marquee className="my-32 text-[35vh] overflow-y-none" autoFill speed={100}>
          <span className="px-8 text-brand-background" style={{'WebkitTextStroke':'6px #942c2c'}}>PORTFOLIO</span>
          <span className="px-8 text-brand-background" style={{'WebkitTextStroke':'6px #942c2c'}}>PORTFOLIO</span>
        </Marquee>
      </section>
    </>
  );
}
