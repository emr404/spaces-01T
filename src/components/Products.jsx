import products  from "../data/products"
import ProductCard from './ProductCard'
import NoResult from './NoResult'

const Products = ({filterText, showCheapestOnly}) => {
    const filteredProducts = products
    .filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => a.price - b.price)
    .slice(0, showCheapestOnly ? 5 : Infinity)
    return (
        <div className="w-fill mx-auto grid lg:grid-cols-4 md:3 gap-2 relative" id="products" >
        {filteredProducts.length > 0 ?
        filteredProducts.map(item => (
            <ProductCard item={item.name} price={item.price} img={item.image} key={item.id} />
        )) :
        <NoResult/>
        }
        </div>
    )
}


export default Products