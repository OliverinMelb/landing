import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  if (!query) {
    return NextResponse.json({ success: false, error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    // Note: We would need to use Bright Data MCP here, but since we're in a server route,
    // we'll simulate the functionality for now and create a separate endpoint for actual scraping
    
    // For now, let's create a fallback that will work
    const fallbackImages = [
      {
        url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Education and learning',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Books and studying',
        photographer: 'Pixabay'
      },
      {
        url: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: 'Dictionary and language learning',
        photographer: 'Pixabay'
      }
    ]

    // Select a random image (in real implementation, this would be based on Pexels search results)
    const randomImage = fallbackImages[Math.floor(Math.random() * fallbackImages.length)]

    return NextResponse.json({
      success: true,
      image: {
        url: randomImage.url,
        alt: randomImage.alt,
        photographer: randomImage.photographer,
        query: query
      }
    })

  } catch (error) {
    console.error('Error fetching image:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch image',
      fallback: {
        url: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
        alt: `Default image for ${query}`
      }
    }, { status: 500 })
  }
} 