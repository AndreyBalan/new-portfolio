import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary dark:text-primaryDark capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="mt-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-5xl xs:4xl md:mb-16">
                Experience
            </h2>
            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[29px] xs:left-[19px]"></motion.div>

                <ul className="w-full flex flex-col items-start space-between ml-4 xs:ml-2">
                    <Details
                        position="QA Engineer"
                        company="Glyanec.net"
                        companyLink="https://glyanec.net/"
                        time="2017-2019"
                        address="Vinnytsia, Ukraine"
                        work="During my time as a QA engineer at a web development company, I was dedicated to ensuring the quality and reliability of our websites. I diligently conducted comprehensive testing, performing functional, usability, and compatibility checks across different browsers and devices. By meticulously identifying and documenting issues, I collaborated closely with the development team to implement effective solutions and improve the overall user experience. Through my meticulous attention to detail and commitment to delivering high-quality websites, I played a vital role in maintaining the company's reputation for excellence in web development."
                    />
                    <Details
                        position="Front-End Developer"
                        company="Freelance"
                        companyLink="https://www.upwork.com/"
                        time="2023 - present"
                        address="Online"
                        work="As a freelance front-end developer, I specialize in crafting captivating and responsive web experiences. Leveraging my expertise in HTML, CSS, and JavaScript, I collaborate with clients to bring their visions to life. Whether it's creating visually stunning user interfaces, optimizing website performance, or implementing interactive features, I am dedicated to delivering high-quality solutions tailored to meet their unique needs. With a keen eye for design and a passion for coding, I strive to exceed expectations and provide seamless digital experiences that engage and delight users."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
