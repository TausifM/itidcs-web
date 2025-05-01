import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 hover:shadow-lg transition duration-300">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
            <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <Link href={`/blogs/${post.slug}`} className="text-blue-500 hover:underline">Read more</Link>
    </div>
    );
}
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
//         <p className="text-gray-400 mb-4">{post.description}</p>
//         <Link href={`/blogs/${post.slug}`}>
//           <span className="text-blue-400 hover:underline">Read more →</span>
//         </Link>
//       </div>
//     </div>
//   );
// }
