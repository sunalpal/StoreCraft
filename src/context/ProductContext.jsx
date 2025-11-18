import  {createContext,useState} from 'react'


 export const  Context=createContext(null)
const ProductContext = (props) => {

const [data, setData] = useState([
  {
    "id": "A_UNIQUE_PRODUCT_ID", 
    "productName": "Example Handcrafted Wool Blanket", 
    "imageUrl": "https://imgs.search.brave.com/i4a1dk11dIXPZh0Y7yzEhC84caKn7yhLAbI83fYZ3Qc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2dldGlt/Z19haV9pbWctam9z/VkhCRW9GRjFXeGZP/Zk5DQXJkLmpwZWc", 
    "shortDescription": "Warm, ethically sourced wool blanket, hand-woven by artisans.", 
    "longDescription": "This blanket uses 100% organic Merino wool and natural dyes. It is ethically manufactured in Nepal and measures 60x80 inches. Hand wash only.", 
    "price": 4500.50, 
    "category": "home_living" 
  } 

]); 
  return (
    <Context.Provider value={{data,setData}}>{props.children}</Context.Provider>
  )
}

export default ProductContext