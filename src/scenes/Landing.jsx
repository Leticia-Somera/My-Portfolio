import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImage3 from "../assets/profileImage3.png";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const handleDownload = () => {
        const pdfUrl = '/RESUME_LETICIA.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'RESUME_LETICIA.pdf'; // Nombre del archivo que se descargará
        link.click();
      };

    return (
        <section 
            id="home" 
            className="md:flex md:justify-between md:items-center gap-16 py-10"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2  basis-3/6 z-10 mt-20 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative flex justify-center z-0 ml-20 before:absolute before:-top-10 before:left-5 before:rounded-t-[400px] before:w-full before:max-w-[300px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img 
                            alt="profile"
                            src={profileImage3}
                            className="hover:filter hover:saturate-150 transition duration-500 z-10 w-4/6 max-w-[400px] md:max-w-[600px] "
                        />
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <img 
                            alt="profile"
                            src={profileImage3}
                            className="hover:filter hover:saturate-150 transition duration-500 z-10 w-4/6 max-w-[400px] md:max-w-[600px] "
                        />
                    </div>
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-3/6 mt-16 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ duration:0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50 },
                        visible: { opacity:1, x:0 }
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Leticia {""}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[80px] before:z-[-1]">
                            Somera
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    I am a physicist and materials engineer who joined to the IT world as a Front End Developer. I look for opportunities that represent new challenges for me and that promote training and professional growth. I am committed to my work and enjoy participating in multidisciplinary teams.
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.2, duration:0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50 },
                        visible: { opacity:1, x:0 }
                    }}
                >
                    <AnchorLink 
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-0"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <button 
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={handleDownload}
                    >
                        <div
                         className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"
                        >
                           My Resume
                        </div>
                    </button>
                </motion.div>

                <motion-div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ delay:0.4, duration:0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50 },
                        visible: { opacity:1, x:0 }
                    }}
                >
                    <SocialMediaIcons />
                </motion-div>
            </div>
        
        </section>
    )
}

export default Landing;