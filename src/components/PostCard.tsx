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
        <Link href={post.uri} className={"card"}>
            <h3>{post.title} &rarr;</h3>
        </Link>
    )
}