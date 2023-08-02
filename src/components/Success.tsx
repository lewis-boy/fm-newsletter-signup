'use client'
import { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface SuccessProps {

}

const Success: FC<SuccessProps> = ({ }) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('email')
    return (
        <div className="w-[504px] h-[520px] bg-white rounded-[36px] px-[64px] pt-[48px] pb-[64px] flex flex-col gap-[40px]" >
            <Image
                src="/images/icon-list.svg"
                width={64}
                height={64}
                alt=''
            />
            <div className='flex flex-col max-w-[380px] gap-[24px]'>
                <h1 className="font-bold text-[3.10rem] mb-[20px] leading-[3.5rem]">Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span className='font-bold'>{search}</span>.
                    Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <div className="text-[16px] py-[15px] px-[65px] rounded-lg
                    bg-dark-grey-slate
                    text-white font-bold relative
                    hover:shadow-[rgba(255,106,58,1.0)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                    transition-shadow duration-500
                    flex items-center justify-center
                "
            >
                Dismiss Message
                <Link
                    href={`/`}
                    type="submit"
                    className="absolute inset-0 w-full h-full rounded-lg
                        text-white
                        opacity-0 hover:opacity-100 bg-gradient-to-b from-[#FF6A3A] to-[#FF527B]
                        transition duration-500
                        flex items-center justify-center
                    "
                >
                    Dismiss Message
                </Link>
            </div>


        </div>
    )
}

export default Success