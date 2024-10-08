import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import HeroImg from '../assets/heroImg4.png';
import GitHubCalendar from 'react-github-calendar';











const Home = () => {

    const { theme } = useSelector((state) => state.themeToggle);


    return (
        <>

            <div className="duration-1000 transition-all min-h-screen select-none grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1">


                {/* left content  */}
                <div className=" flex justify-center md:items-start md:mt-20 lg:mt-20 items-center">

                    <h1 className={`font-semibold md:text-4xl mt-10 ml-5 text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-800 '}`}> Hi There! <span className=''>👋</span>

                        <div>
                            I'm <span className='my-3 font-extralight text-4xltext-lg bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-yellow-400 inline-block text-transparent'> RAKESH KUMAR PARIDA.</span>
                        </div>

                        <TypeWriterEffect
                            textStyle={{
                                color: 'rgb(255, 191, 0)',
                                fontWeight: 500,
                                fontSize: '0.7em',
                            }}
                            startDelay={0}
                            cursorColor="rgb(255, 191, 0)"

                            multiText={[
                                'Fullstack Stack Developer',
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={100}
                            multiTextLoop
                        />

                    </h1>
                </div>


                {/* right  */}
                <div className="">
                    <div className="flex w-full justify-center">
                        <img src={HeroImg} className='md:w-[500px] w-full' alt="heroImg" />
                    </div>
                </div>
            </div>

            <div className="select-none w-[75%] m-auto flex justify-center my-5">
                <h1 className='lg:text-4xl text-xl md:text-4xl font-extralight'>Let me <span className=' bg-clip-text bg-gradient-to-r from-cyan-600 via-yellow-500 to-indigo-400 inline-block text-transparent font-semibold'> introduce</span> myself</h1>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            />

            <p className='select-none w-[90%] leading-7  md:w-[75%]  m-auto my-5 text-justify'>
                I fell in love with programming and I have at least learnt something,I think..🤷‍♂️
                I am fluent in classics like Java & Javascript
                My field of Interest's are building new Web Technologies and Products.
                Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js.
            </p>
        </>
    )
}

export default Home