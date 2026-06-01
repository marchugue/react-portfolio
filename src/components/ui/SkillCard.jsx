import { motion } from 'framer-motion';
import TechIcon from "./TechIcon";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 group cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <TechIcon 
          name={skill.name} 
          icon={skill.icon} 
          color={skill.color} 
          size={28}
          animate={false}
        />
        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg mb-2">{skill.name}</h4>
          <div className="w-full bg-dark-600 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              className="h-full rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </div>
          <span className="text-gray-400 text-sm mt-1 block">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
