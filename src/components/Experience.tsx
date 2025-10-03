import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ENS Enterprises Pvt Ltd",
      period: "04/2024 - Present",
      description:
        "Architected and developed high-quality, scalable web applications using Laravel and PHP, while collaborating with cross-functional teams to deliver projects on schedule.",
      highlights: [
        "Architected and developed scalable web applications using Laravel and PHP",
        "Engineered and integrated RESTful APIs for third-party services",
        "Enhanced data exchange efficiency across systems",
        "Collaborated with teams to define requirements and design system architecture",
      ],
    },
    {
      title: "Backend Developer",
      company: "Delimp Technology Pvt. Ltd",
      period: "03/2023 - 03/2024",
      description:
        "Developed and optimized server-side logic for complex web applications, with a focus on database management, performance, and secure integrations.",
      highlights: [
        "Developed and maintained backend logic and APIs",
        "Implemented secure payment gateways using Stripe and PayPal",
        "Optimized application performance by resolving backend bottlenecks",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Measurecity Solutions",
      period: "10/2020 - 02/2023",
      description:
        "Managed end-to-end development of client projects, building responsive interfaces and custom WordPress solutions while ensuring smooth deployment.",
      highlights: [
        "Developed full project lifecycle from concept to deployment",
        "Built responsive, interactive UIs using ReactJS, JavaScript, HTML, and CSS",
        "Created custom WordPress plugins and themes for client-specific needs",
      ],
    },
    {
      title: "Backend Developer",
      company: "Javin Enterprises",
      period: "02/2020 - 09/2020",
      description:
        "Contributed to enterprise-level applications by building backend features in PHP and Laravel while assisting in secure database management.",
      highlights: [
        "Developed backend features for enterprise-level applications",
        "Assisted in database design and management using MySQL",
        "Ensured data integrity and security",
        "Wrote clean, maintainable, and well-documented code",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 5.5 years of professional web development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary glow-effect border-4 border-background"></div>

                <div className="gradient-border p-6 hover:glow-effect transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
