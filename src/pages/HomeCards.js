const HomeCards = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
                <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
                    <img src='/svg/solarsystem.svg' className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" alt="Solar System"/>
                <div>
                    <div>
                    <h3 className="block font-bold text-gray-800 dark:text-white">Galaxy Map</h3>
                    <p className="text-gray-600 dark:text-gray-400">Explore systems, planets, and moons in the Starfield Universe</p>
                    </div>

                    <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Learn more
                    <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                    </svg>
                    </p>
                </div>
                </a>

                <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
                <img src='/svg/rocket.svg' className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" alt="Solar System"/>

                <div>
                    <div>
                    <h3 className="block font-bold text-gray-800 dark:text-white">Starship Customizer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Playground for testing new or current ship builds.</p>
                    </div>

                    <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Learn more
                    <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                    </svg>
                    </p>
                </div>
                </a>

                <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
                <img src='/svg/people.svg' className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" alt="Solar System"/>


                <div>
                    <div>
                    <h3 className="block font-bold text-gray-800 dark:text-white">Sell your goods</h3>
                    <p className="text-gray-600 dark:text-gray-400">Get your goods in front of millions of potential customers with ease.</p>
                    </div>

                    <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Learn more
                    <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                    </svg>
                    </p>
                </div>
                </a>
            </div>
        </div>
    )
}

export default HomeCards