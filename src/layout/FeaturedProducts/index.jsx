import { featuredProducts } from '../../data/featuredProducts'
export default function FeaturedProducts() {
  return (
    <div>
      <h2>Featured Products</h2>
      <div className='product-grid'>
        {featuredProducts.map((product) => (
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
