import React from 'react'
import Image from 'next/image'

const OrderSection = () => {
  return (
    <div className="md:px-20 py-10">
        <div className="flex flex-row-reverse items-center relative bg-linear-to-r from-[#EEEEEE] to-[#E0E1DC] ">
            <div className="relative -left-35 flex flex-col items-center">
                <div className="flex items-center ">
                    <Image 
                    src="/images/order/logo.png"
                    alt="logo"
                    width={500}
                    height={300}
                    className="w-50 h-15"
                />
                    <span className="text-7xl font-bold text-[#03081F]">
                        ing is more
                    </span>
                </div>
                <h2 className="py-3 px-10 mt-4 text-[#ffffff] text-[54px] rounded-full bg-[#03081F] w-fit
                text-end">
                    <span className="text-[#FC8A06] border-b-2 w-fit">Personalised</span>
                    & instant
                </h2>
                <p className="text-lg mt-4 text-center">
                    Download the Order.uk app for faster ordering
                </p>
                <Image
                    src="/images/order/store.png"
                    alt="store"
                    width={500}
                    height={300}
                    className="w-70 h-10 mt-4"
                />
            </div>
            <div className="relative -top-8 mx-30">
                <Image
                    src="/images/order/friends.png"
                    alt="friend"
                    width={500}
                    height={300}
                    className="w-full h-105 absolute left-3 "
                />
                <Image
                    src="/images/order/friends-shadow.png"
                    alt="shadow"
                    width={500}
                    height={300}
                    className="h-97"
                    
                />
            </div>   
        </div>
        <div className="flex items-center gap-5 my-10">
            <div className="relative">
                <h4 className="absolute bg-[#ffffff] mx-10 px-6 py-2 rounded-lg font-bold ">
                    Earn more with lower fees
                </h4>
                <Image 
                    src="/images/order/chef.png"
                    alt="chef"
                    width={500}
                    height={300}
                    className="w-180"
                />
                <div className="absolute mx-10 top-1/2 translate-y-1/2">
                    <h5 className="text-[#FC8A06] font-bold">Signup as a bussiness</h5>
                    <h3 className="font-bold text-3xl text-[#ffffff]">Partner with us</h3>
                    <button className="bg-[#FC8A06] px-10 py-4 rounded-full text-[#ffffff] font-bold">
                        Get Started
                    </button>
                </div>
                
            </div>
            <div className="relative">
                <h4 className="absolute bg-[#ffffff] mx-10 px-6 py-2 rounded-lg font-bold">
                    Avail exclusive perks
                </h4>
                <Image 
                    src="/images/order/chef2.png"
                    alt="chef2"
                    width={500}
                    height={300}
                    className="w-180"
                />
                <div className="absolute mx-10 top-1/2 translate-y-1/2">
                    <h5 className="text-[#FC8A06] font-bold">Signup as a Rider</h5>
                    <h3 className="font-bold text-3xl text-[#ffffff]">Ride with us</h3>
                    <button className="bg-[#FC8A06] px-10 py-4 rounded-full text-[#ffffff] font-bold">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSection