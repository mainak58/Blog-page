import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY_BY_ID } from "@/sanity/lib/queries";

async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    console.log(id);
    const post = await client.fetch(STARTUP_QUERY_BY_ID, { id });

    return <div>{post.title}</div>;
}

export default Page;
