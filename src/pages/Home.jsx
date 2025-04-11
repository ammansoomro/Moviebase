import Heading from "../components/Heading";
import MovieCarousel from "../components/MovieCarousel";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Heading />
      <MovieCarousel title="Top Animated Movies" />
      <MovieCarousel title="Recently Added" />
    </motion.div>
  );
}

export default Home;
