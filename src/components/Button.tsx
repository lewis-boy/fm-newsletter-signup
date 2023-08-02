'use client'

import { FC } from 'react'
import Link from 'next/link'

interface ButtonProps {

}

const Button: FC<ButtonProps> = ({ }) => {
    return (
        <div className="text-[16px] py-[15px] px-[65px] mt-[24px] rounded-lg
                    bg-dark-grey-slate
                    text-white font-bold relative
                    hover:shadow-[rgba(255,106,58,1.0)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                    transition-shadow duration-500
                    group-invalid:shadow-none
                "
        >
            Subscribe to monthly newsletter
            {/* <Link
                href={`/success?email=${}`}
                type="submit"
                className="absolute inset-0 w-full h-full rounded-lg
                        text-white
                        opacity-0 hover:opacity-100 bg-gradient-to-b from-[#FF6A3A] to-[#FF527B]
                        transition duration-500
                        group-invalid:pointer-events-none
                    "
            >
                Subscribe to monthly newsletter
            </Link> */}
        </div>

    )
}

export default Button