import { Item } from './Item'

export const ItemList = ({products}) => {
    return (
        <div className="grid grid-rows-3 grid-cols-5">
        {products.map( (ele)=> <Item key={ele.id} {...ele} />)}
        </div>
    )
}