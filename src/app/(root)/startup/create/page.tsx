import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const page = async () => {

    const session = await auth()
    if(!session) redirect("/login")

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Submit your startup ideas here
                </h1>
            </section>

            <StartupForm />
        </>
    );
};

export default page;
