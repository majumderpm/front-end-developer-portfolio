import React from 'react';
import './knowledge.css';
import idea from '../../../../assets/images/skill/idea2.png';
import html from '../../../../assets/images/skill/html.png';
import css from '../../../../assets/images/skill/css.png';
import js from '../../../../assets/images/skill/javascript2.png';
import react from '../../../../assets/images/skill/atom.png';
import bootstrap from '../../../../assets/images/skill/bootstrap.svg';
import taiwiand from '../../../../assets/images/skill/taiwiand.png';
import scss from '../../../../assets/images/skill/sass.png';
import Skills from './Skills';

const Knowledge = () => {

    const skillsData = [
        {
            id: 1,
            img: html,
            title: 80,
            describe: "HTML"
        },
        {
            id: 2,
            img: css,
            title: 80,
            describe: "CSS"
        },
        {
            id: 3,
            img: js,
            title: 50,
            describe: "JavaScript"
        },
        {
            id: 4,
            img: bootstrap,
            title: 80,
            describe: "Bootstrap 4 / 5"
        },
        {
            id: 5,
            img: react,
            title: 50,
            describe: "React.js"
        },
        {
            id: 6,
            img: taiwiand,
            title: 50,
            describe: "Tailwind Css"
        },
        {
            id: 7,
            img: scss,
            title: 70,
            describe: "SCSS"
        },
    ]


    return (
        <>
            <section className='skills'>
                <div className='container'>
                    <div className='idea'>
                        <div className='ideaSkill'>
                            {/* <img className='' src={idea} alt='' /> */}


                            <div className='skillKnow'>
                                <div className='row justify-content-center'>
                                    <div className='col-12'>
                                        <div className='skillLists'>
                                            <div className='skill_intro'>
                                                {skillsData?.map((skill) => (<div className='sorting_item'>
                                                    <Skills
                                                        key={skill.id}
                                                        skill={skill}

                                                    ></Skills>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Knowledge;