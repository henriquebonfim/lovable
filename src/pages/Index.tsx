import { MatrixRain } from '@/components/MatrixRain';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MatrixRain />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-matrix py-8 text-center">
        <p className="text-terminal">
          <span className="text-primary">▸</span> Built with React, TypeScript & Lovable
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          © 2025 Henrique Bonfim. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
