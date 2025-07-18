import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

interface Props {
  name: string;
  year: string;
  description: string;
  align: string;
  image: string;
  link: string;
}


const SingleProject = ({name, year, description, align, image, link}: Props) => {
  return (
    <motion.div 
    variants={fadeIn('up', 0)}
    initial='hidden'
    whileInView="show"
    viewport={{ once: false, amount: 0}}
    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className={`text-xl font-thin text-white font-special sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>{year}</h2>

        <p className={`text-white pt-2 sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>{description}</p>

        <a 
        target="_blank" 
        href={link} 
        rel="noopener noreferrer"
        className={`pt-1.5 text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? "md:justify-self-end" : "md:justify-self-start"}`}>
          View<BiSolidRightTopArrowCircle />
        </a>

      </div>
      <div className="max-h-[220px] max-w-[400px] round-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="project-image" className="w-full h-full"/>
      </div>
    </motion.div>
  )
}

export default SingleProject