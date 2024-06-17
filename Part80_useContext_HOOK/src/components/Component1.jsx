import React ,{useContext} from 'react'
import { counterContext } from '../context/context'


const Component1 = () => {
    // const counter = useContext(counterContext)
    // return (
    //     <div>
    //         {counter}
    //     </div>
    // )
    
    //for setcount as we passed as an object therefore we will call it by variable
    const value = useContext(counterContext)
    return (
        <div>
            {value.count}
        </div>
    )
}

export default Component1
