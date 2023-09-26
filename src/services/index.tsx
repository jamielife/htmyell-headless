import { request, gql } from 'graphql-request'

export interface postQuery{
    posts: {
        nodes: {
        title: string;
        content: string;
        uri: URL;
        date: string;
        }
    }
}

export async function getPosts(){
    const query = gql`query getPosts {
        posts {
            nodes {
            title
            content
            uri
            date
            }
        }
    }`;

    //process.env.NEXT_PUBLIC_WORDPRESS_API_URL
    const result:postQuery = await request('http://htmyell.local/graphql', query); //.then((data) => console.log(data));
    return result.posts.nodes;
}