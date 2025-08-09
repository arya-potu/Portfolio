import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Self-Learning & Projects",
      position: "Full-Stack Developer",
      period: "2022 - Present",
      description: "Developed multiple full-stack applications using MERN stack, focusing on e-commerce platforms, OTT applications, and innovative web solutions."
    },
    {
      company: "Competitive Programming",
      position: "Problem Solver",
      period: "2023 - Present", 
      description: "Actively solving DSA problems on LeetCode with 300+ problems solved and 80% success rate. Strengthening algorithmic thinking and optimization skills."
    },
    {
      company: "Open Source Contributions",
      position: "Contributor",
      period: "2023 - Present",
      description: "Contributing to open source projects and maintaining personal repositories focused on web development and computer vision applications."
    }
  ];

  const certifications = [
    {
      title: "Meta Front-End Developer Specialization",
      issuer: "Meta",
      description: "HTML/CSS, JavaScript, Front-End Development",
      link: null
    },
    {
      title: "Data Science for Engineers",
      issuer: "NPTEL",
      description: "Comprehensive data science and analytics course",
      link: "https://drive.google.com/file/d/1No5VyepmAWrt861xEW6-gDaaJxXT0cRu/view"
    },
    {
      title: "Data Analytics with Python",
      issuer: "Coursera",
      description: "Python programming for data analysis and visualization",
      link: "https://drive.google.com/file/d/1mn0D1HdRbKR_12AFMArpPN7Tx3Lv1HRu/view"
    },
    {
      title: "Smart Coder Certification",
      issuer: "Smart Interviews",
      description: "Excellence in Data Structures and Algorithms",
      link: "https://smartinterviews.in/certificate/b8027bda"
    }
  ];

  return (
    <section id="experience" className="section-padding pt-24 animate-fade-in">
      <div className="container-width">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-16">My Experience</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-text-gray">Professional Journey</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-hero-green bg-card/50">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="font-semibold text-foreground">{exp.company}</h4>
                      <span className="text-sm text-text-gray font-mono">{exp.period}</span>
                    </div>
                    <h5 className="text-hero-green font-medium">{exp.position}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-text-gray">Certifications & Achievements</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-card/50 hover:bg-card/70 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      {cert.link && (
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-hero-green hover:text-hero-green/80 text-sm font-medium transition-colors"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                    <p className="text-hero-green font-medium text-sm">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Achievements */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Academic Achievements</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Consistently ranked in top 15% of class with 8.72 CGPA</li>
                <li>• Strong foundation in Java, Python, and Web Development</li>
                <li>• Active participation in coding competitions and hackathons</li>
                <li>• Demonstrated expertise in full-stack development projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;