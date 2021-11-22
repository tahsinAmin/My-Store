import Link from 'next/link'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'
import Cookies from 'js-cookie'

export default function Navbar() {
   const router = useRouter();
   const cookieuser = parseCookies();
   const user = cookieuser.user? JSON.parse(cookieuser.user): ""

   function isActive(route){
      if (route == router.pathname){
         return "text-blue-700"
      }else{
         return "text-gray-700"
      }
   }
   return (
      <nav className="bg-white border-gray-200 px-2 border border-b-2 mb-6 sticky z-50 top-0">
         <div className="container mx-auto flex flex-wrap items-center justify-between">
            <Link href='/'>
               <a className="flex">
                  <span className="self-center text-lg font-semibold whitespace-nowrap">MyStore</span>
               </a>
            </Link>

            <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
               <span className="sr-only">Open main menu</span>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
               <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
               <ul className="flex-col md:flex-row items-center flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                  <li className={isActive('/cart')}>
                     <Link href='/cart'><a className="hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Cart</a></Link>
                  </li>
                  {  user.role == 'admin' && user.role == 'root' && <li className={isActive('/create')}><Link href='/create'><a className="hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Create</a></Link></li> }
                  {  user? 
                     <>
                        <li className={isActive('/account')}>
                           <Link href='/account'><a className="hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Account</a></Link>
                        </li>
                        <li><button className="bg-red-500 py-1 px-3 rounded-md text-white" onClick={()=>{
                           Cookies.remove('token')
                           Cookies.remove('user')
                           router.push('/login')
                        }}>logout</button></li> 
                     </>
                     :
                     <>
                        <li className={isActive('/login')}>
                           <Link href='/login'><a className="hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" aria-current="page">Login</a></Link>
                        </li>
                        <li className={isActive('/signup')}>
                           <Link href='/signup'><a className="hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Sign Up</a></Link>
                        </li>
                     </>
                  }
               </ul>
            </div>
         </div>
      </nav>
   )
}