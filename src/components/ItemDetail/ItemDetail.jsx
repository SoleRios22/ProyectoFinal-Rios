
const ItemDetail = ({ product = {} }) => {
  return (
    <div>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>  
    </div>
  )
}

export default ItemDetail