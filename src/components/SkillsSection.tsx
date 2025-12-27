import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Activity, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Linux (Red Hat)", "Linux (Ubuntu)", "Windows Server"],
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    title: "System & DevOps",
    icon: Server,
    skills: ["Bash Scripting", "Ansible", "Docker", "Podman", "GitLab CI/CD", "Kubernetes"],
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    title: "Monitoring & Networking",
    icon: Activity,
    skills: ["Monitoring Tools", "Riverbed SteelHead", "TCP/IP", "Networking Fundamentals"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    title: "Other Skills",
    icon: Wrench,
    skills: ["Troubleshooting", "Documentation", "Automation Mindset", "Incident Handling"],
    color: "from-violet-500/20 to-violet-600/10",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Core <span className="text-gradient">Competencies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="card-glass p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-primary group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm font-mono bg-background/50 text-foreground rounded-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
