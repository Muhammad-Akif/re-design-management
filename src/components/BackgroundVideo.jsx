// import React from 'react'
import videoSource from '../img-ved/video.mp4' 
import TextAnimation from './TextAnimation'
import { Navbar } from '../components/navbar'
import React from 'react';

const BackgroundVideo = () => {
    return (
        <div className="Container" >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="Content">
                <div className="SubContent" >
                    <h1 class="animate__animated animate__heartBeat">WE DESIGN YOUR DREAMS</h1>
                    <p><TextAnimation/></p>
                    <button type="button" className="btn btn-outline-dark animate__animated animate__pulse">Get Started</button>
                    
                </div>
            </div>
			{/* <div class="content">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center">
						<div class="display-t">
							<div class="display-tc animate-box" data-animate-effect="fadeIn">
								<h1>Event Management &amp; Planning</h1>
								<h2>A goal without a plan is just a wish</h2>
								<div class="simply-countdown simply-countdown-one"></div>
								<p><a href="#" class="btn btn-default btn-sm">Save your memories</a></p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
        </div>
    )
}

export default BackgroundVideo;

