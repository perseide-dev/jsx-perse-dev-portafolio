//css
import "./ContactIconCollection.css"
//utils
import { IconFigma, IconGitHub, IconInstagram, IconLinkedIN } from "@cu/icons/Icons";

export default function ContactIconCollection() {
    return (
        <div className="ContactIconCollection">
            <a href="https://github.com/perseide-dev" target="_blank" rel="noopener noreferrer">
                <IconGitHub />
            </a>
            <a href="https://www.figma.com/@xv_vas" target="_blank" rel="noopener noreferrer">
                <IconFigma />
            </a>
            {/* <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <IconInstagram/>
                                </a> */}
            <a href="https://www.linkedin.com/in/perseide-dev" target="_blank" rel="noopener noreferrer">
                <IconLinkedIN />
            </a>
        </div>
    )
}