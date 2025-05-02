import { blogPosts } from "@/app/data/blogData";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params: asyncParams }) {
  const params = await asyncParams; // Await the params object
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400 mb-6">{post.date}</p>
        {/* Uncomment Image if needed */}
        {/* <Image className="rounded-lg mb-6" src={post.image} alt={post.title} width={800} height={400} /> */}
        <p className="text-lg text-gray-600 mb-6">{post.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Content</h2>
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
