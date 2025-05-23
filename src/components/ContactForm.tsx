'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Mail, MessageCircle, Send } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
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
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-card border border-border shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-foreground">Get Free Quote</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Badge variant="secondary" className="w-fit">
            24/7 Support Available
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="academicLevel" className="text-sm font-medium text-foreground">
                Academic Level *
              </label>
              <select
                id="academicLevel"
                name="academicLevel"
                required
                value={formData.academicLevel}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select your level</option>
                <option value="high-school">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="masters">Master&apos;s</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject/Assignment Type *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Psychology Essay, Math Assignment"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="deadline" className="text-sm font-medium text-foreground">
                Deadline *
              </label>
              <input
                type="datetime-local"
                id="deadline"
                name="deadline"
                required
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Assignment Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Describe your assignment requirements, word count, citations, etc."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
              <Button type="button" variant="outline" onClick={onClose} size="lg">
                Cancel
              </Button>
            </div>
          </form>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center mb-3">
              Or contact us directly:
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="h-auto p-2">
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-2">
                <MessageCircle className="h-4 w-4 mr-1" />
                WeChat
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-2">
                <Send className="h-4 w-4 mr-1" />
                Telegram
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 