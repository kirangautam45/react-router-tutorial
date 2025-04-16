import { newProducts } from '../../data/featuredProducts'
export default function NewProducts() {
  return (
    <div>
      <h2>New Arrivals</h2>
      <div className='product-grid'>
        {newProducts.map((product) => (
          <div className='product-card' key={product.id}>
            <div
              className='product-image'
              style={{ backgroundColor: product.color }}
            >
              {product.name.charAt(0)}
            </div>
            <h3>{product.name}</h3>
            <p className='product-price'>${product.price}</p>
            <p className='product-desc'>{product.description}</p>
            <button className='btn-add-cart'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
