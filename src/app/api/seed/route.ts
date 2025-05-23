import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { getImageForTopic } from '@/actions/scrapeImages'

interface BlogPostInput {
  title: string
  slug: string
  summary: string
  content: string
  published: boolean
  image_url?: string
  image_alt?: string
}

interface FAQInput {
  question: string
  answer: string
  category: string
  order_index: number
  published: boolean
  image_url?: string
  image_alt?: string
}

export async function POST() {
  try {
    console.log('Starting database seeding...')

    // Create sample blog posts with scraped images
    const blogPosts: BlogPostInput[] = [
      {
        title: '精通 "In Which, Of Which, At Which" 等结构，让你的英语更地道！',
        slug: 'in-which-of-which-at-which-guide',
        summary: '对于很多中国留学生来说，"in which"、"of which"、"at which" 这些短语总是让人摸不着头脑。掌握它们的使用规则，你的学术写作和口语表达都会更上一层楼！',
        content: `对于很多中国留学生来说，**"in which"、"of which"、"at which"** 这些短语总是让人摸不着头脑。虽然它们看似复杂，但其实只要掌握它们的使用规则，你的学术写作和口语表达都会更上一层楼！📈

## 📌 1. "In Which"——表示"在……之中"

**"In Which" 通常用于代替 where，强调具体的地点、时间或情境。** 适用于正式写作，尤其是在论文和考试中。

✅ **用法：**  
1️⃣ 指代地点（更正式的表达）  
2️⃣ 指代事件、情况、时间等

**📍 例句：**  
✔️ This is the situation **in which** we found ourselves.  
（这就是我们所处的情况。）

✔️ There was a time **in which** people had no access to the internet.  
（曾经有一段时间，人们无法使用互联网。）

## 📌 2. "Of Which"——表示"……的"

**"Of Which" 用来替代 whose（用于物），表示所属关系，尤其常见于学术写作。**

✅ **用法：**  
1️⃣ 指代前面提到的某个整体的一部分  
2️⃣ 用于描述某物的属性或特征

**📍 例句：**  
✔️ He gave me three books, **two of which** were about history.  
（他给了我三本书，其中两本是关于历史的。）

掌握这些用法，你的英语表达能力会大幅提升！`,
        published: true
      },
      {
        title: 'SAT句型解读: SAT1500+的秘诀',
        slug: 'sat-sentence-type-guide',
        summary: 'SAT语法通常被大家认为是适用于writing部分的，但事实上，语法知识，特别是对SAT句型的熟悉，不仅仅适用于SAT写作部分来大量提分，还可以在学术写作、英语口语交流中让你的水平更上一层楼。',
        content: `SAT语法通常被大家认为是适用于writing部分的，但事实上，语法知识，特别是对SAT句型的熟悉，不仅仅适用于 SAT 写作部分来大量提分，还可以在optional essay（选择的essay部分）、你平时的学术写作、英语口语交流中让你的水平更上一层楼。

## 基本句子结构

这些基本的句型结构贯穿了我们英语学习的方方面面。在知道这些句子结构后，英语会变成一个你可以随意拆分的玩具或模型。

### 简单句（Simple Sentences）

简单句包含**一个独立从句（independent clause）**，但它可以包含多个修饰短语或从句。短小的简单句通常用于**强调关键信息**。

**Examples:**
* The books need to be put back on the shelf.
* Stacked high in the corner of the bedroom, the books need to be placed on the newly installed mahogany bookshelf in the study.

### 并列句（Compound Sentences）

并列句由**至少两个独立从句**组成，它们可以通过**逗号+并列连词（FANBOYS）** 或者**分号**连接。这种句子用来**连接同等重要的想法**。

掌握这些句型，你的SAT分数会有显著提升！`,
        published: true
      },
      {
        title: 'Content Analysis：关于内容分析法的一切',
        slug: 'content-analysis-guide',
        summary: 'Content Analysis（内容分析法）是学习社会科学的同学们和正在做研究的社科研究者们时常会接触到一种数据分析手段。今天，小编就带大家一起来深度了解Content Analysis是什么。',
        content: `Content Analysis（内容分析法）是学习社会科学的同学们和正在做研究的社科研究者们时常会接触到一种数据分析手段。与我们之前extensively概括过的Thematic Analysis（主题分析法）类似，内容分析法时常是作为定性研究**或者**定量研究的分析方式出现在人文社科的research中。

## 什么是Content Analysis（内容分析）

简单来说，内容分析法（Content Analysis/CA）是一种我们用来分析数据的方法。与thematic analysis（主题分析法）不同，虽然内容分析法大部分时候是用于定性研究中的，它同样可以通过定量的方式去进行。

### 内容分析法的历史

虽然内容分析法（Content Analysis/缩写为CA）这个英文词汇诞生于20世纪40年代，准确来说是1941年，但它最最初的面貌其实早在17世纪或更早便在世界各地出现。

## 如何进行内容分析

总的来说，content analysis(内容分析法)可以分为大致6个步骤：

1. 选择要分析的内容
2. 确定分析单位和分类
3. 指定编码规则和类别
4. 根据规则将文本编码
5. 分析结果并得出结论
6. 在你的论文/报告/research书面体现中写出结论`,
        published: true
      }
    ]

    // Get images for each blog post
    console.log('Fetching images for blog posts...')
    for (let i = 0; i < blogPosts.length; i++) {
      const post = blogPosts[i]
      const image = await getImageForTopic(post.title)
      post.image_url = image.url
      post.image_alt = image.alt
    }

    // Insert blog posts
    console.log('Inserting blog posts...')
    const { data: blogData, error: blogError } = await supabase
      .from('blog_posts')
      .insert(blogPosts)
      .select()

    if (blogError) {
      console.error('Error inserting blog posts:', blogError)
      return NextResponse.json({ success: false, error: blogError.message }, { status: 500 })
    }

    // Create FAQ entries
    const faqs: FAQInput[] = [
      {
        question: '你们怎么确保论文质量？',
        answer: '首先，我们的代写老师均从全球前500（QS500）的大学毕业，他们在加入我们前会经过严格的审核，确保优秀的写作水平，过人的学习能力，以及教育背景的真实性。其次，在论文或其他学术任务完成后，我们的审稿老师会进行审核和提供Turnitin查重与AI报告，以确保质量过关以及原创度。',
        category: 'quality',
        order_index: 1,
        published: true
      },
      {
        question: '我怎么付款，付款安全吗？',
        answer: '你可以通过PayPal，微信，支付宝方式付款。如果你有所顾虑，同样可以选择淘宝交易，我们会在论文交付后点击发货。我们不会询问你的信用卡，储蓄卡信息，所以不用担心你的卡片信息和个人信息被盗。关于定金问题，Triadessay接受预付50%的定金。',
        category: 'payment',
        order_index: 2,
        published: true
      },
      {
        question: '退款政策是怎么样的？',
        answer: '在下单之前，请与我们的代写客服确认你的目标成绩，otherwise我们统一默认pass为目标成绩。如果最终成绩没有pass或者达到我们商议的目标成绩，我们承诺全额退款或是阶梯性部分退款。',
        category: 'refund',
        order_index: 3,
        published: true
      },
      {
        question: '你们的收费大概是多少？',
        answer: '我们的essay代写费用从550元人民币/一千字（0.55元一个单词）起，根据学历，难度，截止时间等因素变化。离due date之前越早下单价格越低！',
        category: 'pricing',
        order_index: 4,
        published: true
      }
    ]

    // Get images for FAQs
    console.log('Fetching images for FAQs...')
    for (let i = 0; i < faqs.length; i++) {
      const faq = faqs[i]
      const image = await getImageForTopic(`faq ${faq.category}`)
      faq.image_url = image.url
      faq.image_alt = image.alt
    }

    // Insert FAQs
    console.log('Inserting FAQs...')
    const { data: faqData, error: faqError } = await supabase
      .from('faq')
      .insert(faqs)
      .select()

    if (faqError) {
      console.error('Error inserting FAQs:', faqError)
      return NextResponse.json({ success: false, error: faqError.message }, { status: 500 })
    }

    console.log('Database seeding completed successfully!')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully',
      data: {
        blogPosts: blogData?.length || 0,
        faqs: faqData?.length || 0
      }
    })

  } catch (error: unknown) {
    console.error('Error seeding database:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 