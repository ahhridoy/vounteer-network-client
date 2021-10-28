import React from "react";
import { Col, Image } from "react-bootstrap";

const Content = (props) => {
    const {_id, name, img } = props.content;

    const handleDeleteUser = (id) => {
        const proceed = window.confirm("Are You Sure to Delete User?");
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingUsers = users.filter(
                            (user) => user._id !== id
                        );
                        setUsers(remainingUsers);
                    }
                });
        }
    };
    return (
        <Col lg={3}>
            <Image src={img} className="w-50" />
            <h3>{name}</h3>
            <button onClick={() => handleDeleteUser(_id)}>X</button>
        </Col>
    );
};

export default Content;
