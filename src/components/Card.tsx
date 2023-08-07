import Image from "next/image"
import EmailForm from "./EmailForm"

const Card = ({ }) => {
    return (
        <div className="relative w-[375px] h-[842px] md:w-[928px] md:h-[641px] bg-white rounded-[36px]
            flex flex-col md:flex-row md:justify-between md:mb-0 items-center"
        >
            <div className="md:hidden">
                <Image src="/images/illustration-sign-up-mobile.svg" width={375} height={284} alt="" />
            </div>
            <div className="container md:flex md:flex-col items-start max-w-[376px] max-h-[446px] mx-[40px]">
                <h1 className="font-bold text-[3.25rem] mb-[20px]">Stay updated!</h1>
                <p className="text-[16px] mb-[24px]">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="">
                    <li className="text-[16px] relative bullet">Product discovery and building what matters</li>
                    <li className="text-[16px] relative bullet">Measuring to ensure updates are a success</li>
                    <li className="text-[16px] relative bullet">And much more!</li>
                </ul>
                <EmailForm />
            </div>
            <div className="hidden md:block">
                <Image src="/images/illustration-sign-up-desktop.svg" width={400} height={593} alt="" />
            </div>
        </div>
    )
}

export default Card