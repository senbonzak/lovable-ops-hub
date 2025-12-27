import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-primary font-medium">System Administrator</span> with 
              over 2 years of experience working on Linux environments, primarily Red Hat and Ubuntu.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I focus on <span className="text-foreground font-medium">system stability</span>, 
              <span className="text-foreground font-medium"> automation</span>, 
              <span className="text-foreground font-medium"> monitoring</span>, and 
              <span className="text-foreground font-medium"> infrastructure reliability</span>. 
              I regularly work with Bash scripting, Ansible, containers (Docker/Podman), and monitoring tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am currently strengthening my <span className="text-primary font-medium">DevOps skills</span>, 
              especially Kubernetes and CI/CD, with a long-term interest in 
              <span className="text-primary font-medium"> cybersecurity</span>.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {[
              {
                icon: User,
                title: "Experience",
                value: "2+ Years",
                desc: "Linux System Administration",
              },
              {
                icon: Target,
                title: "Focus",
                value: "DevOps",
                desc: "Automation & Infrastructure",
              },
              {
                icon: Zap,
                title: "Approach",
                value: "Automation First",
                desc: "Efficient & Reliable Solutions",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-glass p-6 rounded-xl flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="text-xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
