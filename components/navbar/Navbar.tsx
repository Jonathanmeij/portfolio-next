import Button from "../ui/Button";
import Container from "../ui/Container";
import GithubIcon from "../../public/iconmonstr-github.svg";
import LinkedInIcon from "../../public/iconmonstr-linkedin.svg";
import Image from "next/image";
import Divider from "../ui/Divider";

export default function Navbar() {
    // const handleScroll = () => {
    //     // const ding
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       }
    // };

    return (
        <nav className="fixed z-20 w-full">
            <div className="flex items-center justify-center w-full h-20 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
                <Container className="flex justify-between w-full">
                    <h1 className="text-2xl font-bold">Jonathan</h1>
                    <ul className="flex items-center gap-4 font-medium">
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
                </Container>
            </div>
            <Divider />
        </nav>
    );
}
