import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef, useEffect } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useSpring, useMotionValue } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollToTop from "@/components/ScrollToTop";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const about = () => {
    return (
        <>
            <Head>
                <title>Andrii Balan | About Page</title>
                <meta
                    name="keywords"
                    content="Andrii Balan, front-end developer, Ukraine, web development, HTML, CSS, JavaScript, portfolio, skills, expertise, creative web design, user-friendly websites"
                />
                <meta
                    name="description"
                    content="Learn more about Andrii Balan, a talented front-end developer from Ukraine. Discover his passion for creating visually stunning and user-friendly websites. Explore his expertise in HTML, CSS, and JavaScript, and how he combines creativity with technical skills to deliver exceptional web experiences."
                />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Discover Who I Am"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap 16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 md:mt-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                About Me
                            </h2>
                            <p className="font-medium pr-8">
                                - Hello, I&#39;m Andrii Balan, a passionate
                                front-end developer from Ukraine. With a strong
                                foundation in web development and a keen eye for
                                design, I strive to create captivating digital
                                experiences that not only meet clients&#39;
                                needs but also leave a lasting impact on users.
                                I am driven by a deep love for coding and a
                                desire to push the boundaries of what is
                                possible in the digital realm.
                            </p>
                            <p className="font-medium my-4 pr-8">
                                - My journey in the world of web development
                                began several years ago, and since then, I have
                                honed my skills in HTML, CSS, and JavaScript to
                                transform ideas into stunning and functional
                                websites. I believe that a successful website
                                should seamlessly blend aesthetics with
                                usability, ensuring a delightful user
                                experience. Through constant learning and
                                staying up-to-date with the latest industry
                                trends, I am committed to delivering
                                cutting-edge solutions that exceed expectations.
                            </p>
                            <p className="font-medium pr-8">
                                - Collaboration is at the heart of my work
                                philosophy. I enjoy working closely with
                                clients, understanding their vision, and
                                translating it into a digital reality. Whether
                                it&#39;s revamping an existing website or
                                building a brand-new one from mockup, I approach
                                each project with enthusiasm and dedication. I
                                take pride in delivering high-quality,
                                responsive websites that not only meet the
                                technical requirements but also align with the
                                unique goals and objectives of my clients.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 flex justify-center dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light"></div>
                            <Image
                                src={profilePic}
                                alt="Andrii Balan"
                                className="w-[90%] h-auto rounded-2xl max-w-full max-h-full"
                                width={410}
                                height={548}
                                priority={true}
                                as="image"
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:mt-8 xl:items:center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text:4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Satisfied clients
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text:4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-4xl xs:text:4xl">
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    year of experience
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                    <ScrollToTop />
                </Layout>
            </main>
        </>
    );
};

export default about;
