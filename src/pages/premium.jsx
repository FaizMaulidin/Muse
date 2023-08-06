import React, { useEffect } from 'react'
import Navbar from '../components/comps/navbar'
import Header from '../components/comps/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import SectionTitle from '../components/comps/sectionTitle'
import Plans from '../components/Premium/plans'
import BigNavbar from '../components/comps/bigNavbar'

const Premium = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-stone-950 text-zinc-300">
            <BigNavbar />
            <div className='min-h-screen px-3 pb-24 lg:ml-72 flex flex-col gap-8'>
                <Header name="Get Premium" />
                <div className="flex flex-col md:flex-row md:gap-4 w-full gap-8">
                    <div className=" w-full bg-stone-800 rounded-md py-5">
                        <h1 className=' font-semibold text-xl py-3 border-b-2 px-5 border-stone-700'>Why should you get Premium?</h1>
                        <ul className='flex flex-col gap-3 px-5 text-sm py-3'>
                            <li className='flex items-center gap-2'>
                                <div className="text-green-600 text-2xl">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                Listen offline without Wi-Fi or mobile data
                            </li>
                            <li className='flex items-center gap-2'>
                                <div className="text-green-600 text-2xl">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                Play songs in any order
                            </li>
                            <li className='flex items-center gap-2'>
                                <div className="text-green-600 text-2xl">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                Music without ad interruptions
                            </li>
                            <li className='flex items-center gap-2'>
                                <div className="text-green-600 text-2xl">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                Higher sound quality
                            </li>
                        </ul>
                    </div>
                    <div className="flex bg-stone-800 rounded-md w-full justify-between p-5 items-center md:flex-col md:py-12 md:w-4/6">
                        <h2 className='text-sm md:text-lg mt-1'>CURRENT PLAN</h2>
                        <h1 className='text-2xl tracking-wide font-bold leading-5 md:text-5xl'>Free</h1>
                    </div>
                </div>
                <SectionTitle title="Choose your plan" />
                <div className="grid md:grid-cols-2 gap-5">
                    <Plans from="from-orange-600" to="to-orange-950" name="Mini" price="3.49" accQty="1" month="1" />
                    <Plans from="from-green-600" to="to-green-950" name="Individual" price="5.99" accQty="1" month="2" />
                    <Plans from="from-blue-600" to="to-blue-950" name="Duo" price="9.99" accQty="2" month="2" />
                    <Plans from="from-purple-700" to="to-purple-950" name="Family" price="16.99" accQty="Up to 5" month="2" />
                </div>
                <Navbar />
            </div>
        </div>
    )
}

export default Premium