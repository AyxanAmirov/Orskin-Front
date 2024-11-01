import React, { useEffect } from 'react'
import spin from "../../assets/image/spin.webp"
import "./style.css"

function Shop() {
    useEffect(() => {
        window.location.href = 'https://shop.orskin.ae';
    }, [])
    return (
        <div className='shop-container'>
            <img src={spin} alt="Spinner" />
        </div>
    )
}

export default Shop