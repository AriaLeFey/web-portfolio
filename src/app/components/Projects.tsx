import Link from "next/link";

export default function Projects() {
    return(
        <>
            <div className="block md:w-full h-dvh bg-[#d6d8df]" id="projects">
                <div className="text-center py-6 text-2xl md:text-4xl my-2 text-[#40434f] font-bold md:font-normal">
                    PROJECTS
                </div>
                <div className="px-2 w-full mx-auto grid grid-cols-2 gap-2 grid-flow-row md:grid-cols-3 md:gap-8 md:w-3/4">
                    <Link href={"https://github.com/AriaLeFey/Powershell-Scripts"} className="flex flex-col aspect-square rounded-md bg-neutral-200 text-center p-4 overflow-hidden drop-shadow-lg transition duration-300 ease-in-out hover:drop-shadow-2xl">
                        <div className="flex flex-col flex-grow justify-between h-full">
                            <p className="">Powershell Scripts</p>
                            <p className="font-thin text-xs flex-grow overflow-hidden text-ellipsis">A collection of Powershell scripts for sysadmins.</p>
                            
                        </div>
                        <div className="">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Powershell</span>
                            </div>
                    </Link>
                    <Link href={"https://github.com/Solareia/gsod-visualizer"} className="flex flex-col aspect-square rounded-md bg-neutral-200 text-center p-4 overflow-hidden drop-shadow-lg transition duration-300 ease-in-out hover:drop-shadow-2xl">
                        <div className="flex flex-col flex-grow justify-between h-full">
                            <p className="">GSOD Visualizer</p>
                            <p className="font-thin text-xs flex-grow overflow-hidden text-ellipsis">A graphical visualizer for GSOD data, which automatically downloads historical weather data, graphs it, and can be saved.</p>
                            
                        </div>
                        <div className="">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-600 dark:text-yellow-300">Python</span>
                            </div>
                    </Link>
                    
                    <Link href={"#"} className="flex flex-col aspect-square rounded-md bg-neutral-200 text-center p-4 overflow-hidden drop-shadow-lg transition duration-300 ease-in-out hover:drop-shadow-2xl border-gray-400 border">
                        <p className="">See more on Github</p>
                    </Link>
                </div>
            </div>
        </>
    );
}