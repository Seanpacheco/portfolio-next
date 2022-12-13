import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainContent from '../components/main-content'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent/>
    </div>
  )
}

export default Home
