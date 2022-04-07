export const Button = ( {children, click} ) => {
    return (
        <button className="border-2 border-gray-900 bg-blue-400 font-semibold mx-10 w-60 rounded-full" onClick={click}>{children}</button>
    )
}