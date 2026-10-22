const products = [
  { name: 'Умные часы', price: '624 000', icon: '', color: 'blue' },
  { name: 'Беспроводные наушники', price: '289 000', icon: '', color: 'peach' },
  { name: 'Аксессуары для дома', price: '145 000', icon: '', color: 'green' },
];

export function ProductCard({ name, price, icon, color }) {
  return <article className="product-card"><div className={`product-image ${color}`}><span>{icon}</span><button aria-label={`Добавить ${name}`}>♡</button></div><div className="product-info"><h3>{name}</h3><p>Популярный товар на Ozon</p><strong>{price} сум</strong></div></article>;
}

function ProductList() {
  return <div className="product-list">{products.map((product) => <ProductCard key={product.name} {...product} />)}</div>;
}

export default ProductList;