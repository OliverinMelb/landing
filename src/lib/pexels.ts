import axios from 'axios'

// For now, we'll use Unsplash as a fallback since we don't have Pexels MCP
export async function getImageForTopic(topic: string): Promise<{
  url: string
  alt: string
}> {
  try {
    // Using Unsplash's public API as fallback
    const response = await axios.get(
      `https://source.unsplash.com/800x600/?${encodeURIComponent(topic)}`
    )
    
    return {
      url: response.request.responseURL || `https://source.unsplash.com/800x600/?${encodeURIComponent(topic)}`,
      alt: `Image related to ${topic}`
    }
  } catch (error) {
    console.error('Error fetching image:', error)
    // Fallback to a default image
    return {
      url: 'https://source.unsplash.com/800x600/?education,learning',
      alt: `Default image for ${topic}`
    }
  }
}

// Using Bright Data to scrape Pexels for relevant images
export async function getImageFromPexels(searchQuery: string): Promise<{
  url: string
  alt: string
}> {
  try {
    // We'll call this from the server-side API route
    const response = await fetch(`/api/images/search?query=${encodeURIComponent(searchQuery)}`)
    const data = await response.json()
    
    if (data.success && data.image) {
      return {
        url: data.image.url,
        alt: data.image.alt || `Image related to ${searchQuery}`
      }
    }
    
    // Fallback to default educational image
    return getDefaultEducationalImage(searchQuery)
  } catch (error) {
    console.error('Error fetching image from Pexels:', error)
    return getDefaultEducationalImage(searchQuery)
  }
}

// Predefined topics for educational content with better categorization
export const getEducationalImage = async (category: 'grammar' | 'writing' | 'study' | 'analysis' | 'faq' | 'blog') => {
  const searchQueries = {
    grammar: 'english grammar education writing',
    writing: 'writing pen paper education',
    study: 'students studying books education',
    analysis: 'data analysis research education',
    faq: 'questions help support education',
    blog: 'blog writing article education'
  }
  
  return await getImageFromPexels(searchQueries[category])
}

// Fallback function for default images
function getDefaultEducationalImage(topic: string) {
  // Using Unsplash as ultimate fallback
  const cleanTopic = topic.replace(/[^a-zA-Z0-9]/g, ' ').trim()
  return {
    url: `https://source.unsplash.com/800x600/?${encodeURIComponent(cleanTopic)},education`,
    alt: `Educational image related to ${topic}`
  }
}

// Get specific image for blog post topics
export async function getBlogPostImage(title: string): Promise<{
  url: string
  alt: string
}> {
  // Extract key terms from blog post title for better image search
  const searchTerms = extractKeyTerms(title)
  return await getImageFromPexels(`${searchTerms} education learning`)
}

// Get specific image for FAQ categories
export async function getFAQImage(category: string): Promise<{
  url: string
  alt: string
}> {
  const categoryMap: Record<string, string> = {
    quality: 'quality assurance education excellence',
    payment: 'payment security money transaction',
    refund: 'refund money back guarantee',
    pricing: 'pricing cost money education',
    services: 'services help support education',
    urgent: 'urgent fast quick delivery',
    revision: 'revision editing improvement writing'
  }
  
  const searchQuery = categoryMap[category] || `${category} education help`
  return await getImageFromPexels(searchQuery)
}

// Helper function to extract key terms from titles
function extractKeyTerms(title: string): string {
  // Remove common words and extract meaningful terms
  const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', '是', '的', '了', '在', '与', '和']
  const words = title.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(' ')
    .filter(word => word.length > 2 && !commonWords.includes(word))
    .slice(0, 3) // Take first 3 meaningful words
  
  return words.join(' ') || 'education'
} 