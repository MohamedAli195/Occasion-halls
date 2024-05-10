import React from 'react'
import image1 from './../../../public/Images/1.jpg'
function AboutUs() {
  return (
    <>
	<h2 className='text-5xl mb-6 text-center bg-gray-100 p-4 rounded-md'>Occasion halls</h2>
    <div className="container mx-auto px-4">
				

					
				
				<div className="grid grid-cols-2">
					<div className="max-w-sm rounded overflow-hidden shadow-lg">
						<p> We begin the process by building a trusting relationship with you and your partner. we can coordinate ceremonies, cocktail hours, receptions, and all other wedding-related events. We offer full-service, partial planning, and 90-day coordination to suit couples with all needs, preferences, and budgets.
						</p>
						<ul className="ul-info">
							<li>ُEmail:administrator@Occasionhalls.com</li>
							<li>address : 10 main street elMenia</li>
							<li>test</li>
							<li>01120134830 | 01017866262 | 01553599962</li>
						</ul>
						<ul className="ul-icons">
							<li>
								<a href="#">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
						</ul>
					</div>
					<div className="max-w-sm rounded overflow-hidden shadow-lg">
						<img src={image1}/>
					</div>
				</div>
			</div>
			
    </>
  )
}

export default AboutUs