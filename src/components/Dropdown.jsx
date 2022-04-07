import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Dropdown = ({ categories }) => {
    const [showCategories, setShowCategories] = useState(false);

    const ref = useRef()

    useEffect(() => {
        const handleClick = (e) => {
            if (showCategories && ref.current && !ref.current.contains(e.target)) {
                setShowCategories(false);
            }
        }

        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [showCategories])

    return (
        <div className="relative inline-block text-left" ref={ref}>
            <div>
                <button onClick={() => setShowCategories((oldState) => !oldState)} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-gray-400 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Categories
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            {showCategories && (<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                    {categories && categories.map((category) => (
                        <Link to={`/categories/${category}`} className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" onClick={() => setShowCategories((oldState) => !oldState)}>{category}</Link>
                    ))}
                </div>
            </div>)}
        </div>
    )
}

export default Dropdown