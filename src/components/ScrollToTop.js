import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-6 z-50 p-3 rounded -rotate-90 bg-dark text-light ${
                isVisible ? "visible" : "invisible"
            }`}
            onClick={scrollToTop}>
            &gt;
        </button>
    );
};

export default ScrollToTop;
