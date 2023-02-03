import ProductCard from '../components/ProductCard';
const ItemsList = ({ items, filterText, showCheapestOnly }) => {
    const filteredItems = items
      .filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
      .sort((a, b) => a.price - b.price)
      .slice(0, showCheapestOnly ? 5 : Infinity);
  
    return (
      <div className="px-4 py-4">
        {filteredItems.map(item => (
          <ProductCard key={item.name} name={item.name} price={item.price} />
        ))}
      </div>
    );
  };

  export default ItemsList;