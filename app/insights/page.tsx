// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";

// interface Blog {
//   id: string;
//   title: string;
//   shortDescription: string;
//   content?: string;
//   publishDate: string;
//   images: { url: string }[];
// }

// export default function InsightsPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selected, setSelected] = useState<Blog | null>(null);

//   useEffect(() => {
//     fetch("http://65.2.124.237:8000/api/v1/users/blog/all")
//       .then(r => r.json())
//       .then(data => {
//         setBlogs(data.data?.blogs || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const items = [...blogs.slice(0, 6), ...Array(Math.max(0, 6 - blogs.length)).fill(null)];

//   return (
//     <>
//       {/* FULL BACKGROUND — SCROLLS NATURALLY */}
//       <Navbar/>
//       <div className="relative">
//         <img
//           src="/insightbg.jpg"
//           alt="Insights Background"
//           className="w-full object-cover object-top"
//           style={{ height: "480vh" }}
//         />

//         {/* CONTENT — at bottom of image */}
//         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-32 pb-24 px-8">
//           <div className="max-w-7xl mx-auto">

//             {/* EXACT TEXT FROM YOUR IMAGE */}
//             <div className="text-center mb-20">
//               <h1 className="text-6xl md:text-8xl font-black text-cyan-400 mb-4">
//                 Stories for a Smarter<br />Electric Journey
//               </h1>
//               <p className="text-cyan-200/90 text-xl md:text-2xl font-light tracking-wide">
//                 Learn, explore, and stay informed with curated EV insights<br />
//                 from the <span className="text-white font-semibold">TeraaWatt team.</span>
//               </p>
//             </div>

//             {/* 4 BLOG CARDS */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//               {items.map((blog, i) =>
//                 blog ? (
//                   <BlogCard key={blog.id} blog={blog} onClick={() => setSelected(blog)} />
//                 ) : (
//                   <ShimmerCard key={`placeholder-${i}`} />
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* EXPANDED BLOG */}
//       {selected && (
//         <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto" onClick={() => setSelected(null)}>
//           <div className="min-h-screen flex items-center justify-center p-8" onClick={e => e.stopPropagation()}>
//             <div className="max-w-4xl w-full bg-gray-900/95 rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden">
//               <button className="absolute top-8 right-8 text-white/60 hover:text-white text-5xl z-10" onClick={() => setSelected(null)}>
//                 ×
//               </button>

//               {selected.images?.[0] && (
//                 <img src={selected.images[0].url} alt="" className="w-full h-96 object-cover" />
//               )}

//               <div className="p-12 md:p-20">
//                 <p className="text-cyan-400 mb-6">
//                   {new Date(selected.publishDate).toLocaleDateString("en-US", {
//                     month: "long",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </p>
//                 <h1 className="text-5xl md:text-7xl font-black text-white mb-10">
//                   {selected.title}
//                 </h1>
//                 <div
//                   className="prose prose-invert prose-lg text-gray-300 leading-relaxed"
//                   dangerouslySetInnerHTML={{ __html: selected.content || selected.shortDescription }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* BLOG CARD */
// function BlogCard({ blog, onClick }: { blog: Blog; onClick: () => void }) {
//   const thumb = blog.images?.[0]?.url;

//   return (
//     <div onClick={onClick} className="group cursor-pointer">
//       <div className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
//         <div className="h-64 overflow-hidden">
//           {thumb ? (
//             <img src={thumb} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//           ) : (
//             <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
//           )}
//         </div>
//         <div className="p-8 space-y-4">
//           <p className="text-cyan-400 text-sm font-medium">
//             {new Date(blog.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
//           </p>
//           <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
//             {blog.title}
//           </h3>
//           <p className="text-gray-300 text-base line-clamp-3">{blog.shortDescription}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* SHIMMER CARD */
// function ShimmerCard() {
//   return (
//     <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
//       <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
//         <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
//       </div>
//       <div className="p-8 space-y-4">
//         <div className="h-4 w-32 bg-white/10 rounded-full animate-pulse" />
//         <div className="h-8 w-full bg-white/10 rounded animate-pulse" />
//         <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
//       </div>
//     </div>
//   );
// }

// /* SHIMMER ANIMATION — INLINE */
// <style jsx global>{`
//   @keyframes shimmer {
//     0% { transform: translateX(-100%); }
//     100% { transform: translateX(100%); }
//   }
// `}</style>
















"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface Blog {
  id: string;
  slug: string; // 👈 required for linking
  title: string;
  shortDescription: string;
  content?: string;
  publishDate: string;
  images: { url: string }[];
}

export default function InsightsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://65.2.124.237:8000/api/v1/users/blog/all")
      .then(r => r.json())
      .then(data => {
        setBlogs(data.data?.blogs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const items = [...blogs.slice(0, 6), ...Array(Math.max(0, 6 - blogs.length)).fill(null)];

  return (
    <>
      <Navbar />

      {/* FULL BACKGROUND */}
      <div className="relative">
        <img
          src="/insightbg.jpg"
          alt="Insights Background"
          className="w-full object-cover object-top"
          style={{ height: "480vh" }}
        />

        {/* CONTENT */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-32 pb-24 px-8">
          <div className="max-w-7xl mx-auto">

            {/* TITLE SECTION */}
            <div className="text-center mb-20">
              <h1 className="text-6xl md:text-8xl font-black text-cyan-400 mb-4">
                Stories for a Smarter<br />Electric Journey
              </h1>
              <p className="text-cyan-200/90 text-xl md:text-2xl font-light tracking-wide">
                Learn, explore, and stay informed with curated EV insights<br />
                from the <span className="text-white font-semibold">TeraaWatt team.</span>
              </p>
            </div>

            {/* BLOG CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {items.map((blog, i) =>
                blog ? (
                  <BlogCard key={blog.id} blog={blog} />
                ) : (
                  <ShimmerCard key={`placeholder-${i}`} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* BLOG CARD → Now opens a new URL */
function BlogCard({ blog }: { blog: Blog }) {
  const thumb = blog.images?.[0]?.url;

  return (
    <Link href={`/insights/${blog.slug}`} className="group">
      <div className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
        <div className="h-64 overflow-hidden">
          {thumb ? (
            <img
              src={thumb}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
          )}
        </div>

        <div className="p-8 space-y-4">
          <p className="text-cyan-400 text-sm font-medium">
            {new Date(blog.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-gray-300 text-base line-clamp-3">
            {blog.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}

/* SHIMMER PLACEHOLDER CARD */
function ShimmerCard() {
  return (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
      <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
      <div className="p-8 space-y-4">
        <div className="h-4 w-32 bg-white/10 rounded-full animate-pulse" />
        <div className="h-8 w-full bg-white/10 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
      </div>
    </div>
  );
}
