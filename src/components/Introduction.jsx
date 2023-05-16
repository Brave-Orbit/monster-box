import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        &quot;DIY monster box&quot; is a project you can do with your kids that
          teaches simple carpentry that anyone can do.
        </p>
        <p className="mt-4">
          Initially a once off gift for a friend, I showed the monster box to my friends and they wanted one.
          So I&quot;m making a few more kits and instructions for anyone who wants to make one.
        </p>
        <p className="mt-4">
          I certainly want a monster box for myself, and I&quot;m sure you know a kid who does too.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Plywood cut to size and pre-drilled (unless you want to drill your own holes) 🔨',
            'Includes paint and brushes - pick a colour when you order 🎨',
            'Hinges, screws, latches and handles 🏗️',
            'Additional parts to make the face of the monster 👹',
            'Easy to follow instructions and a video guide to help you along 🤸',
            'A drop sheet for a no mess, no stress project 🫧',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the instructions, you&quot;ll have all the confidence you need to build many more monster boxes,
           or even design your own. And you&quot;ll have your very own custom monster box to be proud of and maybe even take camping. 
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get on the waiting list{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
