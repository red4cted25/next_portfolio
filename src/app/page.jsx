import Image from "next/image";
import Header from "./components/Header";

export default function Home() {

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="w-full h-1/2 bg-brand-secondary flex flex-col items-center py-24 gap-4">
        <h1 className="font-Astronika text-white text-9xl">Nico Diaz</h1>
        <div className="flex justify-between gap-4 my-auto mx-2/5">
          <p className="font-14 bg-brand-primary border border-2 border-brand-background text-center py-2 px-2 rounded-xl">Jr. Full Stack Web Dev.</p>
          <p className="font-14 bg-brand-primary border border-2 border-brand-background text-center py-2 px-2 rounded-xl">Est. 2025</p>
        </div>
      </section>
      {/* Panel 1 */}
      <section className="border-t border-brand-secondary flex w-full">
        <div className="flex py-10 bg-brand-primary items-center justify-center border-r-2 border-brand-secondary w-1/3">
          <Image
            src="https://res.cloudinary.com/drnaycy06/image/upload/c_crop,w_350,h_350,ar_1:1/v1739913357/bend_zi3sbw.jpg"
            alt="Nico Leaning on Rail"
            width={350}
            height={350}
          />
        </div>
        <div>
          <h2 className="text-brand-primary text-6xl my-4 ml-4">Who... <span className="italic">Is</span> Nico?</h2>
          <p className="text-lg ml-4">I'm Nicolas Diaz, or Nico, and I'm a driven and adept entry level web developer with an immense passion for both web development and technology.</p>
        </div>
      </section>
      {/* Panel 2 */}
      <section className="border-t border-brand-secondary flex  w-full">
        <div className="ml-6 w-2/3">
          <h2 className="text-8xl"><span className="text-6xl">For ...</span><br />Creative Ideas</h2>
          <p className="text-lg m-4">How much I know in each of my web development skills</p>
        </div>
        {/* Skillset */}
        <div className="w-1/3 flex flex-col border-l-2 items-center border-brand-secondary">
          <div className="flex mt-2 self-start">
            {/* HTML */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar"><span className="text-brand-background">HTML<br />100%</span></div>
            {/* CSS */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar"><span className="text-brand-background">CSS<br />100%</span></div>
          </div>
          <div className="flex mt-2">
            {/* Node.js */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'95', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">NodeJS<br />95%</span>
            </div>
            {/* Express.js */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">EJS<br />100%</span>
            </div>
          </div>
          <div className="flex mt-2 self-end">
            {/* JavaScript */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">JS<br />100%</span>
            </div>
            {/* MongoDB */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'80', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">MongoDB<br />80%</span>
            </div>
          </div>
          <div className="flex mt-2">
            {/* React */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'100', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">ReactJS<br />100%</span>
            </div>
            {/* Next.js */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'70', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">NextJS<br />70%</span>
            </div>
          </div>
          <div className="flex mt-2 self-start">
            {/* TailwindCSS */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'95', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">Tailwind<br />95%</span>
            </div>
            {/* Typescript */}
            <div className="radial-progress text-brand-primary text-center bg-brand-primary-dark" style={{'--value':'0', '--size':'8rem', '--thickness':'.75rem'}} role="progressbar">
              <span className="text-brand-background">Typescript<br />0%</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
