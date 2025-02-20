import Image from 'next/image'
import NavLink from './NavLink'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 bg-gray-800 pt-2 pl-2 z-10">
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
                <NavLink href={"/"} title={"Home"} />
                <NavLink href={"#about"} title={"About"} />
                <NavLink href={"#resume"} title={"Resume"} />
                <NavLink href={"#projects"} title={"Projects"} />
                <NavLink href={"#contact"} title={"Contact Me"} className={'bg-brand-primary '}/>
            </nav>
        </header>
    )
}

export default Header