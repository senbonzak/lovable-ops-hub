import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Container, Activity, Shield } from "lucide-react";

const projects = [
  {
    title: "System Automation",
    description: "Automation of system tasks using Bash and Ansible playbooks for efficient server management and configuration.",
    icon: Terminal,
    tags: ["Bash", "Ansible", "Automation"],
  },
  {
    title: "Container Deployment",
    description: "Containerization of applications using Docker and Podman for consistent deployment across environments.",
    icon: Container,
    tags: ["Docker", "Podman", "Containers"],
  },
  {
    title: "Infrastructure Monitoring",
    description: "Monitoring and supervision of network and system equipment for proactive issue detection and resolution.",
    icon: Activity,
    tags: ["Monitoring", "Alerting", "SteelHead"],
  },
  {
    title: "Linux Hardening",
    description: "Linux system hardening and service management to ensure security and compliance standards.",
    icon: Shield,
    tags: ["Security", "Linux", "Hardening"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-glass p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Project header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <project.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-background/50 text-primary border border-primary/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
