import React from 'react'
import { motion } from 'framer-motion'

const Floating = () => {

    const floatVariants = {
        animate: {
          y: [0, -20, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            // repeatType: "mirror",
            ease: "easeInOut",
          },
        },
      };
  return (
    <div>
          {/* Floating Emojis */}
      <motion.div
        className="absolute top-56 left-10"
        variants={floatVariants}
        animate="animate"
      >
        🚀
      </motion.div>
      <motion.div
        className="absolute top-40 right-16"
        variants={floatVariants}
        animate="animate"
      >
        🎓
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-24"
        variants={floatVariants}
        animate="animate"
      >
        👋🏼
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20"
        variants={floatVariants}
        animate="animate"
      >
        ⚡️
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4"
        variants={floatVariants}
        animate="animate"
      >
        🌐
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/3"
        variants={floatVariants}
        animate="animate"
      >
        📚
      </motion.div>
      <motion.div
        className="absolute top-10 right-1/3"
        variants={floatVariants}
        animate="animate"
      >
        💡
      </motion.div>
    </div>
  )
}

export default Floating