import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import Form from 'next/form'

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <h1>Logo Here</h1>
                </Link>

                <div className="flex items-center gap-5">
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <Form
                                action={async () => {
                                    "use server" 

                                    await signOut({ redirectTo: "/" });
                                }}
                            >
                                <button type="submit">LogOut</button>
                            </Form>

                            <Link href={`/user/${session.user.id}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Form
                                action={async () => {
                                    "use server";

                                    await signIn("github");
                                }}
                            >
                                <button type="submit">LogIn</button>
                            </Form>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
