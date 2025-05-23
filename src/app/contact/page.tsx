'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    deadline: '',
    academicLevel: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      deadline: '',
      academicLevel: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>联系图标</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            联系我们
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            随时随地为你提供专业的学术写作服务支持。我们的客服团队24/7在线，为你解答任何问题。
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                立即获取帮助
              </h2>
              <p className="text-gray-600 mb-8">
                填写下方表单，我们的专业顾问会在最短时间内与你联系，为你提供个性化的学术写作解决方案。
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="academicLevel" className="block text-sm font-medium text-gray-700 mb-2">
                      学术水平 *
                    </label>
                    <select
                      id="academicLevel"
                      name="academicLevel"
                      required
                      value={formData.academicLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">请选择学术水平</option>
                      <option value="high-school">高中</option>
                      <option value="undergraduate">本科</option>
                      <option value="masters">硕士</option>
                      <option value="phd">博士</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                      截止时间 *
                    </label>
                    <input
                      type="datetime-local"
                      id="deadline"
                      name="deadline"
                      required
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    作业类型 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例如：心理学论文、数学作业"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    作业详情 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="请详细描述您的作业要求、字数、引用格式等"
                  />
                </div>

                <Button type="submit" className="w-full py-3 text-lg">
                  获取免费报价
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  联系方式
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="邮箱图标">
                        <title>邮箱图标</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">邮箱</h4>
                      <p className="text-gray-600">triadessay@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">24小时内回复</p>
                    </div>
                  </div>

                  {/* WeChat */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="微信图标">
                        <title>微信图标</title>
                        <path d="M8.5 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM12.5 12.5a.5.5 0 11-1 0 .5.5 0 011 0zM16.5 12.5a.5.5 0 11-1 0 .5.5 0 011 0z"/>
                        <path fillRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.667 9.333C6.694 9.333 5.1 7.94 5.1 6.2s1.594-3.133 3.567-3.133 3.566 1.393 3.566 3.133-1.593 3.133-3.566 3.133zm6.666 0c-1.973 0-3.566-1.393-3.566-3.133S13.36 3.067 15.333 3.067 18.9 4.46 18.9 6.2s-1.594 3.133-3.567 3.133z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">微信</h4>
                      <p className="text-gray-600">扫描二维码添加客服</p>
                      <p className="text-sm text-gray-500 mt-1">即时响应</p>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Telegram图标">
                        <title>Telegram图标</title>
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Telegram</h4>
                      <p className="text-gray-600">@triadessay</p>
                      <p className="text-sm text-gray-500 mt-1">全天候在线</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  办公地址
                </h3>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="位置图标">
                      <title>位置图标</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">纽约总部</h4>
                    <p className="text-gray-600">264 W 40th St, New York, NY 10018</p>
                    <p className="text-sm text-gray-500 mt-1">美国东部时间工作时间：9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Service Guarantee */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  服务保障
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">客服在线</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">保密服务</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">6小时</div>
                    <div className="text-sm text-gray-600">最快交付</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">退款</div>
                    <div className="text-sm text-gray-600">质量保证</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 