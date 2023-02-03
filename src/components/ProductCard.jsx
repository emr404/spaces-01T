import React from 'react'

const ProductCard = ({item, price, img}) => {
    return (
            <div class="product w-72 bg-white m-4 duration-300 shadow-lg rounded-md hover:scale-105  hover:shadow-xl">
                <img src={img}alt="Product" class="h-80 w-80 rounded-t-xl object-cover" />
                <div class="flex flex-row justify-between px-4 py-3 w-72 h-30">
                    <p class="item font-normal text-black block capitalize">{item}</p>
                    <p class="font-normal text-black"> £ <span className='price'>{price}</span>/month</p>
                </div>
            </div>
    )
}

export default ProductCard 