'use client';

import Link from "next/link";

interface FooterProps {
  t: {
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
  };
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Triadessay</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.description}
            </p>
            <div className="text-sm text-muted-foreground">
              {t.footer.address}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.footer.services.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.services.essayWriting}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.services.assignmentHelp}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.services.examTaking}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.services.onlineCourses}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.services.tutoring}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.footer.subjects.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.subjects.business}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.subjects.engineering}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.subjects.psychology}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.subjects.computerScience}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.footer.subjects.medicine}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t.footer.contact.title}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>{t.footer.contact.email}</div>
              <div>{t.footer.contact.wechat}</div>
              <div>{t.footer.contact.telegram}</div>
              <div>{t.footer.contact.support}</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
} 