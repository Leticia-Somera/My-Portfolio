import linkedin from "../assets/linkedin.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import instagram from "../assets/instagram.png";
import { 
    FaGithub
} from 'react-icons/fa';

const SocialMediaIcons = () => { 
    return (
        <div className="flex justify-center md:justify-start items-center my-10 gap-7">
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
        </div>
    )
}

export default SocialMediaIcons;