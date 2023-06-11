import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import vader from "../../public/images/svgs/vader.svg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>
            <main className="flex items-center text-dark w-full max-h-screen relative dark:text-light">
                <Layout className="pt-10">
                    <div className="flex items-center justify-between w-full">
                        <div className="w-1/2 flex justify-center">
                            <Image
                                src={profilePic}
                                alt="Andrii Balan"
                                className="w-1/2 rounded-lg shadow-[0_20px_50px_rgba(27,_27,_27,_0.7)]"
                                priority
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center">
                            <AnimatedText
                                text="Andrii Balan."
                                className="text-6xl text-left"
                            />
                            <p className="my-4 text-base font-medium">
                                Welcome! I am a front-end developer with a
                                passion for creating beautiful and interactive
                                user interfaces. Here you will find information
                                about my experience, projects, and skills in web
                                development. I am constantly striving for
                                self-development and the study of new
                                technologies in order to provide cutting-edge
                                solutions for each project. Please view my
                                portfolio and contact me to discuss the
                                possibility of cooperation. <br /> I will be
                                glad to help you bring your ideas and tasks in
                                web development to life.
                            </p>
                            <div className="flex items-center self-start mt-2">
                                <Link
                                    href="/dummy.pdf"
                                    target={"_blank"}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                    border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                                    download={true}>
                                    Resume <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link
                                    href="mailto:balan.andrey.93@gmail.com"
                                    target={"_blank"}
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
                <div className="fixed right-8 bottom-24 inline-block w-24">
                    <Image src={vader} alt="Vader" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
}
