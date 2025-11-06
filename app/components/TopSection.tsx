import React from 'react'
import Image from 'next/image'
const TopSection = () => {
  return (
    <div className="md:px-20">
        <div className="bg-[#0000001A] flex items-center 
        justify-between rounded-b-xl  border-white">
            <div className="flex items-center gap-2 ml-5">
                <Image
                    src="/images/top/star.png"
                    alt="star"
                    width={500}
                    height={300}
                    className="w-5 h-5"
                />
                <h3>Get 5% off your first order,
                    <span className="font-bold text-[#FC8A06] border-b-2"> 
                         Promo: ORDER5
                    </span>
                </h3>
            </div>
            <div className="flex items-center gap-12">
                <Image
                    src="/images/top/location.png"
                    alt="location"
                    width={500}
                    height={300}
                    className="w-5 h-5"
                />
                <h3>Regent Street, 
                    <span className="border-b"> A4,</span>
                    London &nbsp;
                    <span className="font-bold text-[#FC8A06] border-b-2">
                        Change Location
                    </span>
                </h3>
            </div>
            <div className="flex items-center font-bold text-[#ffffff] bg-[#028643] py-4 px-2 gap-1">
                <Image 
                    src="/images/top/basket.png"
                    alt="basket"
                    width={500}
                    height={300}
                    className="w-5 h-5"
                />
                <h3 className="border-r-2 border-l-2 px-1">23 items</h3>
                <h3 className="border-r-2  px-1">GBP 79.89</h3>
                <Image
                src="/images/top/button.png"
                alt="button"
                width={500}
                height={300}
                className="w-5 h-5"
                />
            </div>
        </div>
    </div>
  )
}

export default TopSection