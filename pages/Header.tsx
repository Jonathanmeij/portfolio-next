import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Header() {
    return (
        <div className="w-full pt-20 h-[45rem] bg-gradient-radial from-gray-800 to-gray-900 border-b border-gray-800 rounded-br-[7rem]">
            <Container className="flex flex-col items-center justify-center w-full h-full gap-8 m-auto">
                <h1 className="flex flex-col items-center gap-3">
                    <span className="text-2xl font-medium tracking-wide">Hey, I am</span>
                    <span className="text-5xl font-bold tracking-wide text-blue-500">
                        {"< Jonathan />"}
                    </span>
                    <span className="text-2xl font-semibold tracking-wide">
                        {"{ Web Developer }"}
                    </span>
                </h1>
                <div className="flex gap-3">
                    <Button color="primary">Projects</Button>
                    <Button color="secondaryLigher">Contact</Button>
                </div>
            </Container>
        </div>
    );
}
