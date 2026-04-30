import { useSelector,useDispatch } from "react-redux";
import { setText,resetState } from "./messageSlice";


export function Message (){
    const messages = useSelector((state)=> state.message.text)
    const dispatch =useDispatch()

    return(
        <>
        <p>{messages}</p>
        <button onClick={()=>dispatch(setText())}>
         Here
        </button>
        <button onClick={()=>dispatch(resetState())}>
         reset
        </button>
        </>
    )
}