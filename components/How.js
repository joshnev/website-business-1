import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerTextContainer } from '../variants';
import { ChevronRightIcon } from '@heroicons/react/solid';

const How = ({ howData }) => {
  const { title, subtitle, man2Img } = howData;
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          <motion.div variants={fadeInRight} className="flex-1 mr-[100px]">
            <Image src={man2Img} width={720} height={628} />
          </motion.div>
          {/* Make section pull a clickable accordian style component? */}
          <motion.div variants={fadeInLeft} className="flex-1 flex">
            <div className="max-w-[455px]">
              <h3 className="h3">{title}</h3>
              <p className="lead3">{subtitle}</p>
              <div className="bg-[#EBDEDF] rounded-md drop-shadow-md">
                <h3 className="h3 mt-10 ml-[15px]">What. else?</h3>
                <p className="lead2 ml-[10px]">
                  On top of delivering fast, crisp beautiful websites we can:
                </p>
                <ul className="mt-[15px] mx-auto flex flex-col ml-[10px]">
                  <li className="lead2 flex pb-2 items-center">
                    <ChevronRightIcon className="h-5 w-5 pt-1" />
                    <p>Offer free consultation</p>
                  </li>
                  <li className="lead2 flex pb-2 ml-[-1px]">
                    <ChevronRightIcon className="h-5 w-6 pt-1 ml-[2px]" />
                    <p className="pl-[5px]">
                      All websites we build are scalable, we can refactor,
                      update, evolve as you do.
                    </p>
                  </li>
                  <li className="lead2 flex pb-2 items-center">
                    <ChevronRightIcon className="h-5 w-5 pt-1" />
                    <p>Full support during and after build from us.</p>
                  </li>
                  <li className="lead2 flex pb-2 items-center ml-[20px] italic">
                    <ChevronRightIcon className="h-5 w-5 pt-1" />
                    <p>Getting your website live with hosting.</p>
                  </li>
                  <li className="lead2 flex items-center ml-[20px] mb-[10px] italic">
                    <ChevronRightIcon className="h-5 w-5 pt-1" />
                    <p>Revisions to your website.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
