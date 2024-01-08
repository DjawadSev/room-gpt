'Use Client'

import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import image1 from '../assets/professional.png'
import image2 from '../assets/tropical.png'

function CompareSlider() {
  return (
    <ReactCompareSlider itemOne={<ReactCompareSliderImage src='/input' />}
                        itemTwo={<ReactCompareSliderImage src='/output' />}
    
    />
  )
}

export default CompareSlider