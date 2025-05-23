'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContactClick: () => void;
  t: {
    nav: {
      services: string;
      pricing: string;
      about: string;
      faq: string;
      blog: string;
      getHelp: string;
    };
  };
}

export default function Header({ onContactClick, t }: HeaderProps) {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Triadessay</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#services" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link 
              href="#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.pricing}
            </Link>
            <Link 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link 
              href="/faq" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.faq}
            </Link>
            <Link 
              href="/blog" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.blog}
            </Link>
            <Button onClick={onContactClick} size="sm">
              {t.nav.getHelp}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 