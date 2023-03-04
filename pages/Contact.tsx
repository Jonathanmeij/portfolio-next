import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Input, TextArea } from "@/components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        const res = await fetch("/api/sendgrid", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.Name,
                email: data.Email,
                message: data.Message,
            }),
        });

        if (res.status === 200) {
            setSuccess(true);
        }

        if (res.status === 500 || res.status === 400) {
            setError(true);
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-28">
            <Container maxWidth="xl" className="flex flex-col gap-8 m-auto">
                <div>
                    <h2 className="mb-1 text-3xl font-semibold">Contact me</h2>
                    <p className="font-light tracking-wide text-gray-300 text-md">
                        Get in touch with me via email or social media.
                    </p>
                </div>
                {success && (
                    <div className="p-4 bg-green-500 rounded-lg">
                        <p className="text-white ">Message sent successfully!</p>
                    </div>
                )}
                {error && (
                    <div className="p-4 bg-red-500 rounded-lg">
                        <p className="text-white ">Something went wrong!</p>
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <Input
                        name="Name"
                        register={register}
                        error={errors.Name?.message?.toString()}
                        options={{
                            required: {
                                value: true,
                                message: "Name is required",
                            },
                        }}
                        type="text"
                        placeholder="Name"
                    />

                    <Input
                        type="text"
                        name="Email"
                        register={register}
                        error={errors.Email?.message?.toString()}
                        options={{
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                        }}
                        placeholder="name@mail.com"
                    />

                    <TextArea
                        type="textarea"
                        name="Message"
                        register={register}
                        error={errors.Message?.message?.toString()}
                        options={{
                            required: {
                                value: true,
                                message: "Message is required",
                            },
                        }}
                        placeholder="Your message"
                    />

                    <Button type="submit" color="primary">
                        Send
                    </Button>
                </form>
            </Container>
        </section>
    );
}
