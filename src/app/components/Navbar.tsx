"use client"

import { useState, useEffect } from "react";

import { FaAlignJustify } from "react-icons/fa6";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [ dropdownState, setDropdownState ] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted)
        return null;

    const toggleDropdown = async () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setDropdownState(!dropdownState));
            }, 100);
        });
    }

    const handleScroll = (id: string, offset: number) => {
        const element = document.getElementById(id)!;
        
        if(element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
    };

    return(
        <div>
            <div className="w-full h-20 bg-crustlight dark:bg-navbar md:fixed z-99">
                <div className="w-full px-2 h-full hidden md:block">
                    <div className="flex items-center justify-end h-full">
                        <ul className="gap-x-8 text-gray-400 flex mr-8 items-center">
                            <li>
                                <button>
                                    <p onClick={()=>handleScroll("home", 0)} className="cursor-pointer text-lg font-thin transition duration-300 ease-in-out hover:text-gray-100">Home</p>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <p onClick={()=>handleScroll("projects", 80)} className="cursor-pointer text-lg font-thin transition duration-300 ease-in-out hover:text-gray-100">Projects</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="w-full px-2 h-full md:hidden z-99">
                <div className="flex items-center justify-end h-full px-2 space-x-2">
                    <button onClick={toggleDropdown}>
                        <FaAlignJustify className="text-2 xl font-bold dark:text-white"/>
                    </button>
                </div>
            </div>
            </div>
            <div className={`md:hidden w-full`}>
                <div className={`${dropdownState ? `visible`: `hidden`} grid grid-cols-1 place-items-end py-2 bg-crustlight dark:bg-navbar space-y-2 text-mtext`}>
                    <button className="w-full px-4">
                        <p onClick={()=>handleScroll("home", 0)} className="text-end">Home</p>
                    </button>
                    <button className="w-full px-4">
                        <p onClick={()=>handleScroll("projects", 0)} className="text-end">Projects</p>
                    </button>
                </div>
            </div>
        </div>
    );
}