export const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Upwork',
      period: '10/2024 - 04/2025',
      type: 'Part-time Contract',
      highlights: [
        'Built AI-powered chatbot MVP using Python and Next.js with context-aware responses',
        'Automated data entry and reporting, reducing manual work by 66%',
        'Met strict deadline with positive stakeholder feedback',
      ],
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Workana',
      period: '12/2023 - 07/2024',
      type: 'Part-time Contract',
      highlights: [
        'Designed and deployed microservice using Kubernetes, RabbitMQ, and Redis',
        'Built RESTful API Gateway with Nest.js achieving zero downtime',
        'Integrated GPT-4 and Claude AI models for enhanced data processing',
      ],
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Meu Financiamento Solar',
      period: '01/2022 - 04/2023',
      type: 'Full-time',
      highlights: [
        'Developed custom dashboards accelerating decision-making by 53%',
        'Migrated KYC workflows increasing throughput by 22%',
        'Mentored new hires and conducted code reviews',
        'Contributed to company acquisition by major bank (30,000+ users)',
      ],
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Portal Solar Ltda',
      period: '11/2020 - 12/2021',
      type: 'Full-time',
      highlights: [
        'Maintained applications for 100,000+ photovoltaic installers in Brazil',
        'Improved app response time by 40% through backend optimization',
        'Increased test coverage by 90% with Jest and React Testing Library',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative z-10" id="experience">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-matrix mb-4">
            <span className="text-terminal">{'> '}</span>WORK_HISTORY.LOG
          </h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-matrix p-6 rounded hover:glow-matrix transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-neon mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-terminal">
                  <span className="flex items-center gap-2">
                    <span className="text-primary">@</span>
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-primary">⏰</span>
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 border border-matrix rounded text-xs">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-terminal">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-matrix p-6 rounded">
            <h3 className="text-xl font-bold text-neon mb-4">[EDUCATION]</h3>
            <div className="space-y-2">
              <p className="text-terminal">
                <span className="text-primary">▸</span> System Analysis
              </p>
              <p className="text-muted-foreground text-sm">
                Universidade Federal de Mato Grosso do Sul (2015 - 2019)
              </p>
            </div>
          </div>

          <div className="bg-card border border-matrix p-6 rounded">
            <h3 className="text-xl font-bold text-neon mb-4">[CERTIFICATIONS]</h3>
            <div className="space-y-2">
              <p className="text-terminal">
                <span className="text-primary">▸</span> AWS Cloud Practitioner (2023)
              </p>
              <p className="text-terminal">
                <span className="text-primary">▸</span> Associate Google Cloud Engineer (2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
