import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blogs/${post.slug}`} className="block overflow-hidden">
        <Image
          src={post.image}
          alt=""
          width={900}
          height={600}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-5 sm:p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">ITIDCS journal <span className="px-1 text-slate-300">/</span> {post.date}</p>
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-slate-900">
          <Link href={`/blogs/${post.slug}`} className="transition-colors group-hover:text-violet-700">{post.title}</Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p>
        <Link href={`/blogs/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
