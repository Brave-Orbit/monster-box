import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Whit\'s teaching style is strange but cool. Everything was easy to follow.',
      author: {
        name: 'Casper Quote-Ghost',
        role: 'Ghost Writer',
        image: avatarImage3,
      },
    },
    {
      content:
        'My favourite part by far was putting on the eyes and the teeth. I named mine Chester.',
      author: {
        name: 'Whitney Tennant',
        role: 'Monster box maker',
        image: avatarImage4,
      },
    },
    {
      content:
        'What a cool box',
      author: {
        name: 'Dave Tennant',
        role: 'Father',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'I saw this and immediately knew I wanted one. I won\'t be disappointed.',
      author: {
        name: 'Lashara Wood',
        role: 'Entrepreneur',
        image: avatarImage11,
      },
    },
    {
      content:
        'Can\'t believe it turned out so well.',
      author: {
        name: 'Karl Heffer',
        role: 'Design Engineer',
        image: avatarImage7,
      },
    },
    {
      content:
        'I didn’t expect to want a monster box but here I am.',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'I couldn’t believe how fast I scrolled through this website. I’m dying to get my hands on one of these kits.',
      author: {
        name: 'Steven Notreal',
        role: 'Ficticious Person',
        image: avatarImage5,
      },
    },
    {
      content:
        'I\'ve never thought of making a monster box before but now I\'ll get one for my sister\'s kids.',
      author: {
        name: 'Jessica Proctor',
        role: 'Data Scientist',
        image: avatarImage10,
      },
    },
    {
      content:
        'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I worked with a small group of early access customers to make sure all
          the kit did end up making the coolest monster boxes and proud makers. 
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 2)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Expandable.Button>Read more testimonials</Expandable.Button>
          </>
        )}
      </Expandable>
    </section>
  )
}
