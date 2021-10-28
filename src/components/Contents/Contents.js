import React, { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import Content from "../Content/Content";

const Contents = () => {
    const [contents, setContents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/contents")
            .then((res) => res.json())
            .then((data) => setContents(data));
    }, []);
    return (
        <Container>
            <Row>
                {contents.map((content) => (
                    <Content key={content.id} content={content}></Content>
                ))}
            </Row>
        </Container>
    );
};

export default Contents;
