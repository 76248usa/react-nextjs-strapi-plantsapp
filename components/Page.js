import React from 'react'
import Head from 'next/head'
import Title from './Title'
import NavBar from './NavBar'

function Page({title, children}) {
  return (
    <div>
         <Head>
  <title>{title} -- Next Shop</title>
 </Head>
 <header>
  <NavBar />
 </header>
 <main className="px-6 py-4">
  <Title title={title} />
  {children}
 </main>
    </div>
  )
}

export default Page