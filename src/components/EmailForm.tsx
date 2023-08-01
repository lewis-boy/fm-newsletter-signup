'use client'
import { FC } from 'react'

interface EmailFormProps {

}

const EmailForm: FC<EmailFormProps> = ({ }) => {
    return (
        <div className="mt-[40px]">
            <form className='flex flex-col'>
                <label className='font-bold text-[12px]'>Email Address</label>
                <input type="email" placeholder="email@company.com" className='text-[18px] py-[13px] px-[24px] mt-[8px] border-2 border-my-grey rounded-lg' />

                <div className="text-[16px] py-[15px] px-[65px] mt-[24px] rounded-lg
                    bg-dark-grey-slate
                    text-white font-bold relative
                    hover:shadow-[rgba(255,106,58,1.0)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                    transition-shadow duration-500
                "
                >
                    Subscribe to monthly newsletter
                    <button
                        type="submit"
                        className="absolute inset-0 w-full h-full rounded-lg
                        text-white
                        opacity-0 hover:opacity-100 bg-gradient-to-b from-[#FF6A3A] to-[#FF527B]
                        transition duration-500 
                    "
                    >
                        Subscribe to monthly newsletter
                    </button>
                </div>


                {/* <button
                    type="submit"
                    className="text-[16px] py-[15px] px-[65px] mt-[24px] 
                    transition-shadow ease-in-out duration-700
                    bg-dark-grey-slate hover:bg-gradient-to-b hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-[rgba(255,106,58,1.0)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                    text-white rounded-lg cursor-pointer w-full font-bold"
                >
                    Subscribe to monthly newsletter
                </button> */}
            </form>
        </div>
    )
}

export default EmailForm