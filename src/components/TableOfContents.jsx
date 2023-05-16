import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Prepare your workspace': 3,
    'Lay out out all the components': 4,
    'Construction plan overview': 5,
  },
  Fundamentals: {
    'Prepare the wood - Coarse sanding': 6,
    'Prepare the wood - Fine sanding': 7,
    'Get those edges': 7,
    'Clean the sanded wood': 8,
  },
  'Painting': {
    'First coat': 9,
    'Second coat': 10,
    'Apply the protective coat': 10,
  },
  'Assembly': {
    'Measure twice cut once': 11,
    'Marking the hinge, latches and handle placement': 12,
    'Screw together all the peices': 13,
    'All the draw slide track': 14,
    'Put the handles & hinges on': 15,
  },
  'Make it a Monster': {
    'Add the eyes and teeth': 16,
    'Embellish to your heart\'s content': 17,
    'Name the monster and show your friends': 18,
    'Mandatory high-five': 19,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="mt-8 mb-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Box of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the instructional guide. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “DIY Monster Box” is comprised of 20
          highly visual pages designed to teach you and your kid everything you need to do
          to make a super high quality custom toy or camping kitchen box.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
