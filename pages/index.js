import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Bella's Diary</title>
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  //Get slug and formatter from posts

  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");
    //Get frontmatter

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
