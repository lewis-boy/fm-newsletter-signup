'use client'
import { FC } from 'react'
import { useSearchParams } from 'next/navigation'

interface SuccessProps {

}

const Success: FC<SuccessProps> = ({ }) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('email')
    return (
        <div>
            Success {search}
        </div>
    )
}

export default Success