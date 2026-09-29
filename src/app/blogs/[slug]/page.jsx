import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/app/data/blogData";

export default async function BlogPostPage({ params: asyncParams }) {
  const params = await asyncParams;
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="journal-article-page">
      <article className="journal-article-shell">
        <Link href="/blogs" className="journal-back-link"><span aria-hidden="true">←</span> Back to the journal</Link>
        <header className="journal-article-heading">
          <p className="journal-kicker">{post.category || "ITIDCS JOURNAL"} / {post.date}</p>
          <h1>{post.title}</h1>
          <p className="journal-article-description">{post.description}</p>
        </header>
        <div className="journal-article-image">
          <Image src={post.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 900px" />
        </div>
        <div className="journal-article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <footer className="journal-article-footer"><span>More practical ideas from ITIDCS.</span><Link href="/blogs">Explore more articles <span aria-hidden="true">↗</span></Link></footer>
      </article>
    </main>
  );
}
