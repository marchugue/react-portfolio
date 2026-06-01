import { motion } from 'framer-motion';

// SVG Icons
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const PaletteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.029 0-.559.373-.98.84-1.203.898-.473 1.548-1.385 1.548-2.43 0-1.528-1.244-2.773-2.773-2.773-.719 0-1.385.269-1.886.719-.536.48-.895 1.164-.895 1.918 0 .598.18 1.145.48 1.605.269.404.389.867.389 1.379 0 .598-.12 1.145-.36 1.649-.269.449-.598.808-.957 1.079.719.898 1.797 1.438 2.934 1.438 2.484 0 4.5-2.016 4.5-4.5 0-1.258-.525-2.387-1.352-3.203-.811-.811-1.2-1.904-1.05-2.984.12-.898.57-1.691 1.199-2.262.179-.165.345-.345.48-.54.12-.195.18-.405.18-.615 0-.435-.345-.75-.75-.75-.06 0-.12.015-.165.015C15.93 2.445 14.025 2 12 2z"/></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>;
const TerminalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>;

const About = () => {
  const stats = [
    { number: '1st', label: 'Year Student' },
    { number: '6+', label: 'Projects Built' },
    { number: 'PHP', label: '& MySQL Expert' },
    { number: 'IoT', label: 'Integration' },
  ];

  const features = [
    {
      icon: CodeIcon,
      title: 'Full Stack Development',
      description: 'Building complete web applications from frontend to backend using React, PHP, Python, and Java.'
    },
    {
      icon: DatabaseIcon,
      title: 'Database Architecture',
      description: 'Designing and optimizing database structures with MySQL for scalable applications.'
    },
    {
      icon: TerminalIcon,
      title: 'System Programming',
      description: 'Developing efficient algorithms and system-level solutions with C++.'
    },
    {
      icon: PaletteIcon,
      title: 'UI/UX Design',
      description: 'Creating beautiful, user-centered designs with Figma and Photoshop.'
    }
  ];

  return (
    <section id="about" className="py-24 section-padding">
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
            About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Passionate About Creating
            <span className="gradient-text"> Digital Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm a first-year student with a passion for coding and design. Despite being early in my academic journey, 
            I've already built a strong foundation across multiple technologies and completed numerous projects that showcase my dedication and capabilities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-primary-400"><feature.icon /></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
