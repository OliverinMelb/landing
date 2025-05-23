import { supabase } from '@/lib/supabase'
import type { BlogPost } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'

export default async function BlogPage() {
  // Fetch the 10 most recent published blog posts
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Error fetching blog posts:', error)
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">博客文章</h1>
            <p className="text-red-600">加载文章时出现错误，请稍后再试。</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">博客文章</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索最新的学术写作技巧、语法指导和学习资源，帮助你在学术道路上取得成功。
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post: BlogPost) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Featured Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={post.image_url || '/images/default-blog.jpg'}
                  alt={post.image_alt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  阅读全文
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="箭头图标"
                    role="img"
                  >
                    <title>箭头图标</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                {/* Metadata */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <time className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('zh-CN')}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {!posts || posts.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="文档图标"
              role="img"
            >
              <title>文档图标</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">暂无文章</h3>
            <p className="mt-1 text-sm text-gray-500">
              请稍后查看，我们正在准备精彩的内容。
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              需要学术写作帮助？
            </h3>
            <p className="text-gray-600 mb-6">
              我们的专业团队可以为你提供高质量的学术写作服务。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 