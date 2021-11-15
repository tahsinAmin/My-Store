import Link from 'next/link'
import Image from 'next/image'
import baseUrl from '../helpers/baseUrl'

const Home = ({products}) => {
  console.log(products);
  const productList= products.map(product => (  
    <div key={product._id} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
        <div className='relative md:h-20 md:w-20 lg:h-56 lg:w-full'>
          <Image
           className="rounded-t-lg" 
           src={product.mediaUrl}
          //  width={40}
          //  height={40}
           layout="fill"
          //  objectFit="cover"
           alt={product.name}/>
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{product.name}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">${product.price}</p>
            <Link href={`/product/[id]`} as={`/product/${product._id}`}>
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                  Read more
                  <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </Link>
        </div>
    </div>
  ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto items-center">
      {productList}
    </div>
  )
}

// We use getSTatic props when it is not user specific (i.e. a welcome screen which is same for all users. getServerSide is user specific, for example, going to a cart whihc is unique to each user)
export async function getStaticProps() { // only runs in server side
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();
  return {
    props: {products:data}, // will be passed to the page component as props
  }
}

export default Home;