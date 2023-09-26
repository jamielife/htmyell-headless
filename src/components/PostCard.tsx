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
        <Link href={post.uri} className={"bg-slate-100 rounded-xl p-8 dark:bg-secondary-orange m-2"}>
            <h3>{post.title} &rarr;</h3>
        </Link>
    )
}