'use client';

import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  GraduationCap, 
  Laptop, 
  Users, 
  BookOpen, 
  Calendar, 
  Sparkles,
  CheckCircle2,
  Star
} from "lucide-react";
import en from '@/i18n/locales/en.json'
import zh from '@/i18n/locales/zh.json'

// i18n translations - in real app, this would come from a hook or context
interface Translation {
  nav: {
    services: string;
    pricing: string;
    about: string;
    faq: string;
    blog: string;
    getHelp: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      essayWriting: {
        title: string;
        description: string;
        features: string[];
      };
      examTaking: {
        title: string;
        description: string;
        features: string[];
      };
      courseManagement: {
        title: string;
        description: string;
        features: string[];
      };
      tutoring: {
        title: string;
        description: string;
        features: string[];
      };
    };
    additional: {
      researchPapers: { title: string; description: string };
      deadlineGuarantee: { title: string; description: string };
      premiumQuality: { title: string; description: string };
    };
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
      expertWriters: string;
      academicDisciplines: string;
      successRate: string;
      customerSupport: string;
    };
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    startingPrice: string;
    priceNote: string;
    included: { title: string; items: string[] };
    guarantee: { title: string; items: string[] };
    delivery: { title: string; items: string[] };
    getQuote: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    features: Array<{ title: string; description: string }>;
    whyChoose: {
      title: string;
      stats: {
        originalContent: string;
        customerSatisfaction: string;
        onTimeDelivery: string;
        supportAvailability: string;
        moneyBackGuarantee: string;
      };
    };
  };
  cta: {
    title: string;
    subtitle: string;
    buttons: { startOrder: string; getConsultation: string };
    contact: {
      email: { title: string; value: string };
      wechat: { title: string; value: string };
      telegram: { title: string; value: string };
    };
  };
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
    buttons: { getFreeQuote: string; chatWeChat: string };
    urgencyBanner: { title: string; subtitle: string };
    rating: { from: string; students: string };
  };
  footer: {
    description: string;
    address: string;
    services: {
      title: string;
      essayWriting: string;
      assignmentHelp: string;
      examTaking: string;
      onlineCourses: string;
      tutoring: string;
    };
    subjects: {
      title: string;
      business: string;
      engineering: string;
      psychology: string;
      computerScience: string;
      medicine: string;
    };
    contact: {
      title: string;
      email: string;
      wechat: string;
      telegram: string;
      support: string;
    };
    copyright: string;
  };
}

const translations: Record<'en' | 'zh', Translation> = {
  en,
  zh
};

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [locale, setLocale] = useState<'en' | 'zh'>('en');
  
  const t = translations[locale];

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <Header onContactClick={openContactForm} t={t} />

        {/* Hero Section */}
        <HeroSection onContactClick={openContactForm} t={t} />

        {/* Services Section */}
        <section id="services" className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <span className="text-primary font-medium">{t.services.badge}</span>
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-foreground">{t.services.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Cards */}
              <Card className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all border border-border/50 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-50 group-hover:opacity-70 transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{t.services.cards.essayWriting.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t.services.cards.essayWriting.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {t.services.cards.essayWriting.features.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all border border-border/50 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/10 opacity-50 group-hover:opacity-70 transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{t.services.cards.examTaking.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t.services.cards.examTaking.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {t.services.cards.examTaking.features.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all border border-border/50 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/10 opacity-50 group-hover:opacity-70 transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <div className="bg-purple-500/10 text-purple-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{t.services.cards.courseManagement.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t.services.cards.courseManagement.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {t.services.cards.courseManagement.features.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all border border-border/50 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-500/10 opacity-50 group-hover:opacity-70 transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <div className="bg-green-500/10 text-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{t.services.cards.tutoring.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t.services.cards.tutoring.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {t.services.cards.tutoring.features.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <Card className="bg-card/90 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-500/10 text-amber-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{t.services.additional.researchPapers.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.services.additional.researchPapers.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-500/10 text-cyan-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{t.services.additional.deadlineGuarantee.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.services.additional.deadlineGuarantee.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-rose-500/10 text-rose-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{t.services.additional.premiumQuality.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.services.additional.premiumQuality.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <span className="text-primary font-medium">{t.testimonials.badge}</span>
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-foreground">{t.testimonials.title}</h2>
              <p className="text-xl text-muted-foreground">{t.testimonials.subtitle}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/20 text-center shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">{t.testimonials.stats.expertWriters}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/20 text-center shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">{t.testimonials.stats.academicDisciplines}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/20 text-center shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">{t.testimonials.stats.successRate}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/20 text-center shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">{t.testimonials.stats.customerSupport}</div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/90 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/30 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                      S
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-foreground">Sarah M.</div>
                      <div className="text-sm text-muted-foreground">NYU Student</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    &ldquo;Saved my semester! Got an A on my dissertation with their help. The writer understood exactly what I needed and delivered beyond expectations.&rdquo;
                  </p>
                  <div className="flex text-amber-400 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center font-bold text-lg">
                      J
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-foreground">James L.</div>
                      <div className="text-sm text-muted-foreground">Penn State Student</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    &ldquo;Emergency order completed in 8 hours and I got a B+! Their customer service is amazing and they really care about quality.&rdquo;
                  </p>
                  <div className="flex text-amber-400 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold text-lg">
                      M
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-foreground">Maria C.</div>
                      <div className="text-sm text-muted-foreground">International Student</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    &ldquo;As an international student, language was a barrier. They helped me improve my grades significantly. Highly recommend!&rdquo;
                  </p>
                  <div className="flex text-amber-400 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <span className="text-primary font-medium">{t.pricing.badge}</span>
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-foreground">{t.pricing.title}</h2>
              <p className="text-xl text-muted-foreground">{t.pricing.subtitle}</p>
            </div>

            <Card className="mb-12 overflow-hidden shadow-xl border-0">
              <div className="bg-gradient-to-r from-primary/90 to-blue-600/90 p-8 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">{t.pricing.startingPrice}</h3>
                <p className="text-lg mb-6 text-white/90">{t.pricing.priceNote}</p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">✅ {t.pricing.included.title}</h4>
                      <ul className="text-sm space-y-1 text-white/90">
                        {t.pricing.included.items.map((item: string) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">🎯 {t.pricing.guarantee.title}</h4>
                      <ul className="text-sm space-y-1 text-white/90">
                        {t.pricing.guarantee.items.map((item: string) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">⚡ {t.pricing.delivery.title}</h4>
                      <ul className="text-sm space-y-1 text-white/90">
                        {t.pricing.delivery.items.map((item: string) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button onClick={openContactForm} variant="default" size="lg" className="shadow-lg px-8">
                {t.pricing.getQuote}
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <span className="text-primary font-medium">{t.about.badge}</span>
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-foreground">{t.about.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t.about.description}
                </p>
                <div className="space-y-4">
                  {t.about.features.map((feature: { title: string; description: string }) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">{t.about.whyChoose.title}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-foreground">{t.about.whyChoose.stats.originalContent}</span>
                      <span className="text-emerald-500 font-semibold">100%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-foreground">{t.about.whyChoose.stats.customerSatisfaction}</span>
                      <span className="text-emerald-500 font-semibold">99%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-foreground">{t.about.whyChoose.stats.onTimeDelivery}</span>
                      <span className="text-emerald-500 font-semibold">98%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-foreground">{t.about.whyChoose.stats.supportAvailability}</span>
                      <span className="text-emerald-500 font-semibold">24/7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">{t.about.whyChoose.stats.moneyBackGuarantee}</span>
                      <span className="text-emerald-500 font-semibold">Full</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.cta.title}</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              {t.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={openContactForm} size="lg" className="shadow-lg px-8">
                {t.cta.buttons.startOrder}
              </Button>
              <Button onClick={openContactForm} variant="outline" size="lg" className="px-8">
                {t.cta.buttons.getConsultation}
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
              <Card className="bg-card/90 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-semibold text-foreground">{t.cta.contact.email.title}</div>
                  <div className="text-sm text-muted-foreground">{t.cta.contact.email.value}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="font-semibold text-foreground">{t.cta.contact.wechat.title}</div>
                  <div className="text-sm text-muted-foreground">{t.cta.contact.wechat.value}</div>
                </CardContent>
              </Card>
              <Card className="bg-card/90 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="font-semibold text-foreground">{t.cta.contact.telegram.title}</div>
                  <div className="text-sm text-muted-foreground">{t.cta.contact.telegram.value}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer t={t} />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          <Button onClick={openContactForm} size="icon" className="rounded-full h-12 w-12 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg">
            💬
          </Button>
          <Button onClick={openContactForm} size="icon" className="rounded-full h-12 w-12 bg-primary shadow-lg">
            📧
          </Button>
        </div>

        {/* Controls Panel */}
        <div className="fixed top-20 right-6 z-40">
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <div className="w-px h-6 bg-border" />
            <Button
              variant={locale === 'en' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLocale('en')}
            >
              EN
            </Button>
            <Button
              variant={locale === 'zh' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLocale('zh')}
            >
              中文
            </Button>
          </div>
        </div>

        {isContactFormOpen && (
          <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
        )}
      </div>
    </ThemeProvider>
  );
}
