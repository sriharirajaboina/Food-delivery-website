import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="">
        <div className="md:px-20 py-10 bg-[#D9D9D9] mt-10 flex items-start justify-between">
            <div className="md:py-5">
                <Image 
                    src="/images/footer/footer-logo.png"
                    alt="footer-logo"
                    width={500}
                    height={300}
                    className="w-50 h-13"
                />
                <Image 
                    src="/images/footer/store.png"
                    alt="store"
                    width={300}
                    height={300}
                    className="w-60 h-13 mt-5"
                />
                <p className="mt-5 text-xs font-semibold">
                    Company # 490039-445, Registered with<br/> House of companies.
                </p>
            </div>
            <div className="md:py-5">
                <h3 className="font-bold text-[#03081F]">
                    Get Exclusive Deals in your inbox
                </h3>
                <label className="py-3 pl-5 bg-[#ffffff] rounded-full">
                    <input type="text" placeholder="youremail@gmail.com"
                    className="mt-10 focus:outline-none"/>
                    <button className="bg-[#FC8A06] font-bold text-[#ffffff] py-3 px-10 rounded-full">
                        Subscribe
                    </button>
                </label>
                <p className="mt-1 text-[#03081F]">
                    We want spam, read our 
                    <span className="border-b-2"> email policy</span>
                </p>
                <div className="flex mt-4">
                    <Image
                        src="/images/footer/facebook.png"
                        alt="facebook"
                        width={500}
                        height={300}
                        className="w-10 h-10"
                    />
                    <Image
                        src="/images/footer/insta.png"
                        alt="insta"
                        width={500}
                        height={300}
                        className="w-10 h-10"
                    />
                    <Image
                        src="/images/footer/tiktok.png"
                        alt="tiktok"
                        width={500}
                        height={300}
                        className="w-10 h-10"
                    />
                    <Image
                        src="/images/footer/snap.png"
                        alt="snap"
                        width={500}
                        height={300}
                        className="w-10 h-10"
                    />
                </div>
            </div>
            <div className="mt-4">
                <h3 className="font-bold text-lg">Legal Pages</h3>
                <h4 className="w-fit mt-4 border-b">Terms and conditions</h4>
                <h4 className="mt-1 border-b w-fit">Privacy</h4>
                <h4 className="w-fit mt-1 border-b">Cookies</h4>
                <h4 className="w-fit mt-1 border-b">Modern Slavery Stament</h4>
            </div>
            <div className="mt-4">
                <h3 className="font-bold text-lg">Important Links</h3>
                <h4 className="w-fit mt-4 border-b">Get help</h4>
                <h4 className="w-fit mt-4 border-b">Add your restaurant</h4>
                <h4 className="w-fit mt-4 border-b">Sign up to deliver</h4>
                <h4 className="w-fit mt-4 border-b">Create a bussiness account</h4>
            </div>
        </div>
        <div className="md:px-20 py-10 bg-[#03081F] text-[#ffffff] 
        flex items-center justify-between">
            <div>
                <h3>Order.uk Copyright 2024, All Rights Reserved.</h3>
            </div>
            <div className="flex items-center justify-between gap-10">
                <h4>Privacy Policy</h4>
                <h4>Terms</h4>
                <h4>Pricing</h4>
                <h4>Do not sell or share my personal information</h4>
            </div> 
        </div>
    </footer>
  )
}

export default Footer