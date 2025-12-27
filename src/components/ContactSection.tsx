import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Terminal } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Terminal-style message */}
          <div className="card-glass p-8 rounded-xl mb-12">
            <div className="flex items-center gap-2 mb-4 text-left">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="font-mono text-left space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">~</span> cat message.txt
              </p>
              <p className="text-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just connecting with fellow tech enthusiasts. Feel free to reach out!
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <span className="text-primary">~</span> <span className="animate-pulse">▌</span>
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <link.icon size={20} className="text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
