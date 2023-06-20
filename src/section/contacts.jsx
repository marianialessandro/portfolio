import React from "react";
import "./style/contact.css";

import { Instagram, Twitter, Linkedin, Envelope} from 'react-bootstrap-icons';

function Contacts() {

    return (
        <div className="w-100 contacts" id="contacts">
            <div className="w-75 p-3 mx-auto text-center contactsContent">
                <h1 className="sectionTitle" style={{textAlign: "center"}} >Contact me</h1>

                <p>If you want to get in touch with me you can send me an email or a message on twitter or instagram, i'll try my best to get back to you.</p>

                <div className="iconContainer">
                    <a href="https://twitter.com/Alessan42045415" className="twitter">
                        <Twitter />
                    </a>

                    <a href="https://www.instagram.com/_alessandromariani.03_/" className="instagram">
                        <Instagram />
                    </a>

                    <a href="https://www.linkedin.com/in/alessandro-mariani-7a53981aa/" className="linkedin">
                        <Linkedin />
                    </a>

                    <a href="mailto:business@marianialessandro.com" className="envelope">
                        <Envelope />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;