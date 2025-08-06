import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
      {/* Desktop Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect' : ''
      }`}>
        <div className="container-width flex items-start justify-between py-6 px-container">
          {/* Social Links */}
          <div className="hidden lg:flex flex-col gap-3 min-w-[140px]">
            <span className="text-xs font-mono text-text-gray uppercase tracking-wider">SOCIAL</span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-hero-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-col gap-3 min-w-[140px]">
            <span className="text-xs font-mono text-text-gray uppercase tracking-wider">MENU</span>
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-hero-green transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact & Resume */}
          <div className="hidden lg:flex flex-col gap-3 min-w-[200px] text-right">
            <span className="text-xs font-mono text-text-gray uppercase tracking-wider">GET IN TOUCH</span>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:aryavardhan.potu@gmail.com"
                className="text-sm text-muted-foreground hover:text-hero-green transition-colors"
              >
                aryavardhan.potu@gmail.com
              </a>
              <a 
                href="/resume.pdf"
                download="Aryavardhan_Potu_Resume.pdf"
                className="text-sm text-hero-green hover:text-hero-green/80 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm">
            <div className="container-width pt-20 px-container">
              <div className="space-y-8">
                {/* Mobile Social Links */}
                <div>
                  <span className="text-xs font-mono text-text-gray uppercase tracking-wider">SOCIAL</span>
                  <div className="mt-2 space-y-2">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-muted-foreground hover:text-hero-green transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu */}
                <div>
                  <span className="text-xs font-mono text-text-gray uppercase tracking-wider">MENU</span>
                  <div className="mt-2 space-y-2">
                    {menuItems.map((item) => (
                      <a 
                        key={item.name}
                        href={item.href}
                        className="block text-muted-foreground hover:text-hero-green transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact & Resume */}
                <div>
                  <span className="text-xs font-mono text-text-gray uppercase tracking-wider">GET IN TOUCH</span>
                  <div className="mt-2 space-y-2">
                    <a 
                      href="mailto:aryavardhan.potu@gmail.com"
                      className="block text-muted-foreground hover:text-hero-green transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      aryavardhan.potu@gmail.com
                    </a>
                    <a 
                      href="/resume.pdf"
                      download="Aryavardhan_Potu_Resume.pdf"
                      className="block text-hero-green hover:text-hero-green/80 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Download Resume
                    </a>
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