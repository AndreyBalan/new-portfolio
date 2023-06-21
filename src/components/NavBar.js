import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
    TwitterIcon,
    TelegramIcon,
    GithubIcon,
    LinkedInIcon,
    FacebookIcon,
    SunIcon,
    MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span
                className={`
                h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 dark:bg-light
                ${router.asPath === href ? "w-full" : "w-0"}
            `}>
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}>
            {title}

            <span className="sr-only">Menu Button</span>
            <span
                className={`
                h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 dark:bg-light
                ${router.asPath === href ? "w-full" : "w-0"}
            `}>
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button
                className="flex-col justify-center items-center hidden lg:flex fixed"
                onClick={handleClick}>
                <span className="sr-only">Menu Button</span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                        isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
                    }`}></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity: 100"
                    }`}></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink
                        href="/portfolio"
                        title="Portfolio"
                        className="mx-4"
                    />
                </nav>

                <nav className="flex item-center justify-center flex-wrap">
                    <motion.a
                        href="https://github.com/AndreyBalan"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3">
                        <span className="sr-only">GitHub</span>
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/andrii-balan/"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/profile.php?id=100004198513437"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3">
                        <span className="sr-only">Facebook</span>
                        <FacebookIcon />
                    </motion.a>
                    <motion.a
                        href="https://twitter.com/AndrewBalan"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3">
                        <span className="sr-only">Twitter</span>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        href="https://t.me/AndriiBalan"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3">
                        <span className="sr-only">Telegram</span>
                        <TelegramIcon />
                    </motion.a>

                    <button
                        onClick={() =>
                            setMode(mode === "light" ? "dark" : "light")
                        }
                        className={`ml-3 flex items-center justify-center rounded-full w-6 h-6
                    ${
                        mode === "light"
                            ? "bg-dark text-light"
                            : "bg-light text-dark"
                    }
                    `}>
                        <span className="sr-only">Theme Switcher</span>
                        {mode === "dark" ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-dark"} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[80vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                    <nav className="flex flex-col items-center justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/portfolio"
                            title="Portfolio"
                            className=""
                            toggle={handleClick}
                        />
                    </nav>

                    <nav className="flex item-center justify-center flex-wrap mt-2">
                        <motion.a
                            href="https://github.com/AndreyBalan"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1">
                            <span className="sr-only">GitHub</span>
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/andrii-balan/"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=100004198513437"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1 ">
                            <span className="sr-only">Facebook</span>
                            <FacebookIcon />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/AndrewBalan"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-1">
                            <span className="sr-only">Twitter</span>
                            <TwitterIcon />
                        </motion.a>
                        <motion.a
                            href="https://t.me/AndriiBalan"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 ml-3 sm:mx-1">
                            <span className="sr-only">Telegram</span>
                            <TelegramIcon />
                        </motion.a>

                        <button
                            onClick={() =>
                                setMode(mode === "light" ? "dark" : "light")
                            }
                            className={`ml-3 flex items-center justify-center rounded-full w-6 h-6
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
    `}
                            aria-label="Toggle Theme">
                            {mode === "dark" ? (
                                <SunIcon className={"fill-dark"} />
                            ) : (
                                <MoonIcon className={"fill-dark"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
