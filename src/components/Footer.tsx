const Footer = () => {
  return (
    <footer className="section-padding border-t border-border/50">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">ARYAVARDHAN POTU</h3>
            <a 
              href="mailto:aryavardhan.potu@gmail.com"
              className="text-muted-foreground hover:text-hero-green transition-colors"
            >
              aryavardhan.potu@gmail.com
            </a>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a 
              href="https://github.com/arya-potu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hero-green transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/aryavardhan-potu-b2695b326/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hero-green transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://leetcode.com/u/arya_reddy04/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hero-green transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-text-gray">
          <p>© 2024 Aryavardhan Potu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;