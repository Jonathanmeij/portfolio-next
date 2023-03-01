import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Contact() {
    return (
        <section id="contact" className="py-28">
            <Container maxWidth="xl" className="flex flex-col gap-8 m-auto">
                <div>
                    <h2 className="mb-1 text-3xl font-semibold">Contact me</h2>
                    <p className="font-light tracking-wide text-gray-300 text-md">
                        Get in touch with me via email or social media.
                    </p>
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className=" text-sm rounded-lg border border-gray-850 block w-full p-2.5 bg-gray-800  placeholder-gray-400 text-white focus:border-blue-500"
                            placeholder="name"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email-address-icon"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Email
                        </label>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="email-address-icon"
                                className=" text-sm rounded-lg border border-gray-850 block w-full pl-10 p-2.5 bg-gray-800  placeholder-gray-400 text-white focus:border-blue-500"
                                placeholder="name@mail.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-white"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="text-sm rounded-lg border border-gray-850 block w-full p-2.5 bg-gray-800  placeholder-gray-400 text-white focus:border-blue-500"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <Button color="primary">Send</Button>
                </form>
            </Container>
        </section>
    );
}
