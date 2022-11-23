/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerFooterContainer } from '../variants';
import { CgArrowLongRight } from 'react-icons/cg';

const Footer = ({ footerData }) => {
  // desctructure footer data
  const { text, logo, links, form } = footerData;
  return (
    <footer className="bg-[#3D72A4] lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative">
      <motion.div
        variants={staggerFooterContainer}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.1 }}
        className="container mx-auto lg:min-h-[738px] flex flex-col justify-between"
      >
        {/* text / form */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center lg:pr-[90px] lg:gap-x-[90px] gap-y-10 lg:gap-y-10"
        >
          {/* text */}
          <div className="text-white flex-1 border-l-[10px] rounded py-4 lg:mt-24">
            <p className="ml-[40px] max-w-[330px] text-[19px] leading-[30px]">
              {text}
            </p>
          </div>
          {/* form */}
          <form className="w-full max-w-[550px] bg-[#EBDEDF] flex-1 rounded-[10px] lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px] lg:py-[52px] space-y-[30px] drop-shadow-primary">
            <div className="flex flex-col">
              <label className="font-light mb-[9px]" htmlFor="name">
                {form.labelName}
              </label>
              <input
                className="input bg-gray-100/50"
                type="text"
                id="name"
                placeholder={form.placeholderName}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-light mb-[9px]" htmlFor="email">
                {form.labelEmail}
              </label>
              <input
                className="input bg-gray-100/50"
                type="text"
                id="email"
                placeholder={form.placeholderEmail}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-light mb-[9px]" htmlFor="email">
                {form.labelMessage}
              </label>
              <input
                className="input2 bg-gray-100/50"
                type="text"
                id="textarea"
                placeholder={form.placeholderMessage}
              />
            </div>
            <button className="btn self-start mx-auto font-['Rubik']">
              <CgArrowLongRight className="text-[20px]" />
              {form.btnText}
            </button>
          </form>
        </motion.div>
        {/* logo and links*/}
        <motion.div
          variants={fadeInUp}
          className="py-[120px] flex flex-col justify-between lg:pr-24 lg:flex-row"
        >
          {/* logo */}
          <div className="mb-6 mx-auto lg:mb-0 lg:mx-0 bg-[#EBDEDF] rounded-[10px]">
            <Link href={'/'}>
              <a>
                <Image src={logo} width={170} height={41} />
              </a>
            </Link>
          </div>
          {/* Links */}
          <ul className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-[100px] text-center ">
            {links.map((item, idx) => {
              return (
                <li
                  className="hover:text-black text-white transition"
                  key={idx}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
