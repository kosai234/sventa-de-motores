
import React from 'react';
import { LATEST_NEWS } from '../constants';

const BlogSection: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto w-full px-6 py-16">
      <h2 className="text-3xl font-black mb-10 uppercase tracking-tight text-[#111418]">ÚLTIMAS NOTICIAS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {LATEST_NEWS.map((post) => (
          <article key={post.id} className="flex flex-col gap-5 group cursor-pointer">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gray-200">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={post.imageUrl} 
                alt={post.title}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                <span>{post.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 font-semibold">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-extrabold leading-tight text-[#111418] group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
