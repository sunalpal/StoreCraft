import ProductCard from "../components/ProductCard"
const Fev = () => {
  const favorite=JSON.parse(localStorage.getItem("fav")||[])
  
  const render=favorite.map((product)=>{
    <ProductCard key={product.id} product={product}/>
  })
  
  return (
     <div className="flex flex-wrap">
      {favorite.length >0? render:"No favorite Found"}
     </div>
  )
}

export default Fev




