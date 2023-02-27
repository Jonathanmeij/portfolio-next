import Button from "../ui/Button";
import Container from "../ui/Container";
import GithubIcon from "../../public/iconmonstr-github.svg";
import LinkedInIcon from "../../public/iconmonstr-linkedin.svg";
import Image from "next/image";
import Divider from "../ui/Divider";
import { useState } from "react";
import { Menu } from "@headlessui/react";

export default function Navbar() {
    // const handleScroll = () => {
    //     // const ding
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       }
    // };

    return (
        <>
            <nav className="fixed z-20 w-full">
                <div className="flex items-center justify-center w-full h-20 bg-gray-900 bg-opacity-80 backdrop-blur">
                    <Container
                        maxWidth="7xl"
                        className="flex items-center justify-between w-full"
                    >
                        <h1 className="text-2xl font-bold">Jonathan</h1>
                        <ul className="items-center hidden gap-4 font-medium md:flex">
                            <li>
                                <Button>About</Button>
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
                    </Container>
                    <MobileMenuButton />
                </div>
            </nav>
        </>
    );
}

function MobileMenuButton() {
    const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

    return (
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
                    <Menu.Items className="absolute top-0 right-0 w-full translate-y-20 h-max backdrop-blur">
                        <Divider />
                        <div className="z-40 w-full py-16 bg-gray-900 opacity-80">
                            <MenuItems />
                        </div>
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

function MenuItems() {
    return (
        <Container className="flex flex-col w-full gap-8 ">
            <Menu.Item>{({ active }) => <Button fullWidth>About</Button>}</Menu.Item>
            <Menu.Item>{({ active }) => <Button fullWidth>Projects</Button>}</Menu.Item>
            <Menu.Item>{({ active }) => <Button fullWidth>Contact</Button>}</Menu.Item>
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
        </Container>
    );
}
