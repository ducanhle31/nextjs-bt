
import Counter from "../_component/counter"
import { getProducts } from "@/_services/product.service";
export default async function Home() {
  const data = await getProducts({page:1});
  return (
    <main>
      <h1>Hello Next js</h1>

      <Counter />

{data.products.map((product)=>
  <article key={product.id}>
    <img src={product.thumbnail}/>
    <h1>{product.title}</h1>
  </article>
)}
    
    </main>
  )
}
