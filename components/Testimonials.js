import Image from 'next/image';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import { fadeInUp, staggerTextContainer } from '../variants';

const Testimonials = ({ testimonialData }) => {
  // descrtucture testimonial data
  const { pretitle, title, happyImg, clients } = testimonialData;
  return (
    <section className="relative min-h-[600px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row"
        >
          {/* text */}
          <motion.div variants={fadeInUp} className="lg:w-[40%]">
            <h3 className="h3">{pretitle}</h3>
            <div className="flex justify-between">
              <h2 className="h2 mb-6">{title}</h2>
              <div className="right-10 mr-[150px] mt-[60px] sm:mt-[0px] sm:max-w-">
                <Image src={happyImg} width={70} height={70} />
              </div>
            </div>
          </motion.div>
          {/* slider */}
          <motion.div
            variants={fadeInUp}
            className="lg:w-[60%] lg:absolute lg:right-0 "
          >
            <Slider clients={clients} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
