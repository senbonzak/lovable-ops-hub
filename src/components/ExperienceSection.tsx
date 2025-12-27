import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "System Administrator",
    duration: "2+ years of experience",
    responsibilities: [
      "Administration and maintenance of Linux servers",
      "Automation of repetitive tasks using Bash and Ansible",
      "Monitoring systems and network equipment",
      "Troubleshooting production issues",
      "Writing procedures and technical documentation",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />

              {/* Experience card */}
              <div className="card-glass p-8 rounded-xl relative">
                {/* Icon */}
                <div className="absolute -left-3 top-8 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center glow-soft">
                  <Briefcase className="text-primary" size={20} />
                </div>

                {/* Content */}
                <div className="ml-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="font-mono text-primary text-sm mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + respIndex * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
