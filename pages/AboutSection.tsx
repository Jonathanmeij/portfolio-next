import Container from "@/components/ui/Container";
import Image from "next/image";
import ImageKite from "../public/images/kite.jpg";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div className="">
            <Container className="flex flex-col-reverse items-center justify-center h-full gap-10 m-auto my-28 md:flex-row ">
                <div className="" ref={ref}>
                    <h2
                        className={`text-3xl font-semibold transition ease-in-out duration-500 ${
                            inView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        } `}
                    >
                        About me
                    </h2>
                    <div
                        className={` transition  delay-100 ease-in-out duration-500 ${
                            inView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        } `}
                    >
                        <p className="max-w-xl mt-4 font-light tracking-wide text-gray-300 text-md">
                            <span className="flex flex-col gap-2">
                                <span>
                                    My name is Jonathan, an 18-year-old web developer from
                                    the Netherlands. I&apos;m currently in my second year
                                    of studies at{" "}
                                    <L>The Hague University of Applied Sciences</L>
                                </span>
                                <span>
                                    I love to work with technologies such as{" "}
                                    <L>Javascript</L>, <L>React</L>, and <L>CSS</L> to
                                    create stunning, user-friendly interfaces.
                                </span>
                                <span>
                                    While frontend development is my favorite part,
                                    I&apos;m also proficient in backend technologies such
                                    as <L>Dotnet</L> and am currently learning{" "}
                                    <L>Next.js</L> to expand my skillset.
                                </span>
                                <span>
                                    When I&apos;m not coding, I enjoy kitesurfing and
                                    going to the gym.
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
                <ImageContainer />
            </Container>
        </div>
    );
}

function L({ children }: { children: React.ReactNode }) {
    return (
        <a className="font-medium text-blue-300 cursor-pointer hover:underline">
            {children}
        </a>
    );
}

function ImageContainer() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.7,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`overflow-hidden bg-gray-800 rounded-3xl w-[250px] h-[250px] 
            transition ease-in-out duration-500 delay-100 ${
                inView ? "opacity-100" : "opacity-0"
            }
        `}
        >
            <Image
                src={ImageKite}
                alt="Me Kite surfing"
                className="object-cover h-full"
            />
        </div>
    );
}
