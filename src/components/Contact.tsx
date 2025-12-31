import { Terminal } from './Terminal';

export const Contact = () => {
  const contactLines = [
    'grep -r "contact" /',
    'Found: Multiple channels available',
    'Initializing secure communication protocols...',
  ];

  return (
    <section className="py-20 px-4 relative z-10" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-matrix mb-4">
            <span className="text-terminal">{'> '}</span>CONNECT.SH
          </h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>

        <div className="bg-card border border-matrix p-8 rounded glow-matrix">
          <div className="mb-8">
            <Terminal lines={contactLines} delay={40} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-neon font-bold mb-2">[EMAIL]</h3>
                <a
                  href="mailto:henriquebonfim@proton.me"
                  className="text-terminal hover:text-matrix transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">▸</span>
                  henriquebonfim@proton.me
                </a>
              </div>

              <div>
                <h3 className="text-neon font-bold mb-2">[LINKEDIN]</h3>
                <a
                  href="https://linkedin.com/in/henriquebonfim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal hover:text-matrix transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">▸</span>
                  linkedin.com/in/henriquebonfim
                </a>
              </div>

              <div>
                <h3 className="text-neon font-bold mb-2">[PORTFOLIO]</h3>
                <a
                  href="https://henriquebonfim.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal hover:text-matrix transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">▸</span>
                  henriquebonfim.web.app
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-muted border border-matrix p-6 rounded text-center">
                <p className="text-terminal mb-4">
                  Ready to collaborate on your next project
                </p>
                <div className="text-matrix text-4xl mb-2">{'</>'}</div>
                <p className="text-muted-foreground text-sm">
                  10+ years of full-stack experience
                  <br />
                  AWS & GCP Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
