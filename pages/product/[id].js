import { useRouter } from "next/router";

function Product({ product }) {
   const router = useRouter()
   if(router.isFallback){
      return <h3>Loading...</h3>
   }
   return (
      <div>
         <h1>{product.name}</h1>
      </div>
   )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await fetch('http://localhost:3000/api/products')
  const products = await res.json()

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { id: product._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the product `id`.
  // If the route is like /products/1, then params.id is 1
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
  const product = await res.json()

  // Pass product data to the page via props
  return { props: { product } }
}

export default Product