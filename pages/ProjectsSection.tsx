import Box from "@/components/ui/Box";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const projects = [
    {
        id: 1,
        title: "Workout Tracker",
        description: "A workout tracker app for mobile devices.",
        image: "workout-tracker.jpg",
        link: "/projects/workout-tracker",
    },
    {
        id: 2,
        title: "SmartTest",
        description: "A test application for students to take and create tests.",
        image: "smart-test-thumbnail.jpg",
        link: "/projects/smart-test",
    },
    {
        id: 3,
        title: "Coming soon",
        description: "Lorum ipsum dolor sit amet. Lorum ipsum dolor sit amet.",
        image: "coming-soon.jpg",
        link: "/projects/coming-soon",
    },
    {
        id: 4,
        title: "Coming soon",
        description: "Lorum ipsum dolor sit amet. Lorum ipsum dolor sit amet.",
        image: "coming-soon.jpg",
        link: "/projects/coming-soon",
    },
];

export default function ProjectsSection() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section
            id="projects"
            className="bg-gradient-radial scroll-m-16 from-gray-850  to-gray-900 border-b border-t border-gray-850 rounded-bl-[7rem] rounded-tr-[7rem] min-h-[30rem]"
        >
            <Container className="m-auto my-14">
                <h2
                    ref={ref}
                    className={`mb-8 text-3xl font-semibold transition ease-in-out  duration-500 -scroll-mt-3.5 ${
                        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                >
                    Projects
                </h2>
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <Link href={project.link} key={project.id}>
                            <Card
                                className="transition duration-200 ease-in-out cursor-pointer hover:scale-[1.04]"
                                hasAnimation
                            >
                                <Image
                                    src={require(`../public/images/${project.image}`)}
                                    alt={project.title}
                                />
                                <Divider />
                                <Box className="">
                                    <h3 className="mb-2 text-lg font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="pb-2 font-light tracking-wide text-gray-300 text-md">
                                        {project.description}
                                    </p>
                                    <div className="text-blue-400 cursor-pointer hover:underline ">
                                        show more <span>&rarr;</span>
                                    </div>
                                </Box>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
