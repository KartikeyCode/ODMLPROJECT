import Image from 'next/image'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ApplicationForm from '@/components/applicationform'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen ">
      <Navbar/>
      {/* <Hero/> */}
      <ApplicationForm />
    </main>
  )
}
