import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="journal-card">
      <Link href={`/blogs/${post.slug}`} className="journal-card-image">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <span>{post.category || "ITIDCS Journal"}</span>
      </Link>
      <div className="journal-card-copy">
        <p className="journal-date">{post.date}</p>
        <h3><Link href={`/blogs/${post.slug}`}>{post.title}</Link></h3>
        <p className="journal-card-description">{post.description}</p>
        <Link href={`/blogs/${post.slug}`} className="journal-read-link">Read article <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
