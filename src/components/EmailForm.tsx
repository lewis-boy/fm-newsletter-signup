'use client'
import { FC } from 'react'

interface EmailFormProps {

}

const EmailForm: FC<EmailFormProps> = ({ }) => {
    return (
        <div className="mt-[40px]">
            <form className='flex flex-col relative group' noValidate>
                <label className='font-bold text-[12px]'>Email Address</label>
                <input
                    type="email"
                    id='email'
                    required
                    placeholder="email@company.com"

                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]/.[a-z]{2,}"
                    className='peer text-[18px] py-[13px] px-[24px] mt-[8px] border-2 border-my-grey rounded-lg
                    invalid:[&:not(:placeholder-shown):not(:focus)]:border-tomato invalid:[&:not(:placeholder-shown):not(:focus)]:border invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-100
                    invalid:[&:not(:placeholder-shown):not(:focus)]:text-tomato
                    '
                />
                <span className='font-bold text-[12px] text-tomato
                                hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block
                                absolute top-0 right-0
                '
                >
                    Valid Email Required
                </span>

                <div className="text-[16px] py-[15px] px-[65px] mt-[24px] rounded-lg
                    bg-dark-grey-slate
                    text-white font-bold relative
                    hover:shadow-[rgba(255,106,58,1.0)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                    transition-shadow duration-500
                    group-invalid:shadow-none
                "
                >
                    Subscribe to monthly newsletter
                    <button
                        type="submit"
                        className="absolute inset-0 w-full h-full rounded-lg
                        text-white
                        opacity-0 hover:opacity-100 bg-gradient-to-b from-[#FF6A3A] to-[#FF527B]
                        transition duration-500
                        group-invalid:pointer-events-none
                    "
                    >
                        Subscribe to monthly newsletter
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EmailForm