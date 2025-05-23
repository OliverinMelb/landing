import type React from 'react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  image_url?: string
  image_alt?: string
}

type CategoryKey = 'quality' | 'payment' | 'refund' | 'pricing' | 'services' | 'urgent' | 'revision'

export default async function FAQPage() {
  // Fetch all published FAQs ordered by category and order_index
  const { data: faqs, error } = await supabase
    .from('faq')
    .select('*')
    .eq('published', true)
    .order('category')
    .order('order_index')

  if (error) {
    console.error('Error fetching FAQs:', error)
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">常见问题</h1>
            <p className="text-red-600">加载问题时出现错误，请稍后再试。</p>
          </div>
        </div>
      </div>
    )
  }

  // Group FAQs by category
  const faqsByCategory = faqs?.reduce((acc: Record<string, FAQ[]>, faq: FAQ) => {
    if (!acc[faq.category]) {
      acc[faq.category] = []
    }
    acc[faq.category].push(faq)
    return acc
  }, {}) || {}

  const categoryTitles: Record<CategoryKey, string> = {
    quality: '质量保证',
    payment: '付款方式',
    refund: '退款政策',
    pricing: '价格收费',
    services: '服务范围',
    urgent: '紧急订单',
    revision: '修改政策'
  }

  const categoryIcons: Record<CategoryKey, React.ReactElement> = {
    quality: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>质量检查图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    payment: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>付款图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    refund: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>退款图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    pricing: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>价格图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    services: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>服务图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      </svg>
    ),
    urgent: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>紧急图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    revision: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <title>修改图标</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>问答图标</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            常见问题解答
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            这里汇集了客户最关心的问题及详细解答，帮助你更好地了解我们的服务。
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <title>支持图标</title>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">24/7 客服支持</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <title>响应图标</title>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">快速响应</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-20 last:mb-12">
              {/* Category Header */}
              <div className="flex items-center mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl mr-6 shadow-lg">
                  {categoryIcons[category as CategoryKey] || categoryIcons.services}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {categoryTitles[category as CategoryKey] || category}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {(categoryFaqs as FAQ[]).length} 个问题
                  </p>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {(categoryFaqs as FAQ[]).map((faq: FAQ) => (
                  <div
                    key={faq.id}
                    className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* FAQ Image */}
                    {faq.image_url && (
                      <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden bg-gray-50">
                        <Image
                          src={faq.image_url}
                          alt={faq.image_alt || faq.question}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    {/* Question */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>

                    {/* Answer */}
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {!faqs || faqs.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>问题图标</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">暂无问题</h3>
              <p className="text-lg text-gray-500 max-w-md mx-auto">
                请稍后查看，我们正在准备常见问题。
              </p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-blue-100">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>聊天图标</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              没有找到你的问题？
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              如果以上FAQ没有解答你的疑问，请随时联系我们的客服团队。我们会在第一时间为你提供专业的解答和帮助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>联系图标</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                联系客服
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>博客图标</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                查看博客
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 