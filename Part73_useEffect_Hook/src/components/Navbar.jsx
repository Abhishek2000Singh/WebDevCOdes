import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    //case1 : run on every Render
    useEffect(() => {
        alert("Hey! I will run on every render")
    }, [])

    //Case2: Run only on first render
    useEffect(() => {
        alert("Hey welcome to the page. This is the First Render")
    }, [])

    //Case3: Run only when certain values changed
    useEffect(() => {
        alert("Hey! I was running because color was Changed")
    }, [color])

    // Example of clean up function
    useEffect(() => {
        alert("Hey welcome to the page. This is the First Render of app.jsx")
        return () => {
            alert("Component was unmounted")
        }
    }, [])

    return (
        <div>
            I am Navbar of {color} color...
        </div>
    )
}

export default Navbar
