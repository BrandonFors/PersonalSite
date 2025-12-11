import React, { useState } from 'react'
function About(){
    return(
        <div className='flex flex-1 flex-col gap-6'>
            <h2 className='text-4xl font-bold'>About</h2>
            <p className='text-xl'>
                I am currently a sophomore at the University of Notre Dame studying Computer Engineering. 
                I'm interested in exploring my interests in embedded systems, low level programming, IoT devices, and hardware design in and outside of the classroom.
                I also have an interest in computer vision.
            </p>
            <p className='text-xl'>
                On my own time, I can often be found exploring a new technical topic or doing work for a club I'm involved in.
                I'm most excited about my involvement in
                <span className='text-blue hover:text-orange'><a href = "https://ndirishsat.com/" target="_blank"> IrishSAT </a></span>
                where I am on the club's high altitude balloon team. 
                Here, I am currently exploring embedded systems concepts like microcontrollers, RTOS, communication protocols, sensor integration, and radio communcation. 
                I am also involved in 
                <span className='text-blue hover:text-orange'><a href = "https://sites.nd.edu/cs4good/" target="_blank"> CS4Good </a></span>
                where I am leading a team in developing a React/Flask/MongoDB application used to introduce basic statistics concepts to 5th graders.
                I also do undergraduate research in Notre Dame's SaNDwich Lab which is a Computer Science lab focused on AI applications in Human Computer Interaction. 
                Here, I am gaining experience learning about and implementing deep learning in a variety of areas. 
            </p>
            <p className='text-xl'>
                When I'm not on my computer or doing homework I love to play card/board games and watch Notre Dame football.
                I also skateboard and enjoy quality coffee. 
                Throughout my high school years as a Boy Scout, I also earned the rank of Eagle Scout.
            </p>
        </div>
        
    )
}
export default About