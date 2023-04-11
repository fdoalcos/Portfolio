import React, { useState, useEffect, useRef } from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
import Project from './Project';
import NetWorkingWebAppSVG from '../imagesc/NetworkingWebApp.svg';
import MailServiceWebAppSVG from '../imagesc/MailServiceWebApp.svg';
import OnlineAuctionWebAppSVG from '../imagesc/OnlineAuctionWebApp.svg';
import { useInView } from 'react-intersection-observer';



function Projects(props) {

    

    const NetWorkingWebApp = ["Python", "JavaScript", "Django", "HTML", "CSS", "Bootstrap"]
    const MailServiceWebApp = ["Python", "JavaScript", "Django", "HTML", "CSS", "SCSS", "Bootstrap"]
    const OnlineAuctionWebApp = ["Python", "JavaScript", "Django", "HTML", "CSS", "Bootstrap"]


    const projectRef = useRef();
    const [isVisible, setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add("showElement")
                console.log("I am showing element")
            } 
            // else {
            //     entry.target.classList.remove("showElement") 
            //     console.log("I am not showing element")
            // }
        })
    })

    const elements = projectRef.current.querySelectorAll('.hiddenElement')
        elements.forEach(element => {
            observer.observe(element);
        })
    }, [])


    // const { ref: headerRef, inView: isHeaderVisible } = useInView();
    // const { ref: project1Ref, inView: isProject1Visible } = useInView();
    // const { ref: project2Ref, inView: isProject2Visible } = useInView();
    // const { ref: project3Ref, inView: isProject3Visible } = useInView();


    // console.log("Project Header is ", isHeaderVisible)
    // console.log("Project 1 is ", isProject1Visible)
    // console.log("Project 2 is ", isProject2Visible)
    // console.log("Project 3 is ", isProject3Visible)

    // const projectRef = useRef();
    // const [isVisible, setVisible] = useState();

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         console.log(entry)
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add("showElement")
    //             console.log(entry.target);
    //             console.log("I am showing element")
    //         } else {
    //             entry.target.classList.remove("hiddenElement")
    //         }
    //     })
    // })

    // console.log("This is project")
    // console.log(projectRef.current)

    // const elements = projectRef.current.querySelectorAll('.hiddenElement')
    //     elements.forEach(element => {
    //         observer.observe(element);
    //     })
    // }, [])
    

    return (
        <div>
            <GradientPurple />
            <GradientBlue />
            <div ref={projectRef} className='projectMainContainer' id="projects">
                <div className='hiddenElement'>
                    <h2 className='projectName '>Personal Projects</h2>
                    <h1 className='projectSubName '>I enjoy developing and contrubuting my skills to the team</h1>
                </div>
                <div  className='hiddenElement projectProject '>
                    <Project date={"SEP 2022 - DEC 2022"} 
                        title={"Networking Web App"} 
                        skills={NetWorkingWebApp} 
                        description={"Developed a networking website that acts like Twitter and lets users Post, Follow, Comment, and Like users. This website is perfect for interacting with other users as its main functionality is interacting with people like any other Social Media App."} 
                        link={"https://www.youtube.com/watch?v=dDWxV2W6x48&t=191s"} 
                        image={NetWorkingWebAppSVG} 
                        />
                </div>
                <div className='projectProject '>
                    <Project date={"AUG 2022 - SEP 2022"} 
                        title={"Mail-Service Web App"} 
                        skills={MailServiceWebApp} 
                        description={"Developed a mailing website that acts like Gmail and lets users Send, Receive, and Reply to users. This website is good for messaging other users and its Backend was improvised to make the interaction between users much faster."} 
                        link={"https://www.youtube.com/watch?v=pIvKkZrsGtA&t=142s"} 
                        image={MailServiceWebAppSVG} 
                    />
                </div>
                <div className='projectProject '>
                    <Project date={"JULY 2022 - AUG 2022"} 
                        title={"Online Auction Web App"} 
                        skills={OnlineAuctionWebApp} 
                        description={"Developed an Online Auction website that acts like Ebay and  lets users Create, Review, Bid, Buy and Sell a product online. This website is good for buying or selling an Item online as its implementation has all your needs just like an Online Store."} 
                        link={"https://www.youtube.com/watch?v=V6lJmntPim4&t=1s"} 
                        image={OnlineAuctionWebAppSVG} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;