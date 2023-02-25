import Container from "@/components/ui/Container";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Jonathan</title>
                <meta name="description" content="Jonathan van der Meij portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container className="m-auto">
                    <h1 className="">Jonathan</h1>
                    <h2>Web developer</h2>
                </Container>
            </main>
        </>
    );
}
