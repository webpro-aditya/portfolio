import { MapPin, Home } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Passionate developer with a drive for continuous learning and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="gradient-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span>Based in Noida, India</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <p className="text-base sm:text-lg leading-relaxed">
              With over 5.5 years of professional experience in web development, I specialize in building robust and scalable solutions using the Laravel PHP framework and WordPress CMS. I have developed and customized applications that effectively address diverse business needs, helping clients achieve their goals through reliable and high-performing web solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I am currently expanding my skill set with ReactJS and NodeJS as I work toward mastering the MERN stack. Driven by a passion for continuous learning, I focus on strengthening my programming and problem-solving abilities to grow as a software developer and deliver more innovative, efficient solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="gradient-border p-4 sm:p-6 glow-effect">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">Interests</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Swimming</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Watching Sports (Cricket, Tennis, Basketball, etc.)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Learning New Technologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Problem Solving</span>
                </li>
              </ul>
            </div>

            <div className="gradient-border p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Master MERN Stack Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Enhance Programming & Logical Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Secure a High-Paying Development Role</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
