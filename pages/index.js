import Link from 'next/link'

const Home = (prop) => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Next js is awesome</h1>
      <h2 className="text-xl font-semibold">{prop.message}</h2>
      <Link href='/product'><a className='text-purple-900 underline'>Go to Product Page</a></Link>
    </div>
  )
}

// We use getSTatic props when it is not user specific (i.e. a welcome screen which is same for all users. getServerSide is user specific, for example, going to a cart whihc is unique to each user)
export async function getStaticProps(context) { // only runs in server side
  const res = await fetch('http://localhost:3000/api/test');
  const data = await res.json();
  console.log(data); // this is why this only logs in server side and not in client side's browser
  return {
    props: {message:data.message}, // will be passed to the page component as props
  }
}

export default Home;