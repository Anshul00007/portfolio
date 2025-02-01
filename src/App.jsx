import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode, FiArrowDown } from 'react-icons/fi';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiFigma, SiTailwindcss } from 'react-icons/si';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React from 'react';

const App = () => {
  const [darkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const contactButtonRef = useRef(null);

  const projects = [
    { title: 'Second Brain', tech: 'MERN Stack, MongoDB, JWT, Bcrypt', link: 'https://secondbrainas.netlify.app/' },
    { title: 'Chat App', tech: 'WebSocket, Node.js, React', link: 'https://chatappas.netlify.app/' },
    { title: '3D Crypto Site', tech: 'TypeScript, Three.js', link: 'https://3dcrypto.netlify.app/' },
  ];

  const skills = [
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  ];

  const handleContactClick = (e, section) => {
    if (section === 'Contact') {
      scrollToSection(contactRef, 'Contact');
    } else {
      scrollToSection(
        section === 'Projects' ? projectsRef :
        section === 'Skills' ? skillsRef : contactRef,
        section
      );
    }
  };

  const scrollToSection = (ref, section) => {
    setActiveSection(section);
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setTimeout(() => setActiveSection(''), 1000);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const particleInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Particles
        init={particleInit}
        className="fixed inset-0 -z-10"
        options={{
          particles: {
            number: { value: 40 },
            move: { enable: true, speed: 1.5 },
            size: { value: 1 },
            opacity: { value: 0.5 },
            links: {
              enable: true,
              distance: 150,
              color: darkMode ? '#ffffff' : '#000000',
              opacity: 0.3,
            },
          },
        }}
      />

      <nav className="fixed w-full p-6 flex justify-between items-center backdrop-blur-lg z-50">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold flex items-center gap-2"
        >
          <FiCode className="text-3xl text-purple-500" />
          <span>Anshul Shamnani</span>
        </motion.h1>

        <div className="flex gap-6 relative">
          {['Projects', 'Skills', 'Contact'].map((section) => (
            <motion.button
              key={section}
              ref={section === 'Contact' ? contactButtonRef : null}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-4 py-2 rounded-lg"
              onClick={(e) => handleContactClick(e, section)}
            >
              <span className={`${activeSection === section ? 'text-purple-500' : ''} transition-colors`}>
                {section}
              </span>
            </motion.button>
          ))}
        </div>
      </nav>

      <section className="h-screen flex items-center justify-center px-6 relative">
        <motion.div
          className="text-center z-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1
              className="text-5xl mt-96 font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Full Stack Developer
            </motion.h1>
            <p className="text-xl text-gray-400">Building digital experiences with MERN stack & modern tools</p>
          </motion.div>

         
  

          <motion.div
            className="mx-auto w-48 h-48 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full cursor-pointer relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(projectsRef, 'Projects')}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-44 h-44 bg-gray-900 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <FiCode className="text-6xl text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center cursor-pointer"
            onClick={() => scrollToSection(projectsRef, 'Projects')}
            whileHover={{ y: 5 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowDown className="text-3xl ml-108 text-purple-500" />
              <motion.p
  className="text-2xl text-gray-100  max-w-4xl mx-auto font-medium leading-relaxed tracking-wide"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Hello! I'm <span className="text-gradient">Anshul Shamnani</span>, a passionate full-stack developer who thrives on building dynamic digital experiences. 
  With expertise in the MERN stack (MongoDB, Express, React, Node.js) and a solid grasp of tools like TypeScript, PostgreSQL, and Tailwind CSS, 
  I create seamless applications from the ground up. I love exploring new technologies and frameworks to push the limits of what's possible in the web development space.
</motion.p>

<motion.p
  className="text-2xl text-gray-200 mt-6 max-w-4xl mx-auto font-light leading-relaxed tracking-wide"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  I specialize in building interactive and responsive user interfaces, designing scalable backend solutions, 
  and integrating powerful APIs to bring web apps to life. Whether it's crafting a real-time chat application or designing a complex data-driven system, 
  my focus is always on delivering robust, user-centric applications.
</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
     


      <motion.section
        ref={projectsRef}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mt-48 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-400 flex items-center gap-2"
                >
                  View Project
                  <FiArrowDown className="rotate-[135deg]" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={skillsRef}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 bg-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl flex flex-col items-center gap-3 hover:transform hover:-translate-y-2 transition-all duration-300"
                style={{ background: `${skill.color}20` }}
              >
                <div className="text-4xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={contactRef}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Anshul00007"
              className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="text-2xl" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/anshul-shamnani-b36077213/"
              className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default App;
