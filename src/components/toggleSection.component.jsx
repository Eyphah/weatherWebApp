import {useState} from "react";
import '../assets/style/toggleSection.style.css'

const ToggleSection = ( { children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button className="toggle-section-button" onClick={() => setVisible(!visible)}>{visible ? "Cacher" : "Afficher"}</button>
            <div className="toggle-section">
                {visible ? children : null}
            </div>
        </div>
    )
}

export default ToggleSection;