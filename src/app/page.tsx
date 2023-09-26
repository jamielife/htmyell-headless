import { getPosts } from "@/services";
import PostCard from "@/components/PostCard";


export default async function Home() {
    const posts = await getPosts();
    //console.log(posts);
    const isDataEmpty = !Array.isArray(posts) || posts.length < 1 || !posts;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

                <h1 className="title">Htmyell Design & Development</h1>

                { !isDataEmpty ? 
                    <div className="grid">
                        {
                            posts?.map((post) => {
                                return (
                                    <PostCard key={post.uri} post={post}></PostCard>
                                );
                            })
                        }
                    </div>

                : 
                    <div>
                        <h2>Empty</h2>
                    </div>
                }

            </div>
        </main>
    )
}
