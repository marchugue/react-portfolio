import { motion } from 'framer-motion';
import { skills, techStack } from '../../data/skills';
import SkillCard from '../ui/SkillCard';
import TechIcon from '../ui/TechIcon';

const Skills = () => {
  return (
    <section id="skills" className="py-24 section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4"
          >
            My Skills
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technologies I
            <span className="gradient-text"> Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning development and design, enabling end-to-end project delivery.
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: 'spring',
                stiffness: 200
              }}
            >
              <TechIcon
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                size={32}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-primary-500"
              >
                {category.category}
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex} 
                    skill={skill} 
                    index={categoryIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
