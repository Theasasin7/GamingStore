import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

function NavBar() {
    const categories = ['RPG', 'Shooter', 'Strategy'];
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#60a5fa" d="M743.216 75.552c-25.6-12.016-49.806-23.328-71.838-34.384C614.914 12.88 563.714-.864 514.914-.864c-98.288 0-166.304 56.704-208.96 99.36L99.106 305.568c-110.688 110.8-128.368 223.6-57.265 365.808c11.025 22.08 22.369 46.336 34.369 72.033c64.704 138.384 131.584 281.487 241.056 281.487c3.072 0 6.112-.096 9.216-.336c112.976-8.848 145.023-154.288 173.312-282.592c4.496-20.32 8.751-39.809 13.12-57.28c7.6-30.209 22.56-48.976 63.551-90.064l5.632-5.664l3.472-3.472l9.12-9.088c41.088-41.088 59.856-56.032 90.096-63.664c17.311-4.351 36.752-8.64 57.024-13.088c128.224-28.303 273.6-60.368 282.4-173.52c8.879-114.833-138.465-183.84-280.993-250.576zm215.25 244.783c-6.224 79.776-184.813 103.324-291.102 129.98c-47.008 11.872-75.616 36.752-118.784 79.936c-3.008 3.007-6.032 6.015-9.088 9.07c-3.024 3.025-6.032 6.097-9.057 9.09c-43.168 43.215-68 71.807-79.824 118.88c-26.672 106.384-50.191 285.168-129.87 291.44a55.54 55.54 0 0 1-4.322.144c-84.544 0-155.68-192.24-218.447-317.664c-63.744-127.504-36.433-210.224 45.36-292.096c15.696-15.727 35.215-35.247 59.135-59.182c24.432-24.464 53.487-53.552 87.919-88c23.904-23.936 43.408-43.424 59.12-59.184c50.8-50.848 101.936-80.64 163.92-80.64c37.808 0 79.632 11.056 127.872 35.248c127.456 63.905 323.888 136.48 317.168 222.978zm-479.678 30.94h64v-64h-64v64zm0-96h64v-64h-64v64zm96 0h64v-64h-64v64zm0 96h64v-64h-64v64zM329.893 543.436l24.336-24.336c12-12 12-31.472 0-43.456c-12-12-31.44-12-43.44 0l-24.352 24.352l-24.352-24.352c-12-12-31.44-12-43.44 0s-12 31.456 0 43.456l24.351 24.352l-24.351 24.351c-12 11.985-12 31.44 0 43.44s31.456 12 43.44 0l24.352-24.335l25.056 25.055c12 12 31.44 12 43.44 0s12-31.471 0-43.471z"/></svg>
                    <Link className="self-center px-2 text-3xl font-semibold whitespace-nowrap dark:text-white" to="/"><h1>GamingStore</h1></Link>
                </Link>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png" alt="user photo"/>
                    </button>
                    <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                        <div className="py-3 px-4">
                            <Link className="block text-sm text-gray-900 dark:text-white" to="/"><h1>Gaming Store</h1></Link>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@gamingstore.com</span>
                        </div>
                        <ul className="py-1" aria-labelledby="dropdown">
                                <Link className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to="/"><h2>Dashboard</h2></Link>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
                        <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-400 md:p-0 dark:text-white" aria-current="page"><h2>Home</h2></Link>
                        <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><h2>About</h2></Link>
                        <Dropdown categories={categories}/>
                        <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><h2>Contact</h2></Link>
                        <Link to="/cart"><CartWidget /></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar