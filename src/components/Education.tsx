import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gradient-border p-8 glow-effect">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold gradient-text">
                    Bachelor of Technology (BTech)
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Electronics & Communication Engineering
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Jaypee University of Engineering & Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>2009 - 2013</span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-4"></div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Key Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Built strong foundation in programming fundamentals, algorithms, and data structures
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Developed analytical thinking and systematic problem-solving approach essential for software development
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Gained exposure to software engineering principles, database concepts, and web technologies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Cultivated logical reasoning skills that translate directly to coding and debugging practices
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;