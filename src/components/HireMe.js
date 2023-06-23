import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-20 flex items-center justify-center overflow-hidden md:absolute md:right-4 md:left-auto md:top-0 md:bottom-auto">
            <div className="w-45 h-auto flex items-center justify-center relative md:w-24">
                <CircularText
                    className={"fill-dark animate-spin-slow dark:fill-light"}
                />
                <Link
                    href="mailto:balan.andrey.93@gmail.com"
                    className="flex items-center justify-center absolute bg-dark text-light
            shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all duration-300 ease-out md:w-12 md:text-[10px] md:h-12 z-11">
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
