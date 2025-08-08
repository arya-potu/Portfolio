import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" }
  ];

  const socialLinks = [
    { name: "github", href: "https://github.com/arya-potu" },
    { name: "linkedin", href: "https://www.linkedin.com/in/aryavardhan-potu-b2695b326/" },
    { name: "leetcode", href: "https://leetcode.com/u/arya_reddy04/" }
  ];

  return (
    <>
      {/* Top Header - Horizontal Navigation */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect' : 'bg-background/70 backdrop-blur'
        } border-b border-border/40`}
      >
        <div className="container-width flex items-center justify-between py-3 px-container">
          {/* Brand */}
          <a href="#home" className="font-mono text-xs text-text-gray tracking-widest hover:text-hero-green transition-colors">
            ARYAVARDHAN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#home" className="px-2 py-1 text-sm text-muted-foreground hover:text-hero-green transition-colors">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">About</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[60] bg-card border border-border rounded-md shadow-xl">
                    <div className="grid grid-cols-1 gap-2 p-4 min-w-[220px]">
                      <a href="#about" className="text-sm text-muted-foreground hover:text-hero-green">About Me</a>
                      <a href="#experience" className="text-sm text-muted-foreground hover:text-hero-green">Experience</a>
                      <a href="#projects" className="text-sm text-muted-foreground hover:text-hero-green">Projects</a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Projects</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[60] bg-card border border-border rounded-md shadow-xl">
                    <div className="grid sm:grid-cols-2 gap-4 p-4 min-w-[420px]">
                      <a href="https://github.com/arya-potu/Urban-ecommerce" target="_blank" rel="noreferrer" className="block p-3 rounded bg-dark-surface hover:bg-muted transition-colors">
                        <div className="text-sm font-medium">Urban‑Ecommerce</div>
                        <p className="text-xs text-muted-foreground">Full‑stack shop with JWT</p>
                      </a>
                      <a href="https://github.com/arya-potu/admybrand-ai-leap" target="_blank" rel="noreferrer" className="block p-3 rounded bg-dark-surface hover:bg-muted transition-colors">
                        <div className="text-sm font-medium">AdMyBrand ‑ AI</div>
                        <p className="text-xs text-muted-foreground">AI‑powered ads platform</p>
                      </a>
                      <a href="https://github.com/arya-potu" target="_blank" rel="noreferrer" className="block p-3 rounded bg-dark-surface hover:bg-muted transition-colors">
                        <div className="text-sm font-medium">Virtual Drawing Board</div>
                        <p className="text-xs text-muted-foreground">Canvas app with tools</p>
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Certifications</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[60] bg-card border border-border rounded-md shadow-xl">
                    <div className="grid grid-cols-1 gap-2 p-4 min-w-[260px]">
                      <a href="https://drive.google.com/file/d/1No5VyepmAWrt861xEW6-gDaaJxXT0cRu/view" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-hero-green">Data Science for Engineers</a>
                      <a href="https://drive.google.com/file/d/1mn0D1HdRbKR_12AFMArpPN7Tx3Lv1HRu/view" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-hero-green">Data Analytics with Python</a>
                      <a href="https://smartinterviews.in/certificate/b8027bda" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-hero-green">Smart Coder</a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="mailto:aryavardhan.potu@gmail.com" className="text-sm text-muted-foreground hover:text-hero-green transition-colors">Contact</a>
            <a href="/resume.pdf" download="Aryavardhan_Potu_Resume.pdf" className="text-sm text-hero-green hover:text-hero-green/80 font-medium">Download Resume</a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm">
            <div className="container-width pt-20 px-container">
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-mono text-text-gray uppercase tracking-wider mb-2">Menu</div>
                  <div className="space-y-2">
                    <a href="#home" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#experience" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <a href="#projects" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>Projects</a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-gray uppercase tracking-wider mb-2">Certifications</div>
                  <div className="space-y-2">
                    <a href="https://drive.google.com/file/d/1No5VyepmAWrt861xEW6-gDaaJxXT0cRu/view" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>Data Science for Engineers</a>
                    <a href="https://drive.google.com/file/d/1mn0D1HdRbKR_12AFMArpPN7Tx3Lv1HRu/view" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>Data Analytics with Python</a>
                    <a href="https://smartinterviews.in/certificate/b8027bda" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>Smart Coder</a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-text-gray uppercase tracking-wider mb-2">Get in touch</div>
                  <div className="space-y-2">
                    <a href="mailto:aryavardhan.potu@gmail.com" className="block text-muted-foreground hover:text-hero-green" onClick={() => setIsMenuOpen(false)}>aryavardhan.potu@gmail.com</a>
                    <a href="/resume.pdf" download="Aryavardhan_Potu_Resume.pdf" className="block text-hero-green hover:text-hero-green/80 font-medium" onClick={() => setIsMenuOpen(false)}>Download Resume</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;