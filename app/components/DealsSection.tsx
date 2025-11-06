import React from 'react'
import Image from 'next/image'

const DealsSection = () => {
  return (
    <div className="md:px-20 py-10">
        <div>
            <div className="flex items-centers justify-between">
                <div className="text-[#000000] font-bold text-3xl">
                    <h2>up to -40% Order.uk exclusive deals</h2>
                </div>
                <div className="flex items-center gap-15">
                    <h4>Vegan</h4>
                    <h4>Sushi</h4>
                    <h4 className="border border-amber-400 py-3 px-6 rounded-full
                    text-[#FC8A06] font-bold">
                        Pizza & Fast food
                    </h4>
                    <h4>others</h4>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 my-10">
                <div className="relative">
                    <h4 className="absolute right-5 my-5 bg-[#03081F] text-[#ffffff] font-bold
                    py-2 px-2 -top-5 rounded-bl-xl rounded-br-xl">
                        -40%
                    </h4>
                    <Image 
                        src="/images/deal/deal1.png"
                        alt="deal1"
                        width={500}
                        height={300}
                    />
                    <div className="absolute mx-5 top-1/2 mt-10">
                        <h3 className="text-[#FC8A06] font-bold text-sm mt-3">Restaurant</h3>
                        <h4 className="mt-2 font-bold text-[#ffffff] text-lg">Chef Burger London</h4>
                    </div>  
                </div>
                <div className="relative">
                    <h4 className="absolute right-5 my-5 bg-[#03081F] text-[#ffffff] font-bold
                    py-2 px-2 -top-5 rounded-bl-xl rounded-br-xl">
                        -20%
                    </h4>
                    <Image 
                        src="/images/deal/deal2.png"
                        alt="deal2"
                        width={500}
                        height={300}
                    />
                    <div className="absolute mx-5 top-1/2 mt-10">
                        <h3 className="text-[#FC8A06] font-bold text-sm mt-3">Restaurant</h3>
                        <h4 className="mt-2 font-bold text-[#ffffff] text-lg">Grand Ai Cafe London</h4>
                    </div> 
                </div>
                <div className="relative">
                    <h4 className="absolute right-5 my-5 bg-[#03081F] text-[#ffffff] font-bold
                    py-2 px-2 -top-5 rounded-bl-xl rounded-br-xl">
                        -17%
                    </h4>
                    <Image 
                        src="/images/deal/deal2.png"
                        alt="deal1"
                        width={500}
                        height={300}
                    />
                    <div className="absolute mx-5 top-1/2 mt-10">
                        <h3 className="text-[#FC8A06] font-bold text-sm">Restaurant</h3>
                        <h4 className="mt-2 font-bold text-[#ffffff] text-lg">Butterbrot Cafe London</h4>
                    </div> 
                </div>
            </div>
        </div>
        <div>
            <h2 className="font-bold text-3xl">
                Order.uk Popular Categories
            </h2>
            <div className="flex items-center gap-5 mt-10">
                <div className="bg-[#03081F] rounded-bl-lg rounded-br-lg">
                    <Image 
                        src="/images/deal/cat1.png"
                        alt="cat1"
                        width={500}
                        height={300}
                    />
                    <div className="px-4 py-3">
                        <h2 className="font-extrabold text-[#FC8A06]">
                            Burders & Fast food
                        </h2>
                        <h3 className="text-[#ffffff]">
                            21 Restaurants
                        </h3>
                    </div>
                </div>
                <div className="bg-[#03081F] rounded-bl-lg rounded-br-lg">
                    <Image 
                        src="/images/deal/cat2.png"
                        alt="cat1"
                        width={500}
                        height={300}
                    />
                    <div  className="px-4 py-3">
                        <h2 className="font-extrabold text-[#FC8A06]">
                            Salad
                        </h2>
                        <h3 className="text-[#ffffff]">
                            32 Restaurants
                        </h3>
                    </div>
                </div>
                <div className="bg-[#03081F] rounded-bl-lg rounded-br-lg">
                    <Image 
                        src="/images/deal/cat3.png"
                        alt="cat3"
                        width={500}
                        height={300}
                    />
                    <div  className="px-4 py-3">
                        <h2 className="font-extrabold text-[#FC8A06]">
                            Pasta & Casuals
                        </h2>
                        <h3 className="text-[#ffffff]">
                            4 Restaurants
                        </h3>
                    </div>
                </div>
                <div className="bg-[#03081F] rounded-bl-lg rounded-br-lg">
                    <Image 
                        src="/images/deal/cat4.png"
                        alt="cat4"
                        width={500}
                        height={300}
                    />
                    <div  className="px-4 py-3">
                        <h2 className="font-extrabold text-[#FC8A06]">
                            Pizza
                        </h2>
                        <h3 className="text-[#ffffff]">
                            32 Restaurants
                        </h3>
                    </div>
                </div>
                <div className="bg-[#03081F] rounded-bl-lg rounded-br-lg">
                    <Image 
                        src="/images/deal/cat5.png"
                        alt="cat5"
                        width={500}
                        height={300}
                    />
                    <div  className="px-4 py-3">
                        <h2 className="font-extrabold text-[#FC8A06]">
                            breakfast
                        </h2>
                        <h3 className="text-[#ffffff]">
                            4 Restaurants
                        </h3>
                    </div>
                </div>
                <div className="bg-[#03081F] rounded-bl-lg rounded-br-lg">
                    <Image 
                        src="/images/deal/cat6.png"
                        alt="cat6"
                        width={500}
                        height={300}
                    />
                    <div  className="px-4 py-3">
                        <h2 className="font-extrabold text-[#FC8A06]">
                            Soups
                        </h2>
                        <h3 className="text-[#ffffff]">
                            32 Restaurants
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between gap-5 my-10">
            <div className="bg-[#FC8A06] rounded-b-xl">
                <Image
                    src="/images/deal/res1.png"
                    alt="res1"
                    width={500}
                    height={300}
                />
                <h3 className="py-3 px-6 text-[#ffffff] font-bold">
                    McDonald’s London 
                </h3>
            </div>
            <div className="bg-[#FC8A06] rounded-b-xl">
                <Image
                    src="/images/deal/res2.png"
                    alt="res2"
                    width={500}
                    height={300}
                />
                <h3 className="py-3 px-6 text-[#ffffff] font-bold">
                    Papa Johns 
                </h3>
            </div>
            <div className="bg-[#FC8A06] rounded-b-xl">
                <Image
                    src="/images/deal/res3.png"
                    alt="res3"
                    width={500}
                    height={300}
                />
                <h3 className="py-3 px-5 text-[#ffffff] font-bold">
                    KFC Western London
                </h3>
            </div>
            <div className="bg-[#FC8A06] rounded-b-xl">
                <Image
                    src="/images/deal/res4.png"
                    alt="res4"
                    width={500}
                    height={300}
                />
                <h3 className="py-3 px-6 text-[#ffffff] font-bold">
                    Texas Chicken
                 </h3>
            </div>
            <div className="bg-[#FC8A06] rounded-b-xl">
                <Image
                    src="/images/deal/res5.png"
                    alt="res5"
                    width={500}
                    height={300}
                />
                <h3 className="py-3 px-6 text-[#ffffff] font-bold">
                    Burger King 
                </h3>
            </div>
            <div className="bg-[#FC8A06] rounded-b-xl">
                <Image
                    src="/images/deal/res6.png"
                    alt="res6"
                    width={500}
                    height={300}
                />
                <h3 className="py-3 px-6 text-[#ffffff] font-bold">
                    Shaurma 1 
                </h3>
            </div>
        </div>
    </div>
  )
}

export default DealsSection