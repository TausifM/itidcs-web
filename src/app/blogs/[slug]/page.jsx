import { blogPosts } from "@/app/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogPostPage({ params: asyncParams }) {
  const params = await asyncParams; // Await the params object
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400 mb-6">{post.date}</p>
        <Image
          className="mb-8 h-auto max-h-[460px] w-full rounded-2xl object-cover shadow-lg"
          src={post.image}
          alt=""
          width={1200}
          height={720}
          priority
        />
        <p className="text-lg text-gray-600 mb-6">{post.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Content</h2>
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
