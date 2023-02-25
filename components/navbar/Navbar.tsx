import Container from "../ui/Container";

export default function Navbar() {
    // const handleScroll = () => {
    //     // const ding
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       }
    // };

    return (
        <nav className="fixed flex items-center justify-center w-full h-20 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
            <Container className="flex justify-between w-full">
                <h1 className="text-2xl font-bold">Jonathan</h1>
                <ul className="flex gap-10 font-medium">
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}
