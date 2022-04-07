import React from 'react'

const ItemCount = ({ stock, count, setCount, handleAdd}) => {

    const onAdd = (stock,initial)=>{
        return initial<stock ? setCount(initial + 1) : setCount(initial);
    }
    const onSubtract = (initial)=>{
        return initial>0 ? setCount(initial - 1) : setCount(initial);
    }
return (
    <div className="flex justify-center">
        <div className="flex flex-col justify-between w-60 h-50 p-4 border-2 border-black bg-gray-300">
            <div className="flex flex-row justify-between text-xl font-semibold px-4 border-2 rounded-full border-gray-600 text-blue-400 bg-gray-900 my-2">
                <button onClick={()=>{onSubtract(parseInt(count))}}>-</button>
                {count}
                <button onClick={()=>{onAdd(parseInt(stock),parseInt(count))}}>+</button>
            </div>
            <button className="text-lg font-medium border-2 w-full border-blue-500 bg-blue-400 rounded-full" onClick={handleAdd}>Add to cart</button>
        </div>
    </div>
    )
}

export default ItemCount