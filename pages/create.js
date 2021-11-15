import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

export default function create() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [media, setMedia] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, media, description);
  }
  return (
    <form className='w-10/12 mx-auto' onSubmit={(e) => handleSubmit(e)}>      
      <div className="mb-6">
        <label htmlFor="username-success" className="text-sm font-medium text-green-700 block mb-2">Name</label>
        <input type="text" name="name" id="username-success" value={name} onChange={(e)=> {setName(e.target.value)}} className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Bonnie Green"/>
        {/* <p className="mt-2 text-sm text-green-600"><span className="font-medium">Alright!</span> Username available!</p> */}
      </div>
      <div className="mb-6">
        <label htmlFor="username-error" className="text-sm font-medium text-red-700 block mb-2">Price</label>
        <input type="text" name="price" id="username-error" value={price} onChange={(e)=> {setPrice(e.target.value)}} className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="Price"/>
        {/* <p className="mt-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Username already taken!</p> */}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
        <textarea id="message" name="description" value={description} onChange={(e)=> {setDescription(e.target.value)}} rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Leave a comment..."></textarea>
      </div>
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-900 block mb-2" htmlFor="user_avatar">Upload Media file</label>
        <input accept="image/*" onChange={(e)=> {setMedia(e.target.files[0])}} className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">A picture is useful to confirm it is a product</div>
        <div className='relative md:h-20 md:w-20 lg:h-56 lg:w-full'>
          {
            (media? (
              <Image
                className="rounded-t-lg" 
                src={media? URL.createObjectURL(media) : ""}
                layout="fill"
                alt="new Product"/>) :
              ""
            )
          }
        </div>
      </div>
      <div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
        Submit
        <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
      </div>
    </form>
  )
}
