import fs from "fs";
import path from "path";

function postPage() {
  return <div>post</div>;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
console.log(paths);

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
}

export default postPage;
