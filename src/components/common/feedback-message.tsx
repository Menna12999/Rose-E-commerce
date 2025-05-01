import { CircleAlert } from 'lucide-react';


type FeedbackMessageProps ={
    children?:React.ReactNode
}

export default function FeedbackMessage({children}:FeedbackMessageProps){
    if(!children) return null
    return(
        <p className="text-center text-red-500 font-semibold text-sm flex gap-2"><CircleAlert /> {children}</p>
    )
}
