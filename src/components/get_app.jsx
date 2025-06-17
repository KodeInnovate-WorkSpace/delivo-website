import React from 'react'
import { Link } from 'react-router-dom'

const GetApp = () => {
    return (

        <div className="flex items-center justify-center py-8 px-6 lg:px-0" >
            {/* Card Layout */}
            <div className="flex flex-col md:flex-row items-center lg:gap-16">
                {/* Left Image */}
                <div className="w-full md:w-1/2 hidden lg:block">
                    <img src="app_img.png" alt="App Preview" className="w-[24rem] h-auto object-cover" />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-2">Get the Bakalaa app</h1>
                    <p className="text-lg mb-4">Discover the best food, drinks & grocery in Mumbra</p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-row gap-4">
                        <Link
                            to="https://play.google.com/store/apps/details?id=com.quick_commerce.frontend&pcampaignid=web_share"
                            className="cursor-pointer w-full sm:w-48"
                        >
                            <img
                                src="GetItOnGooglePlay_Badge_Web_color_English.png"
                                alt="Play Store"
                                className="w-full object-contain"
                            />
                        </Link>
                        <Link to="https://apps.apple.com/app/Bakalaa-app-grocery-delivery/id6737229220" className="cursor-pointer w-full sm:w-48">
                            <img
                                src="app_store.webp"
                                alt="App Store"
                                className="w-full object-contain"
                            />
                        </Link>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default GetApp
