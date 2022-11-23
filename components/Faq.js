import Image from 'next/image';
import Accordion from '../components/Accordion';
import { motion } from 'framer-motion';
import {
  fadeInLeft,
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from '../variants';

const Faq = ({ faqData }) => {
  // destructure faq data
  const { pretitle, title, accordions } = faqData;
  return (
    <section className="min-h-[700px] lg:pt-10 lg:pb-24 mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        {/* top */}
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-5"
        >
          {/* text */}
          <motion.div variants={fadeInRight} className="lg:max-w-[100%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="ml-[-0px] h2 mb-6 lg:mb-5">{title}</h2>
          </motion.div>
        </motion.div>
        {/* accordion list */}
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[15px]"
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
