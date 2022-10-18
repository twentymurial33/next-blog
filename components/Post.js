import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="card">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        width={400}
        height={500}
      />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/bella/${post.slug}`}>
        <a className="btn">See More</a>
      </Link>
    </div>
  );
}
