import React from 'react'
import ButtonLink from './ButtonLink'

export const CTASection = () => {
  return (
        <div className="flex flex-col sm:flex-row ">
            <div className="flex flex-col text-left basis-1 sm:basis-1/2 gap-7">
                <p className="text-xl font-bold">Ready to launch your next project?</p>
                <p className="font-light text-sm">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            <div className="flex justify-start pt-5 sm:pt-0 sm:justify-end items-start basis-1 sm:basis-1/2">
                <ButtonLink label="Get started a project" link="#"/>
            </div>
        </div>
  )
}
