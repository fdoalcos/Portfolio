import React from 'react';
import GradientBlue from './GradientBlue';
import GradientPurple from './GradientPurple';
import SkillBox from './SkillBox';

function Skills(props) {
    return (
        <div>
            <GradientPurple />
            <GradientBlue />
            <div>
                <section>
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