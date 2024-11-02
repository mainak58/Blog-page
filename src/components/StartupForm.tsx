"use client";

import Form from "next/form";
import { Input } from "./ui/input";
import { useActionState, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import { formSchema } from "@/lib/validation";

const StartupForm = () => {
    const [error, setError] = useState({
        title: "",
        description: "",
        catagory: "",
        link: "",
    });

    const [pitch, setPirch] = useState("");
    const router = useRouter();

    const handleFromSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            };

            await formSchema.parseAsync(formValues);
        } catch (error) {
            console.log(error)
    };
    const [state, formAction, isPending] = useActionState(handleFromSubmit, {
        error: "",
        states: "Initial",
    });

    return (
        <>
            <Form action={formAction} className="startup-form">
                <div>
                    <label htmlFor="title">Title</label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        required
                        placeholder="Startup Title"
                    />

                    {error.title && (
                        <p className="startup-form_error">{error.title}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Textarea
                        id="description"
                        name="description"
                        required
                        placeholder="Startup DEscription"
                    />

                    {error.title && (
                        <p className="startup-form_error">
                            {error.description}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="catagory">Catagory</label>
                    <Input
                        id="catagory"
                        name="catagory"
                        type="text"
                        required
                        placeholder="Startup catagory"
                    />

                    {error.catagory && (
                        <p className="startup-form_error">{error.catagory}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="link">Title</label>
                    <Input
                        id="link"
                        name="link"
                        type="text"
                        required
                        placeholder="Startup image url"
                    />

                    {error.title && (
                        <p className="startup-form_error">{error.title}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="pitch">Pitch</label>
                    <Input
                        id="pitch"
                        name="pitch"
                        type="text"
                        required
                        placeholder="Startup image url"
                    />

                    {error.title && (
                        <p className="startup-form_error">{error.title}</p>
                    )}
                </div>
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </Button>
            </Form>
        </>
    );
};

export default StartupForm;
