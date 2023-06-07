import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { handleScroll } from "@/lib/scrollTo";
import { useInView } from "react-intersection-observer";

export default function Header() {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });



    return (
        <div
            id="home"
            ref={ref}
            className=" w-full pt-16 h-[45rem] bg-gradient-radial from-gray-850 to-gray-900 border-b border-gray-850 rounded-bl-[7rem]"
        >
            <Container className="flex flex-col items-center justify-center w-full h-full gap-8 m-auto">
                <h1
                    className={`flex flex-col items-center md:gap-3 transition ease-in-out delay-100 duration-1000 ${
                        inView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <span className="text-2xl tracking-wide text-blue-400">
                        Hey, I am Jonathan
                    </span>
                    <span className="text-[2.6rem] text-center font-bold tracking-wide md:text-6xl">
                        Web-developer
                    </span>
                    <span className="text-2xl font-medium tracking-wide md:text-3xl">
                    </span>
                </h1>
                <div
                    className={`flex gap-3 transition ease-in-out duration-1000 delay-500 ${
                        inView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/*<Button*/}
                    {/*    color="primary"*/}
                    {/*    onClick={() => handleScroll(projectsSection, "start")}*/}
                    {/*>*/}
                    {/*    Projects*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*    color="secondaryLigher"*/}
                    {/*    onClick={() => handleScroll(contactSection, "start")}*/}
                    {/*>*/}
                    {/*    Contact*/}
                    {/*</Button>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 animate-pulse duration-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>

                </div>
            </Container>
        </div>
    );
}
