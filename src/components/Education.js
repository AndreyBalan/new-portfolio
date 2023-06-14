import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
                    {type}&nbsp;
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-lg">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="mt-64 mb-10 md:mt-14">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-5xl xs:4xl md:mb-16">
                Education
            </h2>
            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[29px] xs:left-[19px]"></motion.div>

                <ul className="w-full flex flex-col items-start space-between ml-4 xs:ml-2">
                    <Details
                        type="Master in Logistics"
                        time="2010-2015"
                        place="Vinnytsia Institute of Trade and Economics | Vinnytsia"
                        info="Master's Degree in Logistics. Studied economic cybernetics. Master's Degree in Logistics. Studied economic cybernetics. I showed myself as a hardworking student."
                    />
                    <Details
                        type="QA Engineer"
                        time="2017"
                        place="SkillUp IT School | Kyiv"
                        info="I acquired essential skills as a QA Engineer. Through comprehensive training and hands-on projects, I gained proficiency in various aspects of software testing, including test planning, test case design, and test execution. I also learned to utilize industry-standard testing tools and methodologies to ensure the quality and reliability of software applications."
                    />
                    <Details
                        type="HTML / CSS courses"
                        time="2019"
                        place="EasyCode IT School | Online"
                        info="I delved into the exciting world of web development through their HTML/CSS courses. With hands-on learning and expert guidance, I gained comprehensive knowledge and practical skills in creating and styling web pages. Through interactive projects and real-world examples, I mastered the art of crafting engaging and responsive websites."
                    />
                    <Details
                        type="Frontend + JavaScript + React"
                        time="2022-2023"
                        place="Udemy | Online"
                        info=" I mastered the dynamic trio of frontend development, JavaScript, and React. Through their comprehensive courses, I gained expertise in building interactive and user-friendly web applications. From manipulating the DOM with JavaScript to leveraging the power of React components, I learned to create seamless and engaging user experiences. "
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
