import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    let postData = getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}

export default function Post({ postData }) {
    return <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </Layout>;
}

