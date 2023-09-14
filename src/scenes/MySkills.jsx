import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImage from "../assets/skillsImage.png";
import { 
    FaJsSquare, 
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaJava,
    FaFigma
} from 'react-icons/fa';

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                
                <div className="mb-16 md:mb-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-8 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img 
                                alt="skills"
                                src={skillsImage}
                                style={{ height: "16rem" }}
                            />
                        </div>
                    ) : (
                            <img 
                                alt="skills"
                                src={skillsImage}
                                className="z-10"
                            />
                    )}
                </div>

                <motion.div
                    className="md:w-1/3 mr-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ duration:0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50 },
                        visible: { opacity:1, x:0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5  md:flex md:justify-end">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <div className="md:flex md:justify-end">
                        <LineGradient width="w-1/3 "/>
                    </div>
                    <p className="mt-10 mb-7">
                    These are some of the skills I have learned in my career as a developer, but there is still more to come!
                    </p>
                </motion.div>
            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between md:mt-8 ">
                <motion.div
                    className="flex justify-center mt-8 mb-4 md:my-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.2, duration:0.3 }}
                    variants={{
                        hidden: { opacity:0, y:50 },
                        visible: { opacity:1, y:0 }
                    }}
                >
                    <FaJsSquare size="8rem" color="#f0d24f" />
                </motion.div>

                <motion.div
                    className="flex justify-center mt-8 mb-4 md:my-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.3, duration:0.4 }}
                    variants={{
                        hidden: { opacity:0, y:50 },
                        visible: { opacity:1, y:0 }
                    }}
                >
                    <FaCss3Alt size="8rem" color="#264de4" />
                </motion.div>

                <motion.div
                    className="flex justify-center my-4 sm:mt-8 sm:mb-4 md:my-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.4, duration:0.5 }}
                    variants={{
                        hidden: { opacity:0, y:50 },
                        visible: { opacity:1, y:0 }
                    }}
                >
                    <FaReact size="8rem" color="#00d9ff" />
                </motion.div>

                <motion.div
                    className="flex justify-center my-4 md:my-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.5, duration:0.6 }}
                    variants={{
                        hidden: { opacity:0, y:50 },
                        visible: { opacity:1, y:0 }
                    }}
                >
                    <FaFigma size="8rem" color="#fff" />
                </motion.div>

                <motion.div
                    className="flex justify-center my-4 md:my-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.6, duration:0.7 }}
                    variants={{
                        hidden: { opacity:0, y:50 },
                        visible: { opacity:1, y:0 }
                    }}
                >
                    <FaBootstrap size="8rem" color="#8012fa" />
                </motion.div>

                <motion.div
                    className="flex justify-center my-4 md:my-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.7, duration:0.8 }}
                    variants={{
                        hidden: { opacity:0, y:50 },
                        visible: { opacity:1, y:0 }
                    }}
                >
                    <FaJava size="8rem" color="#0d8ac7" />
                </motion.div>
                
            </div>

        </section>
    )
}

export default MySkills;