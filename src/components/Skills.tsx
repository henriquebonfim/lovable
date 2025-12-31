export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    },
    {
      title: 'Frameworks',
      skills: ['Node.js', 'Nest.js', 'Next.js', 'React', 'React Native', 'Flask', 'FastAPI', 'Django'],
    },
    {
      title: 'Architecture',
      skills: ['Microservices', 'Event-Driven', 'Serverless', 'DDD', 'TDD', 'CQRS', 'Event Sourcing'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    },
    {
      title: 'Messaging',
      skills: ['RabbitMQ', 'Apache Kafka', 'AWS SQS/SNS', 'Google Pub/Sub'],
    },
    {
      title: 'AI & LLM',
      skills: ['OpenAI', 'Claude', 'LangChain', 'RAG', 'Embeddings'],
    },
  ];

  return (
    <section className="py-20 px-4 relative z-10" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-matrix mb-4">
            <span className="text-terminal">{'> '}</span>SKILLS.EXE
          </h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-matrix p-6 rounded hover:glow-matrix transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-neon mb-4">
                [{category.title}]
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    <span className="text-terminal">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
