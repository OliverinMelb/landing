# 🎓 学术写作服务平台 (Academic Writing Service Platform)

> 一个专业的学术写作服务网站，为留学生提供高质量的论文代写、语法指导和学术支持服务。

## 🌐 在线访问

- **主要网址**: https://simple-eazi.vercel.app
- **备用网址**: https://simple-eazi-olivers-projects-ba1ef482.vercel.app
- **GitHub仓库**: https://github.com/OliverinMelb/landing

## 📋 项目概述

这是一个现代化的学术写作服务平台，专为中国留学生设计，提供：

- 🏠 **精美主页** - 展示服务特色和优势
- 📝 **博客系统** - 学术写作技巧和语法指导
- ❓ **FAQ页面** - 常见问题解答
- 📞 **联系页面** - 客户咨询和服务申请
- 🌙 **深色模式** - 支持明暗主题切换
- 📱 **响应式设计** - 完美适配移动端和桌面端

## 🛠️ 技术栈

### 前端框架
- **Next.js 15.1.8** - React全栈框架
- **React 19** - 最新的React版本
- **TypeScript** - 类型安全的JavaScript

### 样式和UI
- **Tailwind CSS 3.4.1** - 实用性优先的CSS框架
- **Tailwind Animate** - 动画支持
- **Class Variance Authority** - 样式变体管理
- **Lucide React** - 现代图标库

### 数据库和API
- **Supabase** - PostgreSQL数据库和后端服务
- **Axios** - HTTP客户端

### 开发工具
- **ESLint** - 代码质量检查
- **Next Themes** - 主题切换支持
- **Date-fns** - 日期处理工具

### 部署平台
- **Vercel** - 无服务器部署平台
- **GitHub** - 代码版本控制

## ✨ 功能特性

### 🎨 用户界面
- ✅ 现代化设计，支持明暗主题
- ✅ 完全响应式，适配所有设备
- ✅ 平滑动画和交互效果
- ✅ 优化的用户体验

### 📰 内容管理
- ✅ 动态博客系统，支持Markdown渲染
- ✅ SEO优化的元数据
- ✅ 自动图片优化
- ✅ 结构化数据支持

### 🗃️ 数据库功能
- ✅ Supabase PostgreSQL数据库
- ✅ 博客文章管理
- ✅ FAQ内容管理
- ✅ 自动数据种子功能

### 🔧 技术优化
- ✅ Next.js 15兼容性
- ✅ TypeScript类型安全
- ✅ 服务端渲染(SSR)
- ✅ 静态生成(SSG)
- ✅ 图片懒加载

## 🚀 快速开始

### 环境要求
- Node.js 18.0+ 
- npm/yarn/pnpm
- Git

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/OliverinMelb/landing.git
cd landing
```

2. **安装依赖**
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. **环境配置**
```bash
# 复制环境变量文件
cp .env.example .env.local

# 配置以下环境变量：
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **运行开发服务器**
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

5. **访问网站**
打开 http://localhost:3000 查看网站

## 📁 项目结构

```
landing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # 博客页面
│   │   ├── contact/           # 联系页面
│   │   ├── faq/               # FAQ页面
│   │   ├── api/               # API路由
│   │   └── globals.css        # 全局样式
│   ├── components/            # React组件
│   │   ├── ui/               # UI基础组件
│   │   ├── ContactForm.tsx   # 联系表单
│   │   ├── Header.tsx        # 页面头部
│   │   ├── Footer.tsx        # 页面底部
│   │   └── HeroSection.tsx   # 主页英雄区域
│   ├── lib/                  # 工具库
│   │   ├── supabase.ts      # Supabase配置
│   │   ├── utils.ts         # 工具函数
│   │   └── pexels.ts        # 图片服务
│   └── scripts/              # 脚本文件
│       └── seedData.ts       # 数据种子脚本
├── public/                   # 静态资源
├── documentation/            # 项目文档
├── package.json             # 项目配置
├── tailwind.config.ts       # Tailwind配置
├── tsconfig.json           # TypeScript配置
└── README.md               # 项目说明
```

## 🗄️ 数据库模式

### 博客文章表 (blog_posts)
```sql
- id: uuid (主键)
- title: text (标题)
- slug: text (URL路径)
- summary: text (摘要)
- content: text (内容)
- image_url: text (特色图片)
- image_alt: text (图片描述)
- published: boolean (发布状态)
- created_at: timestamp (创建时间)
- updated_at: timestamp (更新时间)
```

### FAQ表 (faq)
```sql
- id: uuid (主键)
- question: text (问题)
- answer: text (答案)
- category: text (分类)
- order_index: integer (排序)
- published: boolean (发布状态)
- created_at: timestamp (创建时间)
```

## 🔧 开发命令

```bash
# 开发服务器
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 数据库种子
npm run seed
```

## 🌍 部署信息

### Vercel 部署
- **平台**: Vercel
- **自动部署**: 推送到main分支自动触发
- **环境**: Production
- **构建命令**: `next build`
- **部署时间**: ~2分钟

### 部署步骤
1. ✅ GitHub仓库创建和代码推送
2. ✅ Vercel CLI登录和项目连接
3. ✅ 环境变量配置
4. ✅ 生产部署
5. ✅ 自定义域名设置(可选)

### 环境变量配置
在Vercel控制台中配置以下环境变量：
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🔧 开发历程

### 已完成的工作

1. **项目初始化**
   - ✅ Next.js 15项目搭建
   - ✅ TypeScript配置
   - ✅ Tailwind CSS集成

2. **UI组件开发**
   - ✅ 响应式Header和Footer
   - ✅ 主页Hero区域
   - ✅ 联系表单组件
   - ✅ 主题切换功能

3. **页面开发**
   - ✅ 主页设计和实现
   - ✅ 博客列表和详情页
   - ✅ FAQ页面
   - ✅ 联系页面

4. **数据库集成**
   - ✅ Supabase配置
   - ✅ 数据模型设计
   - ✅ 数据种子脚本

5. **技术优化**
   - ✅ Next.js 15兼容性修复
   - ✅ SEO优化
   - ✅ 性能优化
   - ✅ 类型安全

6. **部署上线**
   - ✅ GitHub仓库设置
   - ✅ Vercel部署配置
   - ✅ 生产环境测试

## 🎯 SEO优化

- ✅ 动态元数据生成
- ✅ Open Graph标签
- ✅ 结构化数据
- ✅ 语义化HTML
- ✅ 性能优化
- ✅ 移动端友好

## 🔒 安全特性

- ✅ TypeScript类型安全
- ✅ Supabase行级安全(RLS)
- ✅ 环境变量保护
- ✅ HTTPS部署
- ✅ CSP头部配置

## 📈 性能指标

- ⚡ **First Load JS**: ~105kB
- 📱 **移动端友好**: 100%
- 🎯 **SEO优化**: 完整支持
- 🚀 **构建时间**: <2分钟

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 更新日志

### v1.0.0 (2025-01-23)
- 🎉 初始版本发布
- ✨ 完整的学术写作服务网站
- 🚀 Vercel生产部署
- 📱 响应式设计
- 🌙 深色模式支持

## 📞 支持和联系

- **网站**: https://simple-eazi.vercel.app
- **GitHub**: https://github.com/OliverinMelb/landing
- **Issues**: [GitHub Issues](https://github.com/OliverinMelb/landing/issues)

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

**🎓 为留学生提供专业的学术写作服务 | Built with ❤️ using Next.js & Vercel**
