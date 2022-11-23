import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerTextContainer } from '../variants';

const About = ({ aboutData }) => {
  //destructure about data
  const { title, subtitle, text, aboutImg, tickImg } = aboutData;
  return (
    <section className="mt-[20px] mb-[60px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-x-[20px]"
        >
          <motion.div variants={fadeInDown} className="flex-1 mt-[80px]">
            <h3 className="h3">{title}</h3>
            <p className="lead max-w-[470px] mb-[70px]">{subtitle}</p>
            <div className="bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center rounded mb-10 lg:mb-0">
              <p className="text-[20px] leading-normal italic lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px]">
                {text}
              </p>
              {/* Add tick icon top right of div. */}
              <div className="absolute ml-[530px] mb-[140px] drop-shadow-md">
                <Image src={tickImg} width={80} height={100} />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex-1 lg:mt-[100px] sm:mt-10 "
          >
            <Image src={aboutImg} width={600} height={400} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
