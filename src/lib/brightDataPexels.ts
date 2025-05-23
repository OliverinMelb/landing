'use server'

interface PexelsImage {
  url: string
  alt: string
  photographer?: string
}

// This function will be called from a server component where we have access to MCP tools
export async function scrapePexelsWithBrightData(query: string): Promise<PexelsImage[]> {
  // Note: This function should be called from a component that has access to the MCP tools
  // We'll implement the actual Bright Data scraping logic there
  
  // For now, return curated Pexels images
  return getCuratedPexelsImages(query)
}

function getCuratedPexelsImages(query: string): PexelsImage[] {
  const imageDatabase: Record<string, PexelsImage[]> = {
    'grammar': [
      {
        url: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Dictionary and grammar book for language learning',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'English grammar and writing materials',
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
        alt: 'Creative writing and blogging setup',
        photographer: 'Lukas'
      }
    ],
    'study': [
      {
        url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Students studying with books and notes',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Educational materials and academic learning',
        photographer: 'Pixabay'
      }
    ],
    'analysis': [
      {
        url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Data analysis and research methods',
        photographer: 'Lukas'
      },
      {
        url: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Statistical analysis with charts and graphs',
        photographer: 'Lukas'
      }
    ],
    'faq': [
      {
        url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Frequently asked questions and help center',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/208147/pexels-photo-208147.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Customer support and assistance',
        photographer: 'Pixabay'
      }
    ],
    'sat': [
      {
        url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'SAT test preparation and study materials',
        photographer: 'Andrea Piacquadio'
      },
      {
        url: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Student taking standardized tests',
        photographer: 'Andrea Piacquadio'
      }
    ],
    'education': [
      {
        url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Educational environment and learning',
        photographer: 'Christina Morillo'
      },
      {
        url: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Students in educational setting',
        photographer: 'Buro Millennial'
      }
    ]
  }

  // Find matching category
  const matchingKey = Object.keys(imageDatabase).find(key => 
    query.toLowerCase().includes(key) || 
    key.includes(query.toLowerCase()) ||
    query.toLowerCase().includes(key.split(' ')[0])
  )

  if (matchingKey) {
    return imageDatabase[matchingKey]
  }

  // Return default educational images
  return imageDatabase.education
}

// Get a single random image for a query
export async function getSingleImageForQuery(query: string): Promise<PexelsImage> {
  const images = await scrapePexelsWithBrightData(query)
  
  if (images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex]
  }

  // Fallback image
  return {
    url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    alt: 'Educational content and learning materials',
    photographer: 'Pixabay'
  }
} 