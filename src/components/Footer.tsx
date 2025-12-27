import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <Terminal size={20} className="text-primary" />
            <span className="font-mono text-foreground">
              Magassa<span className="text-primary">.</span>Djiguiba
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} • Built with <span className="text-primary">passion</span> for infrastructure
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
