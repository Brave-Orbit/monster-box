import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Quality Time Well Spent - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Carl van Rensburg',
          role: 'Dad & Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I like hands-on projects I can do at home with my kids. This is one of the highest quality DIY kits I've seen.”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Melissa Cook',
          role: 'Mom, Logistics Manager',
          image: avatarImage2,
        }}
      >
        <p>
          “I'm always on the lookout for projects that can get the kids away from screens and can give us some quality time together. This is perfect.”
        </p>
      </Testimonial>

      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
