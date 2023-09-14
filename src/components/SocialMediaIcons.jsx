import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import { 
    FaGithub,
    FaWhatsapp
} from 'react-icons/fa';

const SocialMediaIcons = () => { 
    return (
        <div className="flex justify-center md:justify-start items-center my-7 gap-7">
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/leticia-somera/"
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    alt="linkedin-link"
                    src={linkedin}
                    className="h-8"
                />
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/Leticia-Somera"
                target="_blank"
                rel="noreferrer"
            >
               <FaGithub size="2rem"  />
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/leticia__somera/?hl=es-la"
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    alt="instagram-link"
                    src={instagram}
                    className="h-8"
                />
            </a>
            <a 
                className="hover:opacity-50 transition duration-500"
                href="https://wa.me/+527225572870"
                target="_blank"
                rel="noreferrer"
            >
                 <FaWhatsapp size="2.3rem"  />
            </a>
        </div>
    )
}

export default SocialMediaIcons;