import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ children }) => {
  return <motion.button whileHover={{ scale: 1.1 }}>{children}</motion.button>;
};

export default AnimatedButton;
