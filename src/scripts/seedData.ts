import { supabase } from '../lib/supabase'
import { getEducationalImage } from '../lib/pexels'

async function createBlogPosts() {
  const grammarImage = await getEducationalImage('grammar')
  const studyImage = await getEducationalImage('study')
  const analysisImage = await getEducationalImage('analysis')
  const writingImage = await getEducationalImage('writing')

  return [
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
      image_url: grammarImage.url,
      image_alt: grammarImage.alt,
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
      image_url: studyImage.url,
      image_alt: studyImage.alt,
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
      image_url: analysisImage.url,
      image_alt: analysisImage.alt,
      published: true
    },
    {
      title: 'GCSE与A Level艺术作品集指南',
      slug: 'gcse-a-level-portfolio-guide',
      summary: '从GCSE到A Level：零基础如何通过优秀作品集获得高分？本指南将为你提供详细的作品集制作技巧和评分标准解析。',
      content: `从GCSE到A Level：零基础如何通过优秀作品集获得高分？艺术作品集是艺术类学科评估的重要组成部分，无论是GCSE还是A Level阶段，一个优秀的作品集都能帮助你在考试中脱颖而出。

## GCSE艺术作品集要求

GCSE阶段的艺术作品集通常包括：
- 研究和发展过程
- 技能展示
- 创意表达
- 最终作品

### 评分标准

1. **Assessment Objective 1 (25%)**：发展想法through investigations
2. **Assessment Objective 2 (25%)**：精炼工作through exploring and selecting
3. **Assessment Objective 3 (25%)**：记录想法、观察和洞察
4. **Assessment Objective 4 (25%)**：呈现个人意义深刻的回应

## A Level艺术作品集

A Level的要求更加深入和复杂：
- 更深层的概念发展
- 更高级的技术技能
- 更强的个人风格
- 更完整的项目叙述

通过系统的准备和持续的练习，你可以创作出令人印象深刻的艺术作品集！`,
      image_url: studyImage.url,
      image_alt: studyImage.alt,
      published: true
    },
    {
      title: 'i.e./e.g./etc. 是什么意思？',
      slug: 'abbreviations-meaning-guide',
      summary: '在国外留学时，相信大家时常会在教授给的instructions、syllabus、甚至是同学之间的交流中看到诸如i.e.、e.g.、etc.这样的缩写。这些缩写到底是什么意思呢？',
      content: `在国外留学时，相信大家时常会在教授给的instructions、syllabus、甚至是同学之间的交流中看到诸如i.e.、e.g.、etc.这样的缩写。

## i.e. 的含义和用法

**i.e.** 来自拉丁语 "id est"，意思是 "that is" 或 "in other words"（即，也就是说）。

### 使用场景
- 用于重新表述或clarify前面提到的内容
- 提供完整的列表或定义

**例句：**
- I love citrus fruits (i.e., oranges, lemons, and limes).
- The assignment is due next week (i.e., Friday, March 15th).

## e.g. 的含义和用法

**e.g.** 来自拉丁语 "exempli gratia"，意思是 "for example"（例如）。

### 使用场景
- 给出例子但不是完整列表
- 展示一些可能的选项

**例句：**
- I enjoy outdoor activities (e.g., hiking, cycling, swimming).
- Many programming languages (e.g., Python, Java, C++) are used in this course.

## etc. 的含义和用法

**etc.** 来自拉丁语 "et cetera"，意思是 "and so forth" 或 "and other things"（等等）。

### 使用场景
- 表示还有其他类似的项目
- 避免列出所有可能的选项

**例句：**
- Bring basic supplies: pens, notebooks, calculators, etc.
- The library has various resources: books, journals, databases, etc.

掌握这些常用缩写，让你的学术交流更加准确高效！`,
      image_url: writingImage.url,
      image_alt: writingImage.alt,
      published: true
    }
  ]
}

async function createFAQs() {
  const studyImage = await getEducationalImage('study')
  const faqImage = await getEducationalImage('faq')

  return [
    {
      question: '你们怎么确保论文质量？',
      answer: '首先，我们的代写老师均从全球前500（QS500）的大学毕业，他们在加入我们前会经过严格的审核，确保优秀的写作水平，过人的学习能力，以及教育背景的真实性。其次，在论文或其他学术任务完成后，我们的审稿老师会进行审核和提供Turnitin查重与AI报告，以确保质量过关以及原创度。',
      category: 'quality',
      image_url: studyImage.url,
      image_alt: studyImage.alt,
      order_index: 1,
      published: true
    },
    {
      question: '我怎么付款，付款安全吗？',
      answer: '你可以通过PayPal，微信，支付宝方式付款。如果你有所顾虑，同样可以选择淘宝交易，我们会在论文交付后点击发货。我们不会询问你的信用卡，储蓄卡信息，所以不用担心你的卡片信息和个人信息被盗。关于定金问题，Triadessay接受预付50%的定金。写手老师完成工作后，我们将会先将内容的50%发给你，在支付剩下的payment后，我们会发送剩下一半的内容。',
      category: 'payment',
      image_url: faqImage.url,
      image_alt: faqImage.alt,
      order_index: 2,
      published: true
    },
    {
      question: '退款政策是怎么样的？',
      answer: '在下单之前，请与我们的代写客服确认你的目标成绩，otherwise我们统一默认pass为目标成绩。如果最终成绩没有pass或者达到我们商议的目标成绩，我们承诺全额退款或是阶梯性部分退款（e.g., 保分90分最后得到了85分我们将退款50%；最后得到了75分我们退款75%；低于70分全额退款）。',
      category: 'refund',
      image_url: faqImage.url,
      image_alt: faqImage.alt,
      order_index: 3,
      published: true
    },
    {
      question: '你们的收费大概是多少？',
      answer: '我们的essay代写费用从550元人民币/一千字（0.55元一个单词）起，根据学历，难度，截止时间等因素变化。离due date之前越早下单价格越低！如有数据分析，写代码，计算等任务，请联系我们获得详细报价。',
      category: 'pricing',
      image_url: faqImage.url,
      image_alt: faqImage.alt,
      order_index: 4,
      published: true
    },
    {
      question: '你们接受哪些类型的任务？',
      answer: '我们接受所有类型的任务，论文代写，essay, assignment, homework, lab report, dissertation, thesis, narrative essay, argumentative essay, reflective essay, literature review, annotated bibliography, review, journal, critical analysis, case analysis, presentation, 网课代上，exam, quiz, assessment, (group) project, discussion, 数据分析代做，各类软件代做，personal statement，各类申诉信代写，英国澳洲补考申请，申请文书代写，PS代写。',
      category: 'services',
      image_url: faqImage.url,
      image_alt: faqImage.alt,
      order_index: 5,
      published: true
    },
    {
      question: '你们能接急单吗？',
      answer: '可以的！我们接受提交时间为6小时甚至更短的紧急订单。紧急订单我们会在追求速度的同时最大限度控制质量。但事实是，如果难度极高的任务（包括论文、编程、做题等），那么紧急赶出来的质量不会很高。这也就意味着写手老师对于紧急任务通常只能保PASS或者C-（视具体情况而定）。所以在这里还是建议大家尽早下单，确定最后能有一个好成绩。',
      category: 'urgent',
      image_url: faqImage.url,
      image_alt: faqImage.alt,
      order_index: 6,
      published: true
    },
    {
      question: '论文交付之后，还可以修改吗？',
      answer: '当然是可以的！对于每一份论文我们都会提供至少2次的免费修改机会，针对合理的修改，我们的写手老师均会负责地完成。需要注意的是：写手老师也是有自己的时间的，所以在论文交付后的每一次新提出的修改要求可能没有办法100%按照大家规定的时间来交付，但我们会尽全力满足大家的要求。',
      category: 'revision',
      image_url: faqImage.url,
      image_alt: faqImage.alt,
      order_index: 7,
      published: true
    }
  ]
}

export async function seedDatabase() {
  try {
    console.log('Seeding blog posts...')
    
    // Insert blog posts
    const { data: blogData, error: blogError } = await supabase
      .from('blog_posts')
      .insert(await createBlogPosts())
      .select()

    if (blogError) {
      console.error('Error inserting blog posts:', blogError)
      return
    }

    console.log('Blog posts inserted:', blogData?.length)

    // Insert FAQs
    console.log('Seeding FAQs...')
    const { data: faqData, error: faqError } = await supabase
      .from('faq')
      .insert(await createFAQs())
      .select()

    if (faqError) {
      console.error('Error inserting FAQs:', faqError)
      return
    }

    console.log('FAQs inserted:', faqData?.length)
    console.log('Database seeding completed successfully!')

  } catch (error) {
    console.error('Error seeding database:', error)
  }
}

// Run the seeding function if this file is executed directly
if (require.main === module) {
  seedDatabase()
} 