import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: "01",
      title: "Urban-Ecommerce",
      description: "A full-stack e-commerce platform featuring JWT authentication, secure password hashing with bcrypt, and protected user sessions. Designed and implemented RESTful APIs with advanced product search, dynamic filtering, and seamless cart migration.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT", "PayPal API"],
      githubUrl: "https://github.com/arya-potu/Urban-ecommerce",
      image: "🛍️"
    },
    {
      id: "02", 
      title: "BingeMovie OTT",
      description: "A mobile-first OTT platform using HTML5, CSS3, and JavaScript, featuring dynamic UI elements, interactive carousels, and advanced search functionality. Integrated real-time API data fetching and secure authentication.",
      technologies: ["React", "CSS3", "Firebase", "TMDb API"],
      githubUrl: "https://github.com/arya-potu/BingeMovie-Ott",
      image: "🍿"
    },
    {
      id: "03",
      title: "Virtual Drawing Board",
      description: "Developed a Virtual Drawing Board enabling contactless interaction using real-time hand gesture recognition and voice commands for intuitive digital sketching. Enhanced accessibility through Computer Vision and Speech Processing integration.",
      technologies: ["Python", "OpenCV", "MediaPipe", "SpeechRecognition", "Flask"],
      githubUrl: "https://github.com/arya-potu/Virtual-Drawing-Board-using-Hand-Gestures-with-Voice-Commands",
      image: "🎨"
    },
    {
      id: "04",
      title: "Weather Forecast",
      description: "A responsive weather app that shows real-time weather data using location input. Developed a minimalist and responsive design that displays temperature, city name, date, time, and weather conditions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
      githubUrl: "https://github.com/arya-potu/WeatherForecast",
      image: "🌦️"
    },
    {
      id: "05",
      title: "Library Management System",
      description: "An Android-based application to issue, renew, and reserve books digitally. Built with Java and Firebase for real-time data management and user authentication.",
      technologies: ["Java", "Firebase", "XML", "Android Studio"],
      githubUrl: "https://github.com/arya-potu/Library-Management-System", 
      image: "📚"
    },
    {
      id: "06",
      title: "Netflix Clone UI",
      description: "A responsive front-end clone of the Netflix homepage built with clean layout and mobile-first design. Features responsive grid layouts and smooth animations.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/arya-potu/Netflix-Homepage",
      image: "📺"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-surface/30">
      <div className="container-width">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-16">MY PROJECTS</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-border/50 bg-card/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02]">
              {/* Project Image/Icon */}
              <div className="aspect-video bg-gradient-dark flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-text-gray">_{project.id}.</span>
                      <h3 className="font-bold text-foreground">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-text-gray hover:text-hero-green"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-text-gray hover:text-hero-green"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-dark-surface text-text-gray font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-dark-surface text-text-gray font-mono">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;