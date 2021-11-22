import React from 'react'
import { parseCookies } from 'nookies'
import Cookies from 'js-cookie'

export default function account({props}) {
   return (
      <div>
         Account Page
      </div>
   )
}

export async function getServerSideProps(ctx) {
   // const something = Cookies.get();
   
   const { token, user } = parseCookies(ctx);
   // console.log(user.name);
   if(!token){
      console.log("Checking");
      const {res} = ctx
      res.writeHead(302,{Location:"/login"})
      res.end()
   }

   return {
      props: { }
   }
}
