import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, summary, image_url')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) {
    return {
      title: '文章未找到'
    }
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.image_url ? [post.image_url] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  首页
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img">
                  <title>右箭头</title>
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  博客
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img">
                  <title>右箭头</title>
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-gray-900 font-medium">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Title and Meta */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.summary}
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <time dateTime={post.created_at}>
                发布于 {new Date(post.created_at).toLocaleDateString('zh-CN')}
              </time>
              <span className="mx-2">•</span>
              <span>学术写作指导</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image_url && (
        <div className="relative h-96 w-full">
          <Image
            src={post.image_url}
            alt={post.image_alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.trim() === '') return null
            
            // Handle headings
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={`h2-${index}`} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={`h3-${index}`} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              )
            }
            
            // Handle bullet points
            if (paragraph.trim().startsWith('* ')) {
              return (
                <ul key={`ul-${index}`} className="list-disc list-inside mb-4">
                  <li className="text-gray-700">
                    {paragraph.replace('* ', '')}
                  </li>
                </ul>
              )
            }
            
            // Handle numbered lists
            if (/^\d+\./.test(paragraph.trim())) {
              return (
                <ol key={`ol-${index}`} className="list-decimal list-inside mb-4">
                  <li className="text-gray-700">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                </ol>
              )
            }
            
            // Regular paragraphs
            return (
              <p key={`p-${index}`} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph.split('**').map((part: string, partIndex: number) => 
                  partIndex % 2 === 1 ? (
                    <strong key={`strong-${partIndex}`} className="font-bold">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            )
          })}
        </div>

        {/* Tags/Categories */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              学术写作
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              语法指导
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              学习技巧
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            需要专业的学术写作帮助？
          </h3>
          <p className="text-gray-600 mb-6">
            我们的专家团队可以为你提供高质量的学术写作服务，助你取得优异成绩。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            立即咨询
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            相关文章
          </h2>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              查看所有文章
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>右箭头</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 