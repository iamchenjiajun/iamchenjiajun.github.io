import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div className='outer__container' id='skills'>
            <section className='container skills__container'>
                <h2>my skills</h2>
                
                <div className="skills__set">
                    <section className='skills__section'>
                        <h4 className='skills__title'>Embedded Systems</h4>
                        <ul>
                            <li>Development with <em>RTOS</em></li>
                            <li><em>FPGA</em> design with <em>Verilog</em></li>
                            <li><em>Hardware Accelerator</em> design</li>
                        </ul>
                    </section>

                    <section className='skills__section'>
                        <h4 className='skills__title'>Web Development</h4>
                        <ul>
                            <li>Front-end development with <em>HTML/CSS/JS</em></li>
                            <li>Front-end frameworks: <em>React</em></li>
                            <li>Back-end development with <em>Django</em></li>
                            <li><em>nodeJS</em> development with <em>ExpressJS</em> and <em>sockets.io</em></li>
                        </ul>
                    </section>

                    <section className='skills__section'>
                        <h4 className='skills__title'>Software</h4>
                        <ul>
                            <li><em>C/C++, Java and Python</em> programming</li>
                        </ul>
                    </section>

                    <section className='skills__section'>
                        <h4 className='skills__title'>Others</h4>
                        <ul>
                            <li>3D modelling and printing with Fusion 360</li>
                            <li>PCB Design in KiCAD</li>
                            <li>Hardware and software prototyping</li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Skills