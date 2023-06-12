import Link from "next/link";
import React from "react";
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

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
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
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/andrii-balan/"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3">
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href="https://www.facebook.com/profile.php?id=100004198513437"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3">
                    <FacebookIcon />
                </motion.a>
                <motion.a
                    href="https://twitter.com/AndrewBalan"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3">
                    <TwitterIcon />
                </motion.a>
                <motion.a
                    href="https://t.me/AndriiBalan"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3">
                    <TelegramIcon />
                </motion.a>

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full w-6 h-6
                    ${
                        mode === "light"
                            ? "bg-dark text-light"
                            : "bg-light text-dark"
                    }
                    `}>
                    {mode === "dark" ? (
                        <SunIcon className={"fill-dark"} />
                    ) : (
                        <MoonIcon className={"fill-dark"} />
                    )}
                </button>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
