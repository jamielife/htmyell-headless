import { getPosts } from "@/services";
import PostCard from "@/components/PostCard";

export default async function Home() {
    const posts = await getPosts();
    //console.log(posts);
    const isDataEmpty = !Array.isArray(posts) || posts.length < 1 || !posts;

    return (
        <main className="flex min-h-screen flex-col items-center p-0">
            
            <div className="w-full p-2">
                <h1 className="">Htmyell Design & Development</h1>
            </div>

            <div className="items-center justify-between font-mono text-sm lg:flex">

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
