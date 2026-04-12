// "use client";
// export const dynamic = "force-dynamic";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import Footer from "@/components/Footer";

// interface Blog {
//   id: string;
//   slug: string;
//   title: string;
//   shortDescription: string;
//   publishDate: string;
//   images: { url: string }[];
// }

// const PAGE_SIZE = 6;

// export default function InsightsPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
//       .then((r) => r.json())
//       .then((data) => {
//         setBlogs(data.data?.blogs || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const totalBlogs = blogs.length;
//   const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);
//   const showPagination = totalPages > 1;

//   const startIndex = (page - 1) * PAGE_SIZE;
//   const endIndex = startIndex + PAGE_SIZE;
//   const items = blogs.slice(startIndex, endIndex);

//   /** 🔑 GRID LOGIC (THIS IS THE MAGIC) */
//   const itemCount = items.length;
//   const gridCols =
//     itemCount === 1
//       ? "grid-cols-1"
//       : itemCount === 2
//       ? "grid-cols-2"
//       : "grid-cols-3";

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: styles }} />
//       <Navbar />

//       <div className="relative min-h-screen bg-black">
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-[60vh] md:h-screen object-cover object-top"
//           src="/insight/insightfb.mp4"
//         />

//         {/* Gradient Overlay */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%)",
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-10 min-h-screen flex flex-col justify-end">
//           <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-16 pt-32 md:pt-44">

//             {/* Header */}
//             <div className="text-center mb-20 space-y-6 animate-fade-in">
//               <div className="inline-block">
//                 <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-2 border border-cyan-500/30 backdrop-blur-sm mb-6">
//                   <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
//                     EV Insights & Stories
//                   </span>
//                 </div>
//               </div>

//               <h1 className="text-4xl lg:text-[3vw] sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 leading-tight">
//                 Inside the Future of Electric Mobility
//                 <br />
//                 <span className="text-white">Infrastructure, innovation, and insights powering what&apos;s next.</span>
//               </h1>

//               <p className="text-cyan-100/80 text-base md:text-xl max-w-3xl mx-auto font-light">
//                At Teraawatt, we&apos;re creating India&apos;s most trusted EV ecosystem — uniting technology, convenience, and sustainability. 
// Our mission is to make every charge smarter, every drive cleaner, and every user's experience seamless. Because the future of mobility deserves more than just power, it deserves purpose. 
//               </p>
//             </div>

//             {/* BLOG GRID */}
//             <div
//               className={`grid ${gridCols} gap-6 md:gap-8 mb-20 max-sm:grid-cols-1`}
//             >
//               {loading
//                 ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
//                     <ShimmerCard key={i} />
//                   ))
//                 : items.map((blog, i) => (
//                     <BlogCard key={blog.id} blog={blog} index={i} />
//                   ))}
//             </div>

//             {/* PAGINATION */}
//             {showPagination && (
//               <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10">
//                 <button
//                   disabled={page === 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   className={`px-8 py-3 rounded-full transition-all ${
//                     page === 1
//                       ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800"
//                       : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 <div className="flex items-center gap-2 px-6">
//                   {Array.from({ length: totalPages }).map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setPage(i + 1)}
//                       className={`h-2 rounded-full transition-all ${
//                         page === i + 1
//                           ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400"
//                           : "w-2 bg-neutral-700 hover:bg-neutral-600"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   disabled={page === totalPages}
//                   onClick={() =>
//                     setPage((p) => Math.min(totalPages, p + 1))
//                   }
//                   className={`px-8 py-3 rounded-full transition-all ${
//                     page === totalPages
//                       ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800"
//                       : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
//                   }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//         <Footer/>
//     </>
//   );
// }

// /* ------------------ CARDS ------------------ */

// function BlogCard({ blog, index }: { blog: Blog; index: number }) {
//   const thumb = blog.images?.[0]?.url;

//   return (
//     <Link
//       href={`/insights/${blog.slug}`}
//       className="group block"
//       style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
//     >
//       <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]">
//         <div className="relative h-56 overflow-hidden">
//           {thumb && (
//             <>
//               <img
//                 src={thumb}
//                 alt=""
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             </>
//           )}
//         </div>

//         <div className="p-6 space-y-3">
//           <p className="text-cyan-400 text-xs font-semibold uppercase">
//             {new Date(blog.publishDate).toLocaleDateString("en-US", {
//               month: "short",
//               day: "numeric",
//               year: "numeric",
//             })}
//           </p>

//           <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
//             {blog.title}
//           </h3>

//           <p className="text-gray-400 text-sm line-clamp-3">
//             {blog.shortDescription}
//           </p>
//         </div>
      
//       </div>
//     </Link>
//   );
// }

// function ShimmerCard() {
//   return (
//     <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
//       <div className="h-56 bg-neutral-900 relative">
//         <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//       <div className="p-6 space-y-3">
//         <div className="h-4 w-24 bg-white/10 rounded" />
//         <div className="h-6 w-full bg-white/10 rounded" />
//         <div className="h-4 w-full bg-white/5 rounded" />
//       </div>
//     </div>
//   );
// }

// /* ------------------ ANIMATIONS ------------------ */

// const styles = `
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// @keyframes shimmer {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// }
// .animate-fade-in {
//   animation: fadeInUp 1s ease-out;
// }
// .animate-shimmer {
//   animation: shimmer 2s infinite;
// }
// `;














"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Blog {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  publishDate: string;
  images: { url: string }[];
}

const PAGE_SIZE = 6;

export default function InsightsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
      .then((r) => r.json())
      .then((data) => {
        setBlogs(data.data?.blogs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);
  const showPagination = totalPages > 1;

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const items = blogs.slice(startIndex, endIndex);

  /** 🔑 GRID LOGIC (THIS IS THE MAGIC) */
  const itemCount = items.length;
  const gridCols =
    itemCount === 1
      ? "grid-cols-1"
      : itemCount === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Navbar />

      <div className="relative min-h-screen bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[60vh] md:h-screen object-cover object-top"
          src="/insight/insightfb.mp4"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,10,0.8) 70%, #0A0A0A 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-16 pt-32 md:pt-44">

            {/* Header */}
            <div className="text-center mb-20 space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-2 border border-cyan-500/30 backdrop-blur-sm mb-6">
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                    EV Insights & Stories
                  </span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-[3vw] sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 leading-tight">
                Inside the Future of Electric Mobility
                <br />
                <span className="text-white">Infrastructure, innovation, and insights powering what&apos;s next.</span>
              </h1>

              <p className="text-cyan-100/80 text-base md:text-xl max-w-3xl mx-auto font-light">
               At Teraawatt, we&apos;re creating India&apos;s most trusted EV ecosystem — uniting technology, convenience, and sustainability. 
Our mission is to make every charge smarter, every drive cleaner, and every user's experience seamless. Because the future of mobility deserves more than just power, it deserves purpose. 
              </p>
            </div>

            {/* BLOG GRID */}
            <div
              className={`grid ${gridCols} gap-6 md:gap-8 mb-20 max-sm:grid-cols-1`}
            >
              {loading
                ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                    <ShimmerCard key={i} />
                  ))
                : items.map((blog, i) => (
                    <BlogCard key={blog.id} blog={blog} index={i} />
                  ))}
            </div>

            {/* PAGINATION */}
            {showPagination && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className={`px-8 py-3 rounded-full transition-all ${
                    page === 1
                      ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800"
                      : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
                  }`}
                >
                  Previous
                </button>

                <div className="flex items-center gap-2 px-6">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`h-2 rounded-full transition-all ${
                        page === i + 1
                          ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400"
                          : "w-2 bg-neutral-700 hover:bg-neutral-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={`px-8 py-3 rounded-full transition-all ${
                    page === totalPages
                      ? "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800"
                      : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}

/* ------------------ CARDS ------------------ */

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const thumb = blog.images?.[0]?.url;

  return (
    <Link
      href={`/insights/${blog.slug}`}
      className="group block"
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
    >
      <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]">
        <div className="relative h-56 overflow-hidden">
          {thumb && (
            <>
              <img
                src={thumb}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </>
          )}
        </div>

        <div className="p-6 space-y-3">
          <p className="text-cyan-400 text-xs font-semibold uppercase">
            {new Date(blog.publishDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {blog.title}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-3">
            {blog.shortDescription}
          </p>
        </div>
      
      </div>
    </Link>
  );
}

function ShimmerCard() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <div className="h-56 bg-neutral-900 relative">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="p-6 space-y-3">
        <div className="h-4 w-24 bg-white/10 rounded" />
        <div className="h-6 w-full bg-white/10 rounded" />
        <div className="h-4 w-full bg-white/5 rounded" />
      </div>
    </div>
  );
}

/* ------------------ ANIMATIONS ------------------ */

const styles = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-fade-in {
  animation: fadeInUp 1s ease-out;
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
`;