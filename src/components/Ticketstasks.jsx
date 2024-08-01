import React from 'react'

function Ticketstasks() {
  return (
    <div className='flex justify-between mx-[70px]'>
      <div className='w-[546px] bg-white border-[#DFE0EB] border-[1px] rounded-[8px]'>
        <div className=' px-[32px] pt-[37px]'>
            <div className='flex justify-between items-center '>
                <div>
                    <h1 className='text-[19px] text-[#252733] leading-[23px] pb-[8px] font-normal'>Unresolved tickets</h1>
                    <span className='text-[#9FA2B4] text-[12px] leading-[15px] flex items-center'>
                    Group:
                    <p className=' text-[12px] leading-[15px] text-black'>Support</p>
                    </span>
                </div> 
                <p className='text-[#3751FF] text-[14px] leading-[23px]'>View details</p>
            </div>
            <div className='flex justify-between items-center pt-[32px]'>
                <h2 className= 'leading-[20px] text-[#252733] text-[14px]'>Awaiting Customer Response</h2>
                <p className='text-[#9FA2B4]'>4238</p>
            </div>
        </div>
        <div className='flex justify-between px-[32px] border-y-[1px] border-[#DFE0EB] py-[19px] mt-[16px]'>
            <h2>Awaiting Customer Response</h2>
            <p>1005</p>
        </div>
        <div className='flex justify-between px-[32px] border-y-[1px] border-[#DFE0EB] py-[19px]'>
            <h2>Awaiting Customer Response</h2>
            <p>1005</p>
        </div>
        <div className='flex justify-between px-[32px] border-y-[1px] border-[#DFE0EB] py-[19px]'>
            <h2>Awaiting Customer Response</h2>
            <p>1005</p>
        </div>
      </div>
      <div className='w-[546px] h-[336px] bg-white border-[#DFE0EB] border-[1px] rounded-[8px]'></div>
    </div>
  )
}

export default Ticketstasks
