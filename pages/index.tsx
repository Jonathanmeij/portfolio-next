import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Head from "next/head";
import Header from "./Header";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";
import {useRouter} from "next/router";
import {handleScroll} from "@/lib/scrollTo";

export default function Home() {
    const router = useRouter();
    const location = router.query.location;

    setTimeout(() => {
        if(location !== undefined) {
            const element = document.getElementById(location as string);
            handleScroll(element, "start")
        }
    }, 100);

    return (
        <>
            <Head>
                <title>Jonathan van der Meij - Webdeveloper</title>
                <meta
                    name="description"
                    content="Jonathan van der Meij webdeveloper portfolio"
                />
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
