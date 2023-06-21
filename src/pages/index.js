import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import vader from "../../public/images/svgs/vader.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
    return (
        <>
            <Head>
                <title>Andrii Balan | Front-End Developer</title>
                <meta
                    name="description"
                    content="Welcome to the personal website of Andrii Balan, a talented front-end developer from Ukraine. Explore my portfolio and discover my expertise in creating stunning and responsive web experiences. Get in touch to discuss your next project."
                />
                <meta
                    name="keywords"
                    content="Andrii Balan, front-end developer, Ukraine, web development, portfolio, responsive web design, user experience, HTML, CSS, JavaScript, web projects"
                />
            </Head>
            <TransitionEffect key="transition-effect" />
            <main className="flex items-center text-dark w-full relative dark:text-light h-max">
                <Layout className="pt-10 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full h-auto lg:flex-col">
                        <div className="w-1/2 flex justify-center md:w-3/4">
                            <Image
                                src={profilePic}
                                alt="Andrii Balan"
                                className="w-1/2 rounded-lg shadow-[0_20px_50px_rgba(27,_27,_27,_0.7)] lg:hidden md:inline-block md:w-full max-w-full max-h-full"
                                width={410}
                                height={548}
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="eager"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:my-8">
                            <AnimatedText
                                text="Andrii Balan."
                                className="text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-xl font-medium md:text-sm underline text-dark/75 dark:text-light/75">
                                Crafting Engaging Web Experiences
                            </p>
                            <p className="my-4 text-base font-medium md:text-sm">
                                Welcome to my personal website! I&#39;m Andrii
                                Balan, a skilled front-end developer based in
                                Ukraine. With expertise in HTML, CSS, and
                                JavaScript, I specialize in creating captivating
                                and interactive web experiences. Explore my
                                portfolio and discover the fusion of aesthetics
                                and functionality in my projects. Let&#39;s
                                collaborate and bring your ideas to life!
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    key="resume-link"
                                    href="/Andrii_Balan_CV.pdf"
                                    target={"_blank"}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                    border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all duration-300 ease-out md:p-2 md:mx-4 md:text-base"
                                    download={true}>
                                    Resume{" "}
                                    <LinkArrow
                                        className={
                                            "w-6 h-6 ml-1 md:!h-6 md:!w-6"
                                        }
                                    />
                                </Link>
                                <Link
                                    key="contact-link"
                                    href="mailto:balan.andrey.93@gmail.com"
                                    target={"_blank"}
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
            <HireMe />
            <div className="fixed right-8 bottom-24 inline-block w-24 md:hidden dark:hidden">
                <Image src={vader} alt="Vader" className="w-full h-auto" />
            </div>
        </>
    );
}
