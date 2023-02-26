import Box from "@/components/ui/Box";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Image from "next/image";

const projects = [
    {
        title: "Workout Tracker",
        description: "A workout tracker app for mobile devices.",
        image: "workout-tracker.jpg",
        link: "/projects/workout-tracker",
    },
    {
        title: "Coming soon",
        description: "Lorum ipsum dolor sit amet. Lorum ipsum dolor sit amet.",
        image: "coming-soon.jpg",
        link: "/projects/coming-soon",
    },
    {
        title: "Coming soon",
        description: "Lorum ipsum dolor sit amet. Lorum ipsum dolor sit amet.",
        image: "coming-soon.jpg",
        link: "/projects/coming-soon",
    },
    {
        title: "Coming soon",
        description: "Lorum ipsum dolor sit amet. Lorum ipsum dolor sit amet.",
        image: "coming-soon.jpg",
        link: "/projects/coming-soon",
    },
];

export default function ProjectsSection() {
    return (
        <div className="bg-gradient-radial from-gray-850  to-gray-900 border-b border-t border-gray-850 rounded-bl-[7rem] rounded-tr-[7rem] min-h-[30rem]">
            <Container className="m-auto my-14">
                <h2 className="grid mb-8 text-3xl font-semibold">Projects</h2>
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <Card key={project.title} hasAnimation>
                            <Image
                                src={require(`../public/images/${project.image}`)}
                                alt={project.title}
                            />
                            <Divider />
                            <Box className="">
                                <h3 className="mb-2 text-lg font-semibold">
                                    {project.title}
                                </h3>
                                <p className="font-light tracking-wide text-gray-300 text-md">
                                    {project.description}
                                </p>
                            </Box>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
}
