import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import food from "../../public/images/projects/food.jpg";
import california from "../../public/images/projects/california.jpg";
import childhood from "../../public/images/projects/childhood.jpg";
import dudeshape from "../../public/images/projects/dudeshape.jpg";
import monde from "../../public/images/projects/monde.jpg";
import oldPortfolio from "../../public/images/projects/old-portfolio.jpg";
import runsmart from "../../public/images/projects/runsmart.jpg";
import tuotown from "../../public/images/projects/tuotown.jpg";
import uber from "../../public/images/projects/uber.jpg";

import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article
            className="w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light"></div>
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    priority
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link
                        href={github}
                        target="_blank"
                        className="w-10 hover:scale-[1.05] ease-in duration-100">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark ease-in duration-100 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light"></div>
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    priority
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
                        {title}
                    </h2>
                </Link>
                <div className="mt-2 w-full flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark ease-in duration-100 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:text-base">
                        Visit
                    </Link>
                    <Link
                        href={github}
                        target="_blank"
                        className="w-8 hover:scale-[1.05] ease-in duration-100 md:w-6 h-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const portfolio = () => {
    return (
        <>
            <Head>
                <title>Andrii Balan | Portfolio</title>
                <meta
                    name="description"
                    content="Explore a captivating portfolio filled with exquisite creative works and artistic masterpieces. Discover a showcase of unique designs, visually stunning projects, and professional craftsmanship. Immerse yourself in a world of creativity and inspiration."
                />
                <meta
                    name="keywords"
                    content="Portfolio, Creative Works, Design Showcase, Artistic Creations, Professional Portfolio"
                />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Unveiling Creativity: My Portfolio"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Food Project"
                                img={food}
                                summary="This project boasts a sleek design coupled with excellent functionality. The website features tabs, a slider, a calorie calculator, a countdown timer, and modals, all implemented using pure JavaScript."
                                link="https://food-redesign.vercel.app/"
                                github="https://github.com/AndreyBalan/food-redesign"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="California Project"
                                img={california}
                                link="https://andreybalan.github.io/california/"
                                github="https://github.com/AndreyBalan/california-landing"
                                type="Landing Page"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="TuoTown Project"
                                img={tuotown}
                                link="https://andreybalan.github.io/tuotown/"
                                github="https://github.com/AndreyBalan/tuotown"
                                type="Online Store (in progress)"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Childhood Project (WordPress)"
                                img={childhood}
                                summary="Site of the manufacturer of children's toys. The site is developed on CMS WordPress. Every image and every text on the site can be changed in the admin panel. Easily create new slides, overviews and categories through the admin panel. Dynamic menu. Selecting the color of the text depending on the background of the slider, as well as creating buttons with links. Submitting forms. SEO plugins for website optimization."
                                link="/"
                                github="https://github.com/AndreyBalan/childhood_wordpress"
                                type="WordPress"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="DudeShape Project"
                                img={dudeshape}
                                link="https://andreybalan.github.io/dudeshape/"
                                github="https://github.com/AndreyBalan/DudeShape-Landing"
                                type="Landing Page"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Old Personal Website"
                                img={oldPortfolio}
                                link="https://andreybalan.github.io/"
                                github="https://github.com/AndreyBalan/andreybalan.github.io"
                                type="Landing Page"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Pulse Project"
                                img={runsmart}
                                summary="The site has tabs, a slider, submitting and validating forms, as well as working modal windows. Simple but stylish design, map with location."
                                link="https://andreybalan.github.io/pulse/"
                                github="https://github.com/AndreyBalan/pulse.github.io"
                                type="Landing Page"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Uber Drive Project"
                                img={uber}
                                link="https://andreybalan.github.io/uber/"
                                github="https://github.com/AndreyBalan/andreybalan.github.io/tree/main/uber"
                                type="Bootstrap"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Coffee Project"
                                img={monde}
                                link="https://andreybalan.github.io/monde/"
                                github="https://github.com/AndreyBalan/monde.github.io"
                                type="Landing Page"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default portfolio;
