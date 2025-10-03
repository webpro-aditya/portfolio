import { Code, ExternalLink, Zap, Shield, CreditCard, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Scheme Rajnigandha",
      technologies: ["Laravel", "RESTful APIs"],
      description:
        "Engineered a sophisticated gift distribution ecosystem featuring an intelligent, algorithm-driven reward system that revolutionizes customer engagement and loyalty programs.",
      highlights: [
        "Architected a comprehensive platform handling complex gift distribution workflows",
        "Implemented secure, scalable algorithm-driven reward mechanisms",
        "Developed robust RESTful APIs ensuring seamless data flow and integration",
        "Optimized performance to handle high-volume transactions efficiently",
      ],
      icon: <Zap className="h-6 w-6" />,
      color: "primary",
    },
    {
      title: "Sellit",
      technologies: ["Laravel", "Stripe API"],
      description:
        "Crafted a full-featured Customer Relationship Management application with seamless payment processing, transforming how businesses manage customer lifecycles and subscription models.",
      highlights: [
        "Built comprehensive CRM system with advanced customer management features",
        "Integrated Stripe payment gateway for secure subscription handling",
        "Developed automated billing cycles and payment tracking systems",
        "Implemented real-time analytics and reporting dashboards",
      ],
      icon: <CreditCard className="h-6 w-6" />,
      color: "secondary",
    },
    {
      title: "Mcghee Engineering",
      technologies: ["Laravel", "PayPal API"],
      description:
        "Developed a comprehensive project management solution that streamlines operations, customer relationships, and financial transactions through intelligent automation and seamless PayPal integration.",
      highlights: [
        "Architected robust project management system with multi-tier access controls",
        "Integrated PayPal API for secure payment processing and order management",
        "Built dynamic customer portal with real-time project tracking capabilities",
        "Implemented automated workflow systems reducing manual overhead by 60%",
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "primary",
    },
    {
      title: "Ilolas",
      technologies: ["WordPress", "SendGrid", "Pabbly"],
      description:
        "Created an innovative collaboration platform bridging brands and influencers, featuring sophisticated marketing automation and custom plugin architecture for enhanced user experience.",
      highlights: [
        "Developed comprehensive influencer-brand matching and collaboration platform",
        "Integrated SendGrid for automated email marketing campaigns",
        "Built custom WordPress plugins extending platform functionality",
        "Implemented Pabbly automation workflows for seamless user onboarding",
      ],
      icon: <Users className="h-6 w-6" />,
      color: "secondary",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that drive business growth and user engagement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="gradient-border p-4 sm:p-6 hover:glow-effect transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className={`w-12 h-12 bg-${project.color}/10 rounded-lg flex items-center justify-center border border-${project.color}/20 group-hover:bg-${project.color}/20 transition-colors flex-shrink-0`}>
                  <div className={`text-${project.color}`}>
                    {project.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text break-words">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm bg-${project.color}/10 text-${project.color} rounded-full border border-${project.color}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2 text-sm sm:text-base">
                  <Code className="h-4 w-4 text-primary flex-shrink-0" />
                  Key Achievements
                </h4>
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Enterprise Solution
                  </span>
                  {/* <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer">
                    <span className="text-sm font-medium">View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;