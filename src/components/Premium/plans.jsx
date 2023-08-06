import React, { useEffect } from 'react'

const Plans = (props) => {

    const bgClass = 'w-full flex flex-col gap-8 items-center rounded-md p-5 to-90% bg-gradient-to-br ' +props.to+' '+props.from

    return (
        <div className={bgClass}>
            <div className="flex w-full justify-between items-center">
                <h1 className='text-xl font-semibold'>Premium {props.name}</h1>
                <div className="flex flex-col gap-1 items-end">
                    <h1 className='font-bold text-3xl'>${props.price}</h1>
                    <h3 className=' text-xs text-right'>FOR {props.month} MONTHS</h3>
                </div>
            </div>
            <div className="text-center items-center px-3 flex flex-col gap-3">
                <p>{props.accQty} Premium account - {props.month} months of Premium for ${props.price} with e-wallets and mobile</p>
                <button className='text-stone-800 bg-zinc-300 px-8 text-lg py-2 rounded-full font-bold w-fit'>Get Premium</button>
                <a href='#' className='text-xs font-semibold underline'>Read Terms and Conditions</a>
            </div>

        </div>
    )
}

export default Plans