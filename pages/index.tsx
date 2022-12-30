import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainContent from '../components/main-content'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sean Pacheco Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web development, software engineering, web design" />
        <meta name="description" content="Sean Pacheco's Software Engineering Portfolio" />
      </Head>
      <MainContent/>
    </div>
  )
}

export default Home
