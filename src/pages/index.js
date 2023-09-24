import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profile-pic-2.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/3'>
              <Image src={profilePic} alt='takemiul' className='w-full h-auto' />
            </div>
            <div className='w-3/5'>
              <h1>
                ECE @ UIUC 24' | SDE Intern @ AWS Amplify Hosting | ex SDE Intern @ Yahoo Mail
              </h1>
              <br />
              <p>
                I’m currently pursuing my M.Eng in Electrical and Computer Engineering at the University of Illinois Urbana-Champaign (UIUC). My journey in the tech world has been fulfilling, with contributions to the Tovala Automated Test Engine in a significant capstone project with Tovala and internships as a Software Development Engineer (SDE) with both Yahoo Core Mail Backend Team and the AWS Amplify Hosting Team.
                Proficient in Go, Java, C, C++, JavaScript, and Python, I’m always eager to take on new challenges. I’m actively seeking full-time SDE opportunities for 2024 and would love to connect with professionals in the field. Let’s explore how we can collaborate!
                </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}