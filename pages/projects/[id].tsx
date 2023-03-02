import Container from "@/components/ui/Container";
import { getAllProjectIds } from "@/lib/projects/projects";
import { getProjectData } from "@/lib/projects/projects";
import Date from "@/components/ui/Date";
import Image from "next/image";
import ImageAuthor from "../../public/images/kite.jpg";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/Button";

type project = {
    id: string;
    title: string;
    date: string;
    tags?: string[];
    url?: string;
    github?: string;
    contentHtml: string;
};

export default function ProjectPage({ projectData }: { projectData: project }) {
    console.log(projectData.contentHtml);

    return (
        <div className="min-h-screen pt-20">
            <Container className="pt-10 m-auto">
                <ProjectPageHeader projectData={projectData} />
                <article className="prose prose-lg prose-invert prose-pre:bg-gray-800 ">
                    <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                </article>
            </Container>
        </div>
    );
}

function ProjectPageHeader({ projectData }: { projectData: project }) {
    return (
        <>
            <header className="flex flex-col w-full gap-8">
                <div className="flex items-center gap-4">
                    <Image
                        src={ImageAuthor}
                        alt="Picture of the author"
                        width={70}
                        height={70}
                        className="rounded-full"
                    />
                    <div>
                        <p className="">Jonathan van der Meij</p>
                        <p className="text-gray-300 ">{projectData.date}</p>
                    </div>
                </div>
                {projectData.tags && (
                    <div className="flex flex-wrap gap-2">
                        {projectData.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                )}
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-bold">{projectData.title}</h1>
                </div>
                {projectData.url && projectData.github && (
                    <div className="flex gap-4">
                        <a href={projectData.url} target="_blank">
                            <Button color="secondary">View live</Button>
                        </a>
                        <a href={projectData.github} target="_blank">
                            <Button color="secondary">View on Github</Button>
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
}
