import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24">
      <div className="container-width w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Hero Text */}
          <div className="flex-1 space-y-6">
            <h1 className="hero-text">
              <span className="hero-text-green">FULL-STACK</span><br/>
              <span className="hero-text-white">DEVELOPER</span>
            </h1>
            
            <div className="max-w-2xl space-y-4">
              <p className="text-lg text-muted-foreground">
                Hi! I'm <span className="text-foreground font-semibold">Aryavardhan</span>. A motivated Computer Science student with hands-on full-stack MERN development experience and strong Java, DSA, and problem-solving skills.
              </p>
              
              <Button 
                className="bg-hero-green hover:bg-hero-green/90 text-darker-surface font-semibold px-8 py-3 h-auto"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">Final</div>
                <div className="text-sm text-text-gray">Year BTech Student</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">6+</div>
                <div className="text-sm text-text-gray">Completed Projects</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">300+</div>
                <div className="text-sm text-text-gray">DSA Problems Solved</div>
              </div>
            </div>
          </div>

          {/* Large Name Display */}
          <div className="flex-1 lg:flex hidden items-center justify-end">
            <div className="text-[clamp(4rem,12vw,16rem)] font-black text-foreground/10 select-none">
              ARYAVARDHAN
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 right-8 w-px h-32 bg-gradient-to-b from-hero-green to-transparent opacity-50" />
      <div className="fixed top-1/2 left-8 w-px h-32 bg-gradient-to-b from-hero-green to-transparent opacity-50" />
    </section>
  );
};

export default HeroSection;