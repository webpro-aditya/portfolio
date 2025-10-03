import { Code2, Database, Layout, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Laravel", level: "Expert" },
        { name: "PHP", level: "Expert" },
        { name: "WordPress", level: "Expert" },
        { name: "NodeJS", level: "Intermediate" },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "ReactJS", level: "Intermediate" },
        { name: "Angular", level: "Learning" },
      ],
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
      ],
    },
    {
      icon: Code2,
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
        { name: "Responsive Design", level: "Expert" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary";
      case "Advanced":
        return "bg-secondary";
      case "Intermediate":
        return "bg-accent";
      default:
        return "bg-muted";
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            My expertise across various technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="gradient-border p-4 sm:p-6 hover:glow-effect transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getLevelColor(skill.level)} rounded-full transition-all duration-1000`}
                        style={{ 
                          width: skill.level === "Expert" ? "100%" : 
                                 skill.level === "Advanced" ? "80%" : 
                                 skill.level === "Intermediate" ? "60%" : "40%",
                          animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s`
                        }}
                      ></div>
                    </div>
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

export default Skills;
