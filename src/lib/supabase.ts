import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cowdliczqsrzzwaurqid.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd2RsaWN6cXNyenp3YXVycWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5ODM1NzMsImV4cCI6MjA2MzU1OTU3M30.OJ98o0OQWGLyyj0Y2wmco8NgsqSMDN6ATKFTPW78_io'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type BlogPost = {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  image_url?: string
  image_alt?: string
  published: boolean
  created_at: string
  updated_at: string
}

export type FAQ = {
  id: string
  question: string
  answer: string
  category: string
  image_url?: string
  image_alt?: string
  order_index: number
  published: boolean
  created_at: string
  updated_at: string
} 