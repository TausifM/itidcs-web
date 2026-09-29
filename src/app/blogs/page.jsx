import Image from "next/image";
import Link from "next/link";
import SEOHead from "../component/SEOHead";
import BlogCard from "../component/blogCard";
import { blogPosts } from "../data/blogData";

export default function BlogsPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="journal-page">
      <SEOHead
        title="ITIDCS Journal | AI, Web, Mobile and Learning"
        description="Practical ideas on AI, digital products, software development, and technology learning from ITIDCS."
      />
      <div className="journal-shell">
        <header className="journal-heading">
          <p className="journal-kicker"><span /> ITIDCS JOURNAL / 2026</p>
          <h1>Ideas for what<br /><em>comes next.</em></h1>
          <p>Clear perspectives on AI, web and mobile products, and the skills shaping the way we build.</p>
        </header>

        {featuredPost && (
          <section className="journal-featured" aria-label="Featured article">
            <Link href={`/blogs/${featuredPost.slug}`} className="journal-featured-image">
              <Image src={featuredPost.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
              <span>FEATURED / {featuredPost.category}</span>
            </Link>
            <div className="journal-featured-copy">
              <p className="journal-date">{featuredPost.date}</p>
              <h2><Link href={`/blogs/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
              <p>{featuredPost.description}</p>
              <Link className="journal-read-link" href={`/blogs/${featuredPost.slug}`}>Read the feature <span aria-hidden="true">↗</span></Link>
            </div>
          </section>
        )}

        <section className="journal-latest">
          <div className="journal-section-heading">
            <div><p className="journal-kicker">FRESH PERSPECTIVES</p><h2>Latest articles</h2></div>
            <span>{otherPosts.length} stories</span>
          </div>
          <div className="journal-grid">
            {otherPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
