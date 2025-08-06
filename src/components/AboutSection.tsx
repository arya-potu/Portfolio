import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const techStack = {
    frontend: [
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" }
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" }
    ],
    database: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" }
    ],
    tools: [
      { name: "Git", icon: "📚" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
      { name: "Nodemon", icon: "🔄" }
    ]
  };

  return (
    <section id="about" className="section-padding bg-dark-surface/30">
      <div className="container-width">
        {/* Quote */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
            I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
          </h2>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm text-text-gray font-mono">This is me.</span>
              <h3 className="text-2xl font-bold text-foreground">Hi, I'm Aryavardhan.</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a 3rd-year BTech Computer Science student at GRIET, passionate about building scalable web applications and solving complex problems. I specialize in full-stack MERN development with strong foundations in Data Structures and Algorithms.
              </p>
              
              <p>
                My approach focuses on creating user-centered solutions that prioritize performance, accessibility, and seamless user experience. From e-commerce platforms to innovative drawing applications, I enjoy bringing ideas to life through code.
              </p>
              
              <p>
                Currently exploring advanced web technologies while strengthening my problem-solving skills through competitive programming and real-world projects.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm text-text-gray font-mono">Education & Achievements</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Gokaraju Rangaraju Institute of Engineering and Technology</h4>
                <p className="text-sm text-muted-foreground">BTech in Computer Science • CGPA: 8.72/10 • Expected Jul 2026</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Sri Chaitanya Junior Kalasala</h4>
                <p className="text-sm text-muted-foreground">Intermediate (MPC) • Percentage: 95.6% • May 2022</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">LeetCode: 300+ problems solved with 80% success rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground">My Stack</h3>
          
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-text-gray capitalize">{category}</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {technologies.map((tech) => (
                  <Card key={tech.name} className="tech-card text-center">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-sm font-medium text-foreground">{tech.name}</div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;