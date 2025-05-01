import BlogCard from "../component/blogCard";
import SEOHead from "../component/SEOHead";
import { blogPosts } from "../data/blogData";

export default function BlogsPage() {
  return (
    <>
      <SEOHead
        title="ITIDCS Blog - Tech Insights & Tutorials"
        description="Read articles, tech tutorials, and industry news from the ITIDCS team to boost your IT knowledge."
      />
      <div className="min-h-screen bg-blue-50 text-gray-900 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
