import React from 'react'
import Button from './Button'


// const Navbar = ({props}) => {
//     return (
//         <>
//         <div>
//             Navbar..
//         </div>
//         <Button count={props.count}/>
//         </>
//     )
// }
//we can either pass as props or directly
const Navbar = ({count}) => {
    return (
        <>
        <div>
            Navbar..
        </div>
        <Button count={count}/>
        </>
    )
}

export default Navbar
