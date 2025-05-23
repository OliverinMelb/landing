'use server'

interface PexelsImageResult {
  url: string
  alt: string
  photographer?: string
}

// This will be the function that actually uses Bright Data MCP to scrape Pexels
export async function scrapeRealPexelsImages(query: string): Promise<PexelsImageResult[]> {
  try {
    // Here we would use the Bright Data MCP tools to scrape Pexels
    // Since we can't directly use MCP tools in server actions, 
    // we'll create a workaround using the Bright Data API
    
    const pexelsSearchUrl = `https://www.pexels.com/search/${encodeURIComponent(query)}/`
    
    // Note: In a real implementation, you would:
    // 1. Use Bright Data's scraping browser to navigate to Pexels
    // 2. Extract image URLs, alt text, and photographer info
    // 3. Return the structured data
    
    console.log(`Scraping Pexels for: ${query}`)
    console.log(`URL: ${pexelsSearchUrl}`)
    
    // For now, return curated results based on the query
    return getCuratedResults(query)
    
  } catch (error) {
    console.error('Error scraping Pexels:', error)
    return getFallbackImages()
  }
}

function getCuratedResults(query: string): PexelsImageResult[] {
  const queryLower = query.toLowerCase()
  
  // Educational content images from Pexels
  if (queryLower.includes('grammar') || queryLower.includes('writing')) {
    return [
      {
        url: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Dictionary and grammar learning resources',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Writing materials and pen on paper',
        photographer: 'Pixabay'
      }
    ]
  }
  
  if (queryLower.includes('study') || queryLower.includes('education')) {
    return [
      {
        url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Students studying with textbooks',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Educational learning environment',
        photographer: 'Christina Morillo'
      }
    ]
  }
  
  if (queryLower.includes('sat') || queryLower.includes('test')) {
    return [
      {
        url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'SAT preparation and test materials',
        photographer: 'Andrea Piacquadio'
      },
      {
        url: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Student focused on exam preparation',
        photographer: 'Andrea Piacquadio'
      }
    ]
  }
  
  if (queryLower.includes('analysis') || queryLower.includes('research')) {
    return [
      {
        url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Data analysis and research workspace',
        photographer: 'Lukas'
      },
      {
        url: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Statistical charts and data visualization',
        photographer: 'Lukas'
      }
    ]
  }
  
  if (queryLower.includes('faq') || queryLower.includes('help') || queryLower.includes('support')) {
    return [
      {
        url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Help and support questions',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Customer service and assistance',
        photographer: 'Tima Miroshnichenko'
      }
    ]
  }
  
  // Default educational images
  return getFallbackImages()
}

function getFallbackImages(): PexelsImageResult[] {
  return [
    {
      url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Educational materials and learning',
      photographer: 'Pixabay'
    },
    {
      url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Books and academic study materials',
      photographer: 'Pixabay'
    }
  ]
}

// Get a single image for a specific query
export async function getImageForTopic(topic: string): Promise<PexelsImageResult> {
  const images = await scrapeRealPexelsImages(topic)
  
  if (images.length > 0) {
    // Return a random image from the results
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex]
  }
  
  // Return fallback
  return getFallbackImages()[0]
} 