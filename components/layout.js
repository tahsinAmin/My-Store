import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'

export default function Layout({children}) {
   return (
      <>
         <Head>
            <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.min.css" />
         </Head>
         <Navbar/>
         {children}
         <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
      </>
   )
}
