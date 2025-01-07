import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-lg floating"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Universe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Full Stack Developer & Creative Technologist
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;