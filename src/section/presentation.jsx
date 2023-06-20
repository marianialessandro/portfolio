import ReactTypingEffect from 'react-typing-effect';

import "./style/presentation.css";

export default function Presentation() {
    return (
        <div className="w-100 vh-100 presentation">
            <div className="p-3 text-start presentationContent">
                <p>Hi, my name is</p>
                <ReactTypingEffect
                    text={"Alessandro Mariani"}
                    cursorClassName={"writerCursor"}

                    className="writer"
                />
                <p id="subtitle">I build things</p>

            </div>
        </div>
    );
}