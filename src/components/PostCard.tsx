import Link from "next/link"

export interface PostProps { 
    post: {
        title: string;
        content: string;
        uri: URL;
        date: string;
    }
}

export default function PostCard ({ post }:PostProps){
    return (
        <Link href={post.uri} className={"w-96 rounded-xl p-8 m-2 bg-gradient-to-r from-cyan-500 to-blue-500"}>
            <h3 className="text-white">{post.title} &rarr;</h3>
        </Link>
    )
}