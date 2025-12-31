import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-matrix">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-matrix font-bold text-xl">
            <span className="text-terminal">{'> '}</span>HENRIQUE BONFIM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-terminal hover:text-matrix transition-colors"
            >
              [Skills]
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-terminal hover:text-matrix transition-colors"
            >
              [Experience]
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-terminal hover:text-matrix transition-colors"
            >
              [Contact]
            </button>
            <a
              href="https://henriquebonfim.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-matrix text-matrix rounded hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Portfolio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-matrix"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-matrix pt-4">
            <button
              onClick={() => scrollToSection('skills')}
              className="block text-terminal hover:text-matrix transition-colors"
            >
              [Skills]
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block text-terminal hover:text-matrix transition-colors"
            >
              [Experience]
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-terminal hover:text-matrix transition-colors"
            >
              [Contact]
            </button>
            <a
              href="https://henriquebonfim.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 border border-matrix text-matrix rounded hover:bg-primary hover:text-primary-foreground transition-all text-center"
            >
              Portfolio
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
