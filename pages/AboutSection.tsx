import Container from "@/components/ui/Container";
import Image from "next/image";
import ImageKite from "../public/kite.jpg";

export default function AboutSection() {
    return (
        <div className="">
            <Container className="flex items-center justify-center h-full gap-10 m-auto">
                <div className="my-32 ">
                    <h2 className="text-2xl font-semibold ">About me</h2>
                    <p className="max-w-xl mt-4 font-light tracking-wide text-gray-300 text-md">
                        <span className="flex flex-col gap-2">
                            <span>
                                My name is Jonathan, an 18-year-old web developer from the
                                Netherlands. I&apos;m currently in my second year of
                                studies at <L>The Hague University of Applied Sciences</L>
                            </span>
                            <span>
                                I love to work with technologies such as <L>Javascript</L>
                                , <L>React</L>, and <L>CSS</L> to create stunning,
                                user-friendly interfaces.
                            </span>
                            <span>
                                While frontend development is my favorite part, I&apos;m
                                also proficient in backend technologies such as{" "}
                                <L>Dotnet</L> and am currently learning <L>Next.js</L> to
                                expand my skillset.
                            </span>
                            <span>
                                When I&apos;m not coding, I enjoy kitesurfing and going to
                                the gym.
                            </span>
                        </span>
                    </p>
                </div>
                <div className="overflow-hidden bg-gray-800 rounded-full w-[250px] h-[250px]">
                    <Image src={ImageKite} alt="Me Kite surfing" />
                </div>
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
