import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Icon, { IconKey } from "@/lib/icon.utils";
import badges from "./style.module.css";

interface BadgeProps {
  list: { key: IconKey; name: string; type: string }[];
  block: string;
  fullContainer: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Badges({ list, block, fullContainer }: BadgeProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.ul
      ref={ref}
      className={`${badges.list} ${badges[block]} ${badges[fullContainer]} relative flex flex-wrap gap-2 gap-y-2 font-semibold font-sans text-xs`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {list.map(({ key, name }, i) => (
        <motion.li
          key={name}
          className={`${badges.item} ${key} relative flex-col flex overflow-hidden items-center rounded-[9rem] py-1 px-2`}
          custom={i}
          variants={itemVariants}
        >
          <IconModule iconKey={key} />
          <span className={badges.title}>{name}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function IconModule({ iconKey }: { iconKey: IconKey }) {
  return Icon(iconKey);
}