import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useInView } from "react-intersection-observer";

export default function Header() {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
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
                    <span className="text-4xl font-bold tracking-wide md:text-5xl">
                        {"< Jonathan />"}
                    </span>
                    <span className="text-2xl font-semibold tracking-wide md:text-4xl">
                        {"{ Web Developer }"}
                    </span>
                </h1>
                <div
                    className={`flex gap-3 transition ease-in-out duration-1000 delay-500 ${
                        inView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Button color="primary">Projects</Button>
                    <Button color="secondaryLigher">Contact</Button>
                </div>
            </Container>
        </div>
    );
}
