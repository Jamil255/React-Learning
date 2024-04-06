import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0)
    console.log(count);
    const incirment = () => {
       setCount(count+1)
    }
    return{incirment,count}
}
export default useCounter