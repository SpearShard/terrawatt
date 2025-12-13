"use client";

import { useEffect, useState, use, useRef } from "react";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  content?: string;
  publishDate: string;
  images: { url: string }[];
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    async function loadBlog() {
      try {
        // 1️⃣ Fetch all to match slug
        const res = await fetch("http://65.2.124.237:8000/api/v1/users/blog/all");
        const json = await res.json();
        const blogs: Blog[] = json?.data?.blogs || [];
        const match = blogs.find((b) => b.slug === slug);

        if (!match) {
          setLoading(false);
          return;
        }

        // 2️⃣ Fetch details
        const res2 = await fetch(`http://65.2.124.237:8000/api/v1/users/blog/${match.id}`);
        const fullBlog = await res2.json();

        setBlog(fullBlog?.data || match);
      } catch (e) {
        console.error("Failed to load blog:", e);
      }
      setLoading(false);
    }

    loadBlog();
  }, [slug]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-t-2 border-cyan-500 rounded-full animate-spin" />
          <p className="text-neutral-500 font-light tracking-widest text-sm uppercase">Loading Experience</p>
        </div>
      </div>
    );
  }

  // --- 404 State ---
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
        <Link href="/" className="px-6 py-2 border border-neutral-700 hover:bg-neutral-800 transition rounded-full text-sm">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-cyan-500/30">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12">
        <article className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link href="/insights" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group">
                <div className="p-2 rounded-full border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                  <ArrowLeft size={16} />
                </div>
                <span className="text-sm font-medium tracking-wide uppercase">Back to Journal</span>
              </Link>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8"
            >
              {blog.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 border-t border-neutral-800 pt-6"
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cyan-500" />
                <span>
                  {new Date(blog.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="w-1 h-1 bg-neutral-700 rounded-full" />
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cyan-500" />
                <span>5 min read</span>
              </div>
              <div className="flex-grow" />
              <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Share2 size={16} />
                <span className="hidden sm:inline">Share</span>
              </button>
            </motion.div>
          </header>

          {/* Hero Image with Parallax Feel */}
          {blog.images?.[0]?.url && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video w-full rounded-3xl overflow-hidden mb-20 shadow-2xl shadow-cyan-900/20"
            >
              <img
                src={blog.images[0].url}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </motion.div>
          )}

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents Area */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Written By</p>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Author Name</p>
                    <p className="text-xs text-neutral-500">Editor & Chief</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Prose */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div
                className="
                  prose prose-lg prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                  prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:text-neutral-300 prose-p:leading-8 prose-p:font-light
                  prose-a:text-cyan-400 prose-a:no-underline prose-a:border-b prose-a:border-cyan-400/30 hover:prose-a:border-cyan-400 prose-a:transition-all
                  prose-blockquote:border-l-cyan-500 prose-blockquote:bg-neutral-900/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-img:rounded-2xl prose-img:shadow-lg
                  prose-strong:text-white prose-strong:font-semibold
                  prose-code:text-cyan-300 prose-code:bg-neutral-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                "
                dangerouslySetInnerHTML={{
                  __html: blog.content || blog.shortDescription,
                }}
              />
              
              {/* Footer of article */}
              <div className="mt-20 pt-10 border-t border-neutral-800">
                <p className="text-neutral-500 italic">
                  Thanks for reading.
                </p>
              </div>
            </motion.div>
          </div>

        </article>
      </main>
    </div>
  );
}