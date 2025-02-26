import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 bg-brand-secondary-light p-2 z-10">
            <Link href='/'>
                <Image
                    src="https://res.cloudinary.com/drnaycy06/image/upload/v1739917223/NicoLogo_njsqtc.svg"
                    alt="Nico Diaz Logo"
                    width={200}
                    height={100}
                    className="w-28 h-16 cursor-pointer"
                />
            </Link>
            <nav className="flex gap-6 mt-2 mr-4 text-white font-bold">
                <div className="relative group rounded-xl p-2">
                    <Link href='/'>Home</Link>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group rounded-xl p-2">
                    <Link href='#about'>About</Link>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group rounded-xl p-2">
                    <Link href='/Resume.pdf' target='_blank'>Resume</Link>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group rounded-xl p-2">
                    <Link href='#projects'>Projects</Link>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
                <div className="relative group bg-brand-primary rounded-xl p-2">
                    <Link href='https://www.linkedin.com/in/nicolas-diaz-6010b9353'>Contact Me</Link>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-bottom-right group-hover:origin-bottom-left"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header