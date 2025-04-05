import React from 'react'
import SectionHeading from './SectionHeading'
import DestinationSlider from './DestinationSlider'

export default function Destination() {
  return (
    <div className='pt-20 pb-20'>
        {/* Section Heading */}
        <SectionHeading heading="Exploring Popular Destination"/>

        {/* Section Content */}
        <div className='mt-14 w-[80%] mx-auto'>
            <DestinationSlider/>
        </div>

    </div>
  )
}
