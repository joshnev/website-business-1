import Image from 'next/image';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { CgArrowLongRight } from 'react-icons/cg';
import { staggerContainer, manAnim, fadeInDown } from '../variants';

const Hero = ({ heroData, headerData, navData }) => {
  // desctructure hero data
  const { title, manImg, btnText } = heroData;
  return (
    <section className="bg-hero bg-cover bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-10">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px]"
      >
        {/* header */}
        <motion.div variants={fadeInDown}>
          <Header headerData={headerData} navData={navData} />
        </motion.div>

        {/* title */}
        <motion.h1
          variants={fadeInDown}
          className="h1 max-w-[740px] text-black pt-[12rem] mb-[60px]"
        >
          {title}
        </motion.h1>

        {/* button */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          variants={fadeInDown}
          className="btn font-['Rubik']"
        >
          {btnText}
          <CgArrowLongRight className="text-[30px]" />
        </motion.button>

        {/* man image */}
        <motion.div
          variants={manAnim}
          className="hidden lg:flex absolute bottom-[230px] top-5"
        >
          <Image src={manImg} width={500} height={500} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
