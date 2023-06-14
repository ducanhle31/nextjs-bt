interface ProductDetailParams{productId:string;}
interface ProductDetailProps{
  params: ProductDetailParams;
}
import { getProductById } from "@/_services/product.service";
import 'swiper/css';
import ProductImageCarousel from "@/_component/ProductImageCarousel";
export default async function ProductDetail(
  {params:{productId},}:ProductDetailProps) {
   const data = await getProductById({productId}); 

  return (
    <main>
<h1>{data.title}</h1>
      <ProductImageCarousel images={data.images}/>
      <h3>{data.description}</h3>
    </main>
  )
}
