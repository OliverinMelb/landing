'use server'

interface PexelsImage {
  url: string
  alt: string
  photographer: string
}

// Server action to scrape Pexels using Bright Data
export async function scrapeImagesFromPexels(query: string) {
  try {
    // TODO: Implement actual Bright Data scraping
    // For now, we'll use curated Pexels URLs based on common educational topics
    const educationalImages = getEducationalImagesByTopic(query)
    
    return {
      success: true,
      images: educationalImages,
      query
    }
  } catch (error) {
    console.error('Error scraping Pexels:', error)
    return {
      success: false,
      error: 'Failed to scrape images from Pexels',
      fallback: getDefaultEducationalImages()
    }
  }
}

function getEducationalImagesByTopic(query: string): PexelsImage[] {
  const topicMap: Record<string, PexelsImage[]> = {
    'grammar': [
      {
        url: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Dictionary and grammar book for language learning',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'English grammar and writing',
        photographer: 'Pixabay'
      }
    ],
    'writing': [
      {
        url: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Writing with pen and paper',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Creative writing and blogging',
        photographer: 'Lukas'
      }
    ],
    'study': [
      {
        url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Students studying with books',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Educational materials and learning',
        photographer: 'Pixabay'
      }
    ],
    'analysis': [
      {
        url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Data analysis and research',
        photographer: 'Lukas'
      },
      {
        url: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Statistical analysis and charts',
        photographer: 'Lukas'
      }
    ],
    'faq': [
      {
        url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Questions and answers help center',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/208147/pexels-photo-208147.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Customer support and help',
        photographer: 'Pixabay'
      }
    ]
  }

  // Find the best matching topic
  const topic = Object.keys(topicMap).find(key => 
    query.toLowerCase().includes(key) || key.includes(query.toLowerCase())
  )

  if (topic && topicMap[topic]) {
    return topicMap[topic]
  }

  // Default educational images if no specific topic matches
  return getDefaultEducationalImages()
}

function getDefaultEducationalImages(): PexelsImage[] {
  return [
    {
      url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'General education and learning',
      photographer: 'Pixabay'
    },
    {
      url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Books and academic study',
      photographer: 'Pixabay'
    }
  ]
}

// Get a single image for a specific query
export async function getImageForQuery(query: string) {
  const result = await scrapeImagesFromPexels(query)
  
  if (result.success && result.images && result.images.length > 0) {
    // Return the first image or a random one
    const randomIndex = Math.floor(Math.random() * result.images.length)
    return result.images[randomIndex]
  }
  
  // Return fallback
  const fallback = getDefaultEducationalImages()
  return fallback[0]
} 