import React from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
import SkillBox from './SkillBox';
import { useInView } from 'react-intersection-observer';



function Skills(props) {


    const { ref: skillRef, inView: isSkillVisible } = useInView();


    console.log("Skills is", isSkillVisible)

    return (
        <div>
            <GradientPurple />
            <GradientBlue />
            <div>
                <section ref={skillRef}>
                    <div className='skillContainer'>
                        <div>
                            <div className='skillHeader'>
                                <h1 className='skillName'>SKILLS</h1>
                                <h1 className='skillInfo'>What I can bring to the team and the skillset I have</h1>
                            </div>
                        </div>
                        <div className='skillBox'>
                            <SkillBox skillImage="#" skillName="Python" />
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skills;