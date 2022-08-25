import FeaturedMovies from "../components/FeaturedMovies";
import LatestMovies from "../components/LatestMovies";
import Heading from "../components/Heading";
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
      <FeaturedMovies />
      <LatestMovies />
    </motion.div>
  );
}

export default Home;
