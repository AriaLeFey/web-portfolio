"use client"

import Projects from "./components/Projects"
import Link from "next/link";
import Image from "next/image";

import { AiFillGithub } from "react-icons/ai";
import { AiFillDiscord } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Page() {
    return (
        <main className="">
            <div className="flex justify-center items-center h-dvh w-full" id="home">
                <div className="mx-auto block dark:bg-primary rounded-md flex flex-col items-center justify-center h-dvh w-full">
                    <div className="flex justify-center items-center w-full pb-8">
                        <Image src='/avatar.jpg' width={200} height={200} alt="Avatar" className="rounded-full aspect-square object-cover"/>
                    </div>
                    <p className="flex justify-center items-center w-full text-mtext font-thin">ARTUR YASINSKIY</p>
                    <p className="text-4xl flex justify-center my-4 dark:text-green-200 font-thin">ARIA</p>
                    <p className="flex justify-center items-center text-center w-full font-thin text-mtext mb-4 md:text-lg text-sm">A Ukrainian-American who specializes in IT and programming. I also am a coffee nerd.</p>
                    <div className="flex justify-center items-center text-2xl space-x-2 text-latte_yellow dark:text-tokyogreen">
                        <Link href={"https://github.com/arialefey"} className="dark:text-green-200 transition-all ease-in-out delay-150 ">
                            <AiFillGithub />
                        </Link>
                        <Link href={"mailto:artur.ynsky@gmail.com"} className="dark:text-green-200 transition-all ease-in-out delay-150">
                            <MdEmail />
                        </Link>
                        <button className="dark:text-green-200 transition-all ease-in-out delay-150">
                            <AiFillDiscord />
                        </button>          
                    </div>
                </div>
            </div>       
            <Projects />
        </main>
    );
}