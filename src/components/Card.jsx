import { motion } from "framer-motion";

export default function Card({ title, subtitle, text }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03, translateY: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3>{title}</h3>
      {subtitle && <h4 className="subtitle">{subtitle}</h4>}
      <p>{text}</p>
    </motion.div>
  );
}
