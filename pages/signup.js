import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import baseUrl from '../helpers/baseUrl'
import {useRouter} from 'next/router'

export default function signup() {
  const router = new useRouter();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userSignup = async (e) => {
    e.preventDefault()
    try{
      const res = await fetch(`${baseUrl}/api/signup`, {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      })
      const res2 =  await res.json()
      if(res2.error){
        alert(res2.error)
      }else {
        alert("User Created!")
        router.push('/login')
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='text-2xl font-bold'>signup Page</h1>
      <form onSubmit={(e) => userSignup(e)}>
        <div className="mb-6">
          <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Your Name</label>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your Email</label>
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
      </form>
      <Link href='/login'><a className='text-purple-900 underline'>Already have an Account?</a></Link>
    </div>
  )
}
