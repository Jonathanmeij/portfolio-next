import Button from "../ui/Button";
import Container from "../ui/Container";
import GithubIcon from "../../public/iconmonstr-github.svg";
import LinkedInIcon from "../../public/iconmonstr-linkedin.svg";
import Image from "next/image";
import Divider from "../ui/Divider";
import { Menu, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { handleScroll } from "@/lib/scrollTo";

if (typeof window !== "undefined") {
    var contactSection = document.getElementById("contact");
    var projectsSection = document.getElementById("projects");
    var aboutSection = document.getElementById("about");
    var homeSection = document.getElementById("home");
}

export default function Navbar() {
    const router = useRouter();
    const isHome = router.pathname === "/";

    return (
        <>
            <nav className="fixed z-20 w-full">
                <div className="flex items-center justify-center w-full h-20 bg-gray-900 bg-opacity-80 backdrop-blur">
                    <Container
                        maxWidth="7xl"
                        className="flex items-center justify-between w-full"
                    >
                        <h1 className="text-2xl font-bold">
                            <Button
                                padding="none"
                                color="noneNoHover"
                                font="bold"
                                to={isHome ? undefined : "/"}
                                onClick={() => handleScroll(homeSection, "start")}
                            >
                                Jonathan
                            </Button>
                        </h1>
                        <ul className="items-center hidden gap-4 font-medium md:flex">
                            <li>
                                <Button
                                    onClick={() => handleScroll(aboutSection, "start")}
                                >
                                    About
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={() => handleScroll(projectsSection, "start")}
                                >
                                    Projects
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={() => handleScroll(contactSection, "center")}
                                    color="secondary"
                                >
                                    Contact
                                </Button>
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
                    </Container>
                    <MobileMenuButton />
                </div>
                <Divider />
            </nav>
        </>
    );
}

function MobileMenuButton() {
    const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

    const list = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -40,
        },
    };

    const item = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    return (
        <AnimatePresence>
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className="z-20 flex flex-col items-center justify-center w-12 h-12 mr-6 rounded md:hidden group">
                            <>
                                <div
                                    className={`${genericHamburgerLine} ${
                                        open
                                            ? "rotate-45 translate-y-[10px] "
                                            : "opacity-100 "
                                    }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${
                                        open ? "opacity-0" : ""
                                    }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${
                                        open
                                            ? "-rotate-45 -translate-y-[10px] opacity-100"
                                            : "opacity-100 "
                                    }`}
                                />
                            </>
                        </Menu.Button>
                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Menu.Items className="absolute top-0 right-0 w-full translate-y-20 rounded-xl h-max backdrop-blur">
                                <Divider />
                                <div className="z-40 w-full py-16 bg-gray-900 border-b rounded-b-3xl opacity-90 border-gray-850 ">
                                    <MenuItems />
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </AnimatePresence>
    );
}

function MenuItems() {
    return (
        <Container className="flex flex-col w-full gap-8 text-2xl rounded-xl">
            <TransitionChild delay={"delay-0"} leaveDelay={"delay-[150ms]"}>
                <Menu.Item>
                    {({ active }) => (
                        <Button
                            onClick={() => handleScroll(aboutSection, "start")}
                            fullWidth
                        >
                            About
                        </Button>
                    )}
                </Menu.Item>
            </TransitionChild>
            <TransitionChild delay={"delay-[50ms]"} leaveDelay={"delay-[100ms]"}>
                <Menu.Item>
                    {({ active }) => (
                        <Button
                            onClick={() => handleScroll(projectsSection, "start")}
                            fullWidth
                        >
                            Projects
                        </Button>
                    )}
                </Menu.Item>
            </TransitionChild>
            <TransitionChild delay={"delay-[100ms]"} leaveDelay={"delay-[50ms]"}>
                <Menu.Item>
                    {({ active }) => (
                        <Button
                            onClick={() => handleScroll(contactSection, "center")}
                            fullWidth
                        >
                            Contact
                        </Button>
                    )}
                </Menu.Item>
            </TransitionChild>
            <TransitionChild delay={"delay-[150ms]"} leaveDelay={"delay-0"}>
                <div className="flex items-center m-auto">
                    <Menu.Item>
                        {({ active }) => (
                            <a target="_blank" href="https://github.com/Jonathanmeij">
                                <Button>
                                    <Image
                                        className="text-white "
                                        src={GithubIcon}
                                        alt="Github"
                                    />
                                </Button>
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/jonathan-van-der-meij-539452252/"
                            >
                                <Button>
                                    <Image src={LinkedInIcon} alt="LinkedIn" />
                                </Button>
                            </a>
                        )}
                    </Menu.Item>
                </div>
            </TransitionChild>
        </Container>
    );
}

function TransitionChild({
    children,
    delay,
    leaveDelay,
}: {
    children: React.ReactNode;
    delay: string;
    leaveDelay: string;
}) {
    return (
        <Transition.Child
            enter={`transition ease-out duration-200 transform ${delay}`}
            enterFrom="-translate-x-10 opacity-0"
            enterTo="translate-x-0"
            leave={`transition ease-in duration-200 transform ${leaveDelay}`}
            leaveFrom="translate-x-0"
            leaveTo="translate-x-10 opacity-0"
            className={"m-auto"}
        >
            {children}
        </Transition.Child>
    );
}
