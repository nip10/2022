import { motion } from "framer-motion";

const blobs = [
  {
    d: "M55.8,-53.1C71.1,-40.5,81.4,-20.2,76.8,-4.6C72.2,11,52.6,22,37.3,38.1C22,54.2,11,75.3,-2.2,77.5C-15.3,79.6,-30.6,62.8,-42,46.7C-53.4,30.6,-60.8,15.3,-63.2,-2.3C-65.5,-20,-62.7,-39.9,-51.3,-52.6C-39.9,-65.3,-20,-70.6,0.1,-70.8C20.2,-70.9,40.5,-65.8,55.8,-53.1Z",
  },
  {
    d: "M41.2,-35.4C57.7,-24.7,78.5,-12.3,76.9,-1.5C75.4,9.3,51.6,18.6,35.1,32C18.6,45.4,9.3,63,-6.1,69C-21.4,75.1,-42.9,69.7,-49.8,56.3C-56.8,42.9,-49.3,21.4,-47.2,2.1C-45.1,-17.2,-48.4,-34.4,-41.4,-45.1C-34.4,-55.8,-17.2,-60,-2.4,-57.6C12.3,-55.2,24.7,-46.1,41.2,-35.4Z",
  },
];

const Logo = () => (
  <svg
    width="200"
    height="200"
    fill="none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={blobs[0]}
      animate={blobs[1]}
      transition={{ yoyo: Infinity, duration: 4, ease: "easeInOut" }}
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="#8A3FFC"
    ></motion.path>
  </svg>
);

export default Logo;
