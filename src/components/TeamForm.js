import {Button, Form} from "react-bootstrap";


function TeamForm({handleChange, handleSubmit,team}) {
    return (
        <div className="container">
            <h1 className="text-center text-warning">{team? "Edit Post":"Create a Post"}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label > Image:</Form.Label>
                    <Form.Control
                        name="logo"
                        required
                        className="form-control"
                        type="text"
                        placeholder ={team? null:"Team Logo Url"}
                        value={team? team.logo:undefined}
                        onChange={handleChange}
                    />
                </Form.Group>


                <Form className="mb-3">
                    <Form.Label > Title:</Form.Label>
                    <Form.Control
                        required
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder ={team? null:"Team Name"}
                        value={team? team.name:undefined}
                        onChange={handleChange}
                    />
                </Form>

                <Form className="mb-3">
                    <Form.Label > Post:</Form.Label>
                    <Form.Control
                        as="textarea"
                        required
                        name="city"
                        rows="7"
                        placeholder ={team? null:"City"}
                        value={team? team.city:undefined}
                        onChange={handleChange}
                    />
                </Form>
                <div className="text-center">
                    <Button variant="outline-primary" type="submit"> Submit Team</Button>
                </div>
            </Form>
        </div>
    );
}

export default TeamForm;