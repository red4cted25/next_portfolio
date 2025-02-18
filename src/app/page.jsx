import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex bg-gray-800 pt-2 pl-2">
      <Image
        src="https://res.cloudinary.com/drnaycy06/image/upload/v1739917223/NicoLogo_njsqtc.svg"
        alt="Nico Diaz Logo"
        width={200}
        height={100}
      />
      <nav className="flex items-end mt-2 mr-4">
        <a href="/" className="text-white p-2.5 hover:rounded-lg hover:bg-gray-300"></a>
        <a href="/" className="text-white p-2.5 hover:rounded-lg hover:bg-gray-300"></a>
        <a href="/" className="text-white p-2.5 hover:rounded-lg hover:bg-gray-300"></a>
        <a href="/" className="text-white p-2.5 hover:rounded-lg hover:bg-gray-300"></a>
        <a href="/" className="bg-brand-primary text-white p-2.5 hover:rounded-lg hover:bg-gray-300"></a>
      </nav>
    </header>
    {/* Hero Section */}
    <section className="w-full h-2/3 bg-brand-secondary">
      <h1 className="font-Astronika">Nico Diaz</h1>
      <div className="flex justify-between my-auto mx-2/5">
        <p className="font-14 bg-brand-primary border border-3 border-gray-500 text-center py-4 px-2 rounded-xl">Jr. Full Stack Web Dev.</p>
        <p className="font-14 bg-brand-primary border border-3 border-gray-500 text-center py-4 px-2 rounded-xl">Est. 2025</p>
      </div>
    </section>
    {/* Panel 1 */}
    <section className="border-t border-brand-secondary flex bg-brand-background">
      <div className="flex p-5 bg-brand-primary items-center justify-center border-r border-brand-secondary w-1/3">
        <Image
          src="https://res.cloudinary.com/drnaycy06/image/upload/v1739913357/bend_zi3sbw.jpg"
          alt="Nico Leaning on Rail"
          width={350}
          height={350}
        />
      </div>
    </section>
    </>
  );
}
