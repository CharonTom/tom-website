import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkillCards({
  logo,
  name,
  index,
}: {
  logo: string;
  name: string;
  index: number;
}) {
  const ref = useRef(null);
  const delayCards = 0.1 * index;
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 120 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delayCards }}
      className=" h-[105px] w-[80px] lg:h-[150px] lg:w-[115px] bg-skill-cards rounded-lg flex 
    justify-center items-center flex-col border-2 border-gray-300 hover:scale-[1.02] shadow hover:shadow-primary "
    >
      <div className="bg-white rounded-full flex items-center p-[2px]">
        <img
          src={logo}
          alt="logo's technos"
          className="h-[50px] w-[50px]  lg:h-[75px] lg:w-[75px] rounded-full"
        />
      </div>
      <div className="mt-2 text-[12px] lg:text-base">{name}</div>
    </motion.article>
  );
}

export default SkillCards;
