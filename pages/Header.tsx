import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { handleScroll } from "@/lib/scrollTo";
import { useInView } from "react-intersection-observer";

export default function Header() {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    let contactSection: HTMLElement | null;
    let projectsSection: HTMLElement | null;
    let aboutSection: HTMLElement | null;
    let homeSection: HTMLElement | null;

    if (typeof window !== "undefined") {
        setTimeout(() => {
            contactSection = document.getElementById("contact");
            projectsSection = document.getElementById("projects");
            aboutSection = document.getElementById("about");
            homeSection = document.getElementById("home");
        }, 100);
    }

    return (
        <div
            id="home"
            ref={ref}
            className=" w-full pt-20 h-[45rem] bg-gradient-radial from-gray-850 to-gray-900 border-b border-gray-850 rounded-bl-[7rem]"
        >
            <Container className="flex flex-col items-center justify-center w-full h-full gap-8 m-auto">
                <h1
                    className={`flex flex-col items-center gap-3 transition ease-in-out delay-100 duration-1000 ${
                        inView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <span className="text-2xl tracking-wide text-blue-500">
                        Hey, I am
                    </span>
                    <span className="text-5xl font-bold tracking-wide md:text-6xl">
                        {"Jonathan"}
                    </span>
                    <span className="text-2xl font-semibold tracking-wide md:text-3xl">
                        {"Web Developer"}
                    </span>
                </h1>
                <div
                    className={`flex gap-3 transition ease-in-out duration-1000 delay-500 ${
                        inView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Button
                        color="primary"
                        onClick={() => handleScroll(projectsSection, "start")}
                    >
                        Projects
                    </Button>
                    <Button
                        color="secondaryLigher"
                        onClick={() => handleScroll(contactSection, "start")}
                    >
                        Contact
                    </Button>
                </div>
            </Container>
        </div>
    );
}
