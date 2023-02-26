import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Head from "next/head";
import Header from "./Header";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Jonathan</title>
                <meta name="description" content="Jonathan van der Meij portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-900">
                <Header />
                {/* <Divider /> */}
                <AboutSection />
                <ProjectsSection />
                <Contact />
            </main>
        </>
    );
}
