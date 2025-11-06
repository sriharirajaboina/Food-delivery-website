import React from 'react'
import Image from 'next/image'

const count=[
  {number:"546+", name:"Registered Riders"},
  {number:"789,900+",name:"Orders Delivered"},
  {number:"690+",name:"Restaurants Partnered"},
  {number:"17,457+",name:"Food items"}
]

const About = () => {
  return (
    <div className="md:px-20 py-5">
      <div className="bg-[#D9D9D9] md:py-20 md:px-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-3xl">
              Know more about us!
            </h2>
          </div>
          <div className="flex items-center justify-between gap-5 ">
            <h4 className="md:py-4 md:px-6 font-extrabold border border-amber-400 rounded-full">
              Frequent Questions
            </h4>
            <h4>Who we are?</h4>
            <h4>partner Program</h4>
            <h4>Help & Support</h4>
          </div>
        </div>
        <div className="md:py-15 text-[#ffffff]">
          <div className="bg-[#03081F] flex items-center">
            <div className="font-bold mx-5 my-10 text-center flex flex-col items-center">
              <h3 className="py-4 px-1 text-[#000000] rounded-full bg-[#FC8A06]">
                How does Order.UK work?
              </h3>
              <h4 className="mt-6">
                What payment methods are accepted?
              </h4>
              <h4 className="mt-6">
                Can I track my order in real-time?
              </h4>
              <h4 className="mt-6">
                Are there any special discount or promotions available
              </h4>
              <h4 className="mt-6">
                Is order.IK available in my area?
              </h4>
            </div>
            <div className="py-5 border-l mx-10">
              <div className="flex items-center justify-between gap-9 ">
                <div className="px-5 py-5 ml-5 bg-[#D9D9D9] rounded-xl flex flex-col items-center ">
                  <h3 className="text-center text-[#000000] font-bold text-lg">
                    Place an Order
                  </h3>
                  <Image 
                    src="/images/about/order1.png"
                    alt="order1"
                    width={500}
                    height={300}
                    className="w-30 h-30 my-5"
                  />
                  <p className="text-[#000000] font-bold text-center">
                    Place order through our website or Mobile app
                  </p>
                </div>
                <div className="px-5 py-5 bg-[#D9D9D9] rounded-xl flex flex-col items-center ">
                  <h3 className="text-center text-[#000000] font-bold">
                    Track Progress
                  </h3>
                  <Image 
                    src="/images/about/order2.png"
                    alt="order2"
                    width={500}
                    height={300}
                    className="w-30 h-30 my-5"
                  />
                  <p className="text-[#000000] font-bold text-center">
                  Your can track your order status with delivery time
                  </p>
                </div>
                <div  className="px-5 py-5 bg-[#D9D9D9] rounded-xl flex flex-col items-center ">
                  <h3 className="text-center text-[#000000] font-bold">
                    Get your Order!
                  </h3>
                  <Image 
                    src="/images/about/order3.png"
                    alt="order3"
                    width={500}
                    height={300}
                    className="w-30 h-30 my-5"
                  />
                  <p className="text-[#000000] font-bold text-center">
                    Receive your order at a lighting fast speed!
                  </p>
                </div>
              </div>
              <p className="text-center p-5 mx-25">
                Order.UK simplifies the food ordering process. 
                Browse through our diverse menu,select your favorite dishes, and proceed to checkout. 
                Your delicious meal will be on its way to your doorstep in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#FC8A06] py-5 px-20
      mt-15 text-[#ffffff] rounded-lg ">
        {
          count.map((item)=>(
              <div key={item.name} className="border-r-2 px-8">
                <h3 className="font-light text-6xl ">{item.number}</h3>
                <h2 className="font-bold text-2xl text-center">{item.name}</h2>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default About