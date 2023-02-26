import Button from "../ui/Button";
import Container from "../ui/Container";
import GithubIcon from "../../public/iconmonstr-github.svg";
import LinkedInIcon from "../../public/iconmonstr-linkedin.svg";
import Image from "next/image";
import Divider from "../ui/Divider";
import { useState } from "react";

export default function Navbar() {
    // const handleScroll = () => {
    //     // const ding
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       }
    // };

    return (
        <nav className="fixed z-20 w-full">
            <div className="flex items-center justify-center w-full h-20 bg-gray-900 bg-opacity-80 backdrop-blur">
                <Container
                    maxWidth="7xl"
                    className="flex items-center justify-between w-full"
                >
                    <h1 className="text-2xl font-bold">Jonathan</h1>
                    <ul className="items-center hidden gap-4 font-medium md:flex">
                        <li>
                            <Button>Home</Button>
                        </li>
                        <li>
                            <Button>Projects</Button>
                        </li>
                        <li>
                            <Button color="secondary">Contact</Button>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/Jonathanmeij">
                                <Button padding="small">
                                    <Image
                                        className="text-white "
                                        src={GithubIcon}
                                        alt="Github"
                                    />
                                </Button>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/jonathan-van-der-meij-539452252/"
                            >
                                <Button padding="small">
                                    <Image src={LinkedInIcon} alt="LinkedIn" />
                                </Button>
                            </a>
                        </li>
                    </ul>
                    <MobileMenuButton />
                </Container>
            </div>
            <Divider />
        </nav>
    );
}

function MobileMenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

    return (
        <div
            className="flex flex-col items-center justify-center w-12 h-12 rounded md:hidden group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`${genericHamburgerLine} ${
                    isOpen ? "rotate-45 translate-y-[10px] " : "opacity-100 "
                }`}
            />
            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen ? "-rotate-45 -translate-y-[10px] opacity-100" : "opacity-100 "
                }`}
            />
        </div>
    );
}

// function MobileMenu(){
//     return (

//     )
// }
