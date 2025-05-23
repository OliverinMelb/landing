'use client';

import { ArrowRightIcon, Star, CheckCircle2, Clock, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onContactClick: () => void;
  t: {
    hero: {
      emergencyBadge: string;
      fastDelivery: string;
      title: string;
      titleHighlight: string;
      description: string;
      trustIndicators: {
        expertWriters: string;
        academicDisciplines: string;
        gradeGuarantee: string;
        support: string;
        confidential: string;
      };
      buttons: {
        getFreeQuote: string;
        chatWeChat: string;
      };
      urgencyBanner: {
        title: string;
        subtitle: string;
      };
      rating: {
        from: string;
        students: string;
      };
    };
  };
}

export default function HeroSection({ onContactClick, t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-24 md:py-32 px-4 fade-bottom">
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          <Badge variant="outline" className="animate-appear gap-2">
            <span className="text-muted-foreground">{t.hero.emergencyBadge}</span>
            <a href="#pricing" className="flex items-center gap-1">
              {t.hero.fastDelivery}
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[650px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            {t.hero.description}
          </p>

          {/* Trust Indicators */}
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-muted-foreground animate-appear opacity-0 delay-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span>{t.hero.trustIndicators.expertWriters}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span>{t.hero.trustIndicators.academicDisciplines}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span>{t.hero.trustIndicators.gradeGuarantee}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span>{t.hero.trustIndicators.support}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span>{t.hero.trustIndicators.confidential}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row animate-appear justify-center gap-4 opacity-0 delay-300">
            <Button onClick={onContactClick} size="lg" className="px-8">
              {t.hero.buttons.getFreeQuote}
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              {t.hero.buttons.chatWeChat}
            </Button>
          </div>

          {/* Urgency Banner */}
          <div className="relative z-10 mt-8 bg-destructive/10 border border-destructive/20 rounded-lg p-4 max-w-2xl mx-auto animate-appear opacity-0 delay-400">
            <p className="text-destructive font-semibold">
              🚨 {t.hero.urgencyBanner.title}
              <span className="block text-sm mt-1">{t.hero.urgencyBanner.subtitle}</span>
            </p>
          </div>

          {/* Floating Rating */}
          <div className="relative z-10 mt-8 bg-background/50 backdrop-blur-sm border border-border rounded-full py-2 px-4 flex items-center gap-3 animate-appear opacity-0 delay-500">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium">
              <span className="text-foreground">4.9/5</span> <span className="text-muted-foreground">{t.hero.rating.from} 2,300+ {t.hero.rating.students}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#27272a10_1px,transparent_1px),linear-gradient(to_bottom,#27272a10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute left-1/4 bottom-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[100px]" />
    </section>
  );
} 