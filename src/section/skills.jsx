import './style/skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills() {

    const languages = [
        "C",
        "C++",
        "Java for mobile, desktop, and server side applications",
        "Swift for iOS applications",
        "Html and CSS",
        "Javascript for frontend and backend",
        "PHP",
        "Python"
    ];

    const libAndFrameworks = [
        "React",
        "Bootstrap"
    ];

    const tools = [
        "Git",
        "GitHub",
        "Jetbrains' tools"
    ]

    return (
        <div className="w-100 vh-75 skills">
            <div className="w-75 p-3 mx-auto skillContent">
                <h1 className="sectionTitle" >Skills</h1>
                <Container>
                    <Row>
                        <Col sm={5}>
                            <h1 className="columnTitle">Languages</h1>

                            <ul className="skillList">
                                {
                                    languages.map(item =>(
                                        <li className="listItem" key={item}><FontAwesomeIcon className="arrow" icon={faCaretRight} /><span>{item}</span></li>
                                    ))
                                }
                            </ul>
                        </Col>

                        <Col sm={3}>
                            <h1 className="columnTitle">Libraries and Frameworks</h1>

                            <ul className="skillList">
                                {
                                    libAndFrameworks.map(item =>(
                                        <li className="listItem" key={item}><FontAwesomeIcon className="arrow" icon={faCaretRight} />{item}</li>
                                    ))
                                }
                            </ul>
                        </Col>

                        <Col sm={3}>
                            <h1 className="columnTitle">Tools</h1>

                            <ul className="skillList">
                                {
                                    tools.map(item =>(
                                        <li className="listItem" key={item}><FontAwesomeIcon className="arrow" icon={faCaretRight} />{item}</li>
                                    ))
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}