import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";

export default function Footer() {
    return (
        <>
            <Divider />

            <div className="flex items-center justify-center w-full p-6 bg-gray-800 bg-opacity-80 backdrop-blur ">
                <Container
                    maxWidth="7xl"
                    className="flex flex-col items-center justify-between w-full gap-4 md:flex-row md:gap-0"
                >
                    <h1 className="text-2xl font-bold">Jonathan</h1>
                    <ul className="flex flex-col items-center gap-4 font-medium md:flex-row">
                        <li>
                            <Button>Home</Button>
                        </li>
                        <li>
                            <Button>Projects</Button>
                        </li>
                        <li>
                            <Button>Contact</Button>
                        </li>
                        {/* <li>
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
                    </li> */}
                    </ul>
                </Container>
            </div>
            <div className="bg-gray-900 ">
                <Container maxWidth="7xl" className="flex justify-center w-full m-auto">
                    <p className="py-8 text-gray-600 ">
                        © 2023 Jonathan van der Meij. All rights reserved.
                    </p>
                </Container>
            </div>
        </>
    );
}
