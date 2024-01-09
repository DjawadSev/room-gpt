import React from 'react'

function page() {
  return (
    <div className='container mx-auto py-10'>
        <div className='w-full flex flex-col  items-center md:items-stretch md:justify-center md:flex-row  gap-20 px-10' >
            <div className='flex flex-col items-center gap-8 md:w-1/3'>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='font-bold text-black text-xl whitespace-pre'>Upload a photo of your room</h3>
                    {/* upload component */}
                </div>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='font-bold text-black text-xl'>Select Room Type</h3>
                    {/* Select component */}
                </div>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='font-bold text-black text-xl'>Select Room Theme</h3>
                    {/* Theme Options Component */}
                </div>
                {/* Generate Button component */}
            </div>
        </div>
    </div>
  )
}

export default page