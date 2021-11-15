import { useRouter } from "next/router";
import baseUrl from "../../helpers/baseUrl";
import Image from 'next/image'

function Product({ product }) {
   const router = useRouter()
   if(router.isFallback){
      return <h3>Loading...</h3>
   }

   const deleteProduct = async () => {
     const res = await fetch(`${baseUrl}/api/product/${product._id}`,{
      method:'DELETE'
     })
     await res.json();
     router.push('/')
   }

   return (
      <div className="bg-white shadow-md border border-gray-200 rounded-lg h-auto w-6/12 mx-auto">
        <div className='relative md:h-20 md:w-20 lg:h-96 lg:w-full'>
          <Image
           className="rounded-t-lg" 
           src={product.mediaUrl}
           layout="fill"
           alt={product.name}/>
        </div>
        <div className="p-5 text-center">
          <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{product.name}</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">${product.price}</p>
          <input type="number" min="1" placeholder="Quantity"/>
          <button className='py-2 px-6 bg-gray-400 text-white font-semibold border-2 shadow-sm'>Add + </button>
          <p className="font-normal text-gray-700 mb-3">{product.description}</p>
          
          <button
           className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
           type="button"
           data-modal-toggle="default-modal">
           Delete
          </button>

          <div id="default-modal" aria-hidden="true" className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">

              <div className="bg-white rounded-lg shadow relative">
                  <div className="flex items-start justify-between p-5 border-b rounded-t">
                      <h3 className="text-xl lg:text-2xl font-semibold">
                          {product.name}
                      </h3>
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                      </button>
                  </div>

                  <div className="p-6 space-y-6">
                      <p className="text-gray-500 text-base leading-relaxed">
                          Are you sure you want to delete?
                      </p>
                  </div>

                  <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b">
                      <button
                       data-modal-toggle="default-modal" 
                       type="button" 
                       className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                       onClick={() => deleteProduct()}>
                       Yes
                      </button>
                      <button data-modal-toggle="default-modal" type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">No</button>
                  </div>
              </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await fetch(`${baseUrl}/api/products`)
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
  const res = await fetch(`${baseUrl}/api/product/${params.id}`)
  const product = await res.json()

  // Pass product data to the page via props
  return { props: { product } }
}

export default Product