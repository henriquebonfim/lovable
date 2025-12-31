import { Terminal } from './Terminal';
import profileImage from '@/assets/profile.png';

export const Hero = () => {
  const terminalLines = [
    'whoami',
    'henrique.bonfim',
    'cat role.txt',
    'Senior Software Engineer | Full Stack Developer',
    'ls skills/',
    'Node.js  React  Python  AWS  GCP  Kubernetes  Microservices',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-matrix">
                HENRIQUE
                <br />
                BONFIM
              </h1>
              <div className="h-1 w-32 bg-primary"></div>
            </div>
            
            <div className="bg-card border border-matrix p-6 rounded glow-matrix">
              <Terminal lines={terminalLines} delay={30} />
            </div>

            <div className="flex gap-4">
              <a
                href="https://henriquebonfim.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-80 transition-opacity font-bold"
              >
                VIEW PORTFOLIO
              </a>
              <a
                href="https://linkedin.com/in/henriquebonfim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-matrix text-matrix rounded hover:bg-primary hover:text-primary-foreground transition-all"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={profileImage}
                alt="Henrique Bonfim"
                className="relative rounded-lg border-2 border-matrix glow-matrix w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
