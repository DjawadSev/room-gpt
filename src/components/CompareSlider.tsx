'Use Client'

import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'


function CompareSlider() {
  return (
    <ReactCompareSlider style={{}}
                        itemOne={<ReactCompareSliderImage src='/input.jpg'  />}
                        itemTwo={<ReactCompareSliderImage src='/output.png' />}
    
    />
  )
}

export default CompareSlider