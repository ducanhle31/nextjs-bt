import Link from "next/link";
import './products.css';

import { getProducts } from "@/_services/product.service";
export default async function Products() {
  const data = await getProducts({page:1});
  return (
    <main>
        <div className="list">
{data.products.map((product)=>( 
  
  
    <article key={product.id} className="item">
<Link href={`/products/${product.id}`}>
  <img src={product.thumbnail} alt={product.title}/>
    <div className="title">{product.title}</div></Link>
  <div className="price"> {product.price}</div>
  <button>
              Add To Card
            </button>
    </article>
  
  
   
    )

)}
</div>
    </main>
  )
}
