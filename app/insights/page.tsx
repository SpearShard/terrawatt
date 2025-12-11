// "use client";

// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";

// export default function InsightsPage() {
//   const [insights, setInsights] = useState([]);
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   // Fetch the API data
//   useEffect(() => {
//     async function fetchInsights() {
//       const res = await fetch("https://your-api.com/insights");
//       const data = await res.json();
//       setInsights(data);
//     }
//     fetchInsights();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <section className="mt-[200px] px-10 text-center text-white">
//         <h1 className="text-5xl font-semibold">Stories for a Smarter Electric Journey</h1>
//         <p className="mt-4 text-gray-300">
//           Learn, explore, and stay informed with curated EV insights from the Teraawatt team.
//         </p>
//       </section>

//       {/* BLOG GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 mt-20 max-w-[1400px] mx-auto">
//         {insights.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => setSelectedBlog(item)}
//             className="cursor-pointer group bg-[#0b0b0b]/80 p-5 rounded-xl border border-white/10 hover:scale-105 transition duration-300"
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={400}
//               height={250}
//               className="rounded-lg w-full object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold group-hover:text-[#00B0FF]">
//               {item.title}
//             </h3>
//             <ul className="mt-3 text-gray-400 text-sm list-disc list-inside">
//               {item.previewPoints.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* MODAL (only if a blog is clicked) */}
//       {selectedBlog && (
//         <div
//           className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-start overflow-y-auto pt-[100px] z-50"
//           onClick={() => setSelectedBlog(null)}
//         >
//           <div
//             className="bg-[#101010]/90 border border-white/10 rounded-xl p-10 max-w-[1000px] mx-auto text-white relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedBlog(null)}
//               className="absolute top-5 right-5 text-gray-300 hover:text-white text-2xl"
//             >
//               ✖
//             </button>

//             <div className="flex gap-8">
//               <Image
//                 src={selectedBlog.image}
//                 alt={selectedBlog.title}
//                 width={300}
//                 height={300}
//                 className="rounded-lg"
//               />
//               <div>
//                 <h2 className="text-3xl font-semibold">{selectedBlog.title}</h2>
//                 <p className="mt-2 text-gray-400">
//                   Category: {selectedBlog.category}
//                 </p>

//                 <div className="mt-6 text-gray-300 whitespace-pre-line leading-relaxed">
//                   {selectedBlog.description}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// app/insights/page.tsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

interface Blog {
  id: string;
  title: string;
  shortDescription: string;
  content?: string;
  publishDate: string;
  images: { url: string }[];
}

export default function InsightsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Blog | null>(null);

  useEffect(() => {
    fetch("http://65.2.124.237:8000/api/v1/users/blog/all")
      .then(r => r.json())
      .then(data => {
        setBlogs(data.data?.blogs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const items = [...blogs.slice(0, 4), ...Array(Math.max(0, 4 - blogs.length)).fill(null)];

  return (
    <>
      {/* FULL BACKGROUND — SCROLLS NATURALLY */}
      <Navbar/>
      <div className="relative">
        <img
          src="/insightbg.jpg"
          alt="Insights Background"
          className="w-full object-cover object-top"
          style={{ height: "480vh" }}
        />

        {/* CONTENT — at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-32 pb-24 px-8">
          <div className="max-w-7xl mx-auto">

            {/* EXACT TEXT FROM YOUR IMAGE */}
            <div className="text-center mb-20">
              <h1 className="text-6xl md:text-8xl font-black text-cyan-400 mb-4">
                Stories for a Smarter<br />Electric Journey
              </h1>
              <p className="text-cyan-200/90 text-xl md:text-2xl font-light tracking-wide">
                Learn, explore, and stay informed with curated EV insights<br />
                from the <span className="text-white font-semibold">TeraaWatt team.</span>
              </p>
            </div>

            {/* 4 BLOG CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {items.map((blog, i) =>
                blog ? (
                  <BlogCard key={blog.id} blog={blog} onClick={() => setSelected(blog)} />
                ) : (
                  <ShimmerCard key={`placeholder-${i}`} />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* EXPANDED BLOG */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto" onClick={() => setSelected(null)}>
          <div className="min-h-screen flex items-center justify-center p-8" onClick={e => e.stopPropagation()}>
            <div className="max-w-4xl w-full bg-gray-900/95 rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden">
              <button className="absolute top-8 right-8 text-white/60 hover:text-white text-5xl z-10" onClick={() => setSelected(null)}>
                ×
              </button>

              {selected.images?.[0] && (
                <img src={selected.images[0].url} alt="" className="w-full h-96 object-cover" />
              )}

              <div className="p-12 md:p-20">
                <p className="text-cyan-400 mb-6">
                  {new Date(selected.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-10">
                  {selected.title}
                </h1>
                <div
                  className="prose prose-invert prose-lg text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selected.content || selected.shortDescription }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* BLOG CARD */
function BlogCard({ blog, onClick }: { blog: Blog; onClick: () => void }) {
  const thumb = blog.images?.[0]?.url;

  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
        <div className="h-64 overflow-hidden">
          {thumb ? (
            <img src={thumb} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
          )}
        </div>
        <div className="p-8 space-y-4">
          <p className="text-cyan-400 text-sm font-medium">
            {new Date(blog.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </p>
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-300 text-base line-clamp-3">{blog.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

/* SHIMMER CARD */
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

/* SHIMMER ANIMATION — INLINE */
<style jsx global>{`
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`}</style>