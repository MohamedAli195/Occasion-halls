import { Card } from '@material-tailwind/react'
import React from 'react'
import image1 from './../../public/Images/1.jpg'
import image2 from './../../public/Images/2.jpg'
import image3 from './../../public/Images/3.jpg'
function HallsInfo() {
    return (
        <>
        <div className='mt-10'>
        <h1 className='text-4xl font-extrabold dark:text-white text-center bg-gray-50 p-4 rounded-md mb-8'>Your Wedding Or Special Event Process Begins Here</h1>
            <div className="grid grid-cols-3 gap-4">

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-72" src={image1} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Design & Detail</div>
                        <p className="text-gray-700 text-base">We begin the process by building a trusting relationship with you and your partner. we can coordinate ceremonies, cocktail hours, receptions, and all other wedding-related events. We offer full-service, partial planning, and 90-day coordination to suit couples with all needs, preferences, and budgets.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Design</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Details</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Planning</span>
                    </div>
                </div>

            
            

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-72" src={image2} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Consultation</div>
                        <p className="text-gray-700 text-base">We committed to making wedding planning as stress-free and fun as possible while still maintaining a high level of organization and attention to detail.  Our commitment is to deliver the most memorable event as we help you plan everything from start to finish, design every detail.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Consultation</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Organization</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Design</span>
                    </div>
                </div>

            
            

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-72" src={image3}  alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Coordination</div>
                        <p className="text-gray-700 text-base">Your Venue Coordinator is responsible for organizing the vision you see for your Special Day. Collaborating with all your vendors, creating layouts, and helping you walk down the aisle are some of the important duties she is tasked with. Her top priority is making your Big Day a day to remember.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coordination</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Responsible</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vendors</span>
                    </div>
                </div>

                </div>
        </div>
        


        </>
    )
}

export default HallsInfo