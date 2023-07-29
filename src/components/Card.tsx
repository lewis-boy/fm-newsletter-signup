import Image from "next/image"
import EmailForm from "./EmailForm"

const Card = ({ }) => {
    return (
        <div className="w-[928px] h-[641px] bg-white rounded-[36px] p-[24px] flex justify-between items-center">
            <div className="flex flex-col items-start max-w-[376px] max-h-[446px] mx-[40px]">
                <h1 className="font-bold">Stay updated!</h1>
                <p className="text-[16px]">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="list-disc">
                    <li className="text-[16px]">Product discovery and building what matters</li>
                    <li className="text-[16px]">Measuring to ensure updates are a success</li>
                    <li className="text-[16px]">And much more!</li>
                </ul>
                <EmailForm />
            </div>
            <div>
                <Image src="/images/illustration-sign-up-desktop.svg" width={400} height={593} alt="" />
            </div>
        </div>
    )
}

export default Card