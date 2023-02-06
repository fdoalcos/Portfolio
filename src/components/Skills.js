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
                        <div className='skillHeader'>
                            <h1>SKILLS</h1>
                            <h1>What I can bring to the team and the skillset I have</h1>
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