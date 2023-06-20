import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./style/about.css";

export default function About(){
    return (
        <div className="w-100 vh-75 about" id="about">
            <div className="w-75 p-3 mx-auto aboutContent">

                <h1 className="sectionTitle mb-4" >About me</h1>
                <Container>
                    <Row>
                        <Col sm={6} className="justify-content-lg-start">
                            <div className="descriptionParagraph">
                                <p className="description first">My name is Alessandro Mariani, I am a first year student of the University of Pisa in the IT department.</p>
                                <p className="description middle">I like creating tools and scripts of any kind to automate tedious and repetitive tasks. Lately I have been interested in the development of static and dynamic interfaces and web pages.</p>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <img src="https://marianialessandro.com/profilepicture/alessandromariani" id="foto" alt="profile"></img>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}