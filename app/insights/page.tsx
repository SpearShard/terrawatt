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
