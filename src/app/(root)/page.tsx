import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { title } from "process";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;

    const params = { search: query || null };

    const { data: posts } = await sanityFetch({ query: STARTUP_QUERY });

    console.log(JSON.stringify(posts));

    return (
        <>
            <section className="pink_container">
                <h1 className="heading"> Pitch your StartUp connect with</h1>

                <p className="sub-heading !max-w-3xl">Submit your ideas here</p>

                <SearchForm query={query} />
            </section>

            <section className="section-container">
                <p className="text-30-semibold">
                    {query ? `Search Results for ${query}` : "All Startups"}
                </p>

                <ul className="mt-6 card-grid">
                    {posts?.length > 0 ? (
                        posts.map((post: any, index: string) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">"p start up found"</p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}
