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
      {/* Mobile Top Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          scrolled ? 'glass-effect' : ''
        }`}
      >
        <div className="container-width flex items-center justify-between py-4 px-container">
          <span className="text-xs font-mono text-text-gray tracking-wider">MENU</span>
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

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex fixed left-0 top-0 bottom-0 z-50 w-64 xl:w-72 transition-all duration-300 ${
          scrolled ? 'glass-effect' : ''
        }`}
        aria-label="Primary sidebar"
      >
        <div className="h-full flex flex-col justify-between py-8 px-6 animate-enter">
          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-text-gray uppercase tracking-wider">SOCIAL</span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-link text-sm text-muted-foreground hover:text-hero-green transition-colors hover-scale"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="flex flex-col gap-3 mt-6">
            <span className="text-xs font-mono text-text-gray uppercase tracking-wider">MENU</span>
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="story-link text-sm text-muted-foreground hover:text-hero-green transition-colors hover-scale"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact & Resume */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-text-gray uppercase tracking-wider">GET IN TOUCH</span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:aryavardhan.potu@gmail.com"
                className="text-sm text-muted-foreground hover:text-hero-green transition-colors hover-scale"
              >
                aryavardhan.potu@gmail.com
              </a>
              <a
                href="/resume.pdf"
                download="Aryavardhan_Potu_Resume.pdf"
                className="text-sm text-hero-green hover:text-hero-green/80 transition-colors font-medium hover-scale"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-fade-in">
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
                        className="block text-muted-foreground hover:text-hero-green transition-colors hover-scale"
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
                        className="block text-muted-foreground hover:text-hero-green transition-colors hover-scale"
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
                      className="block text-muted-foreground hover:text-hero-green transition-colors hover-scale"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      aryavardhan.potu@gmail.com
                    </a>
                    <a
                      href="/resume.pdf"
                      download="Aryavardhan_Potu_Resume.pdf"
                      className="block text-hero-green hover:text-hero-green/80 transition-colors font-medium hover-scale"
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