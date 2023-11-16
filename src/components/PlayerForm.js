import {Button, Form} from "react-bootstrap";


function PlayerForm({handleChange, handleSubmit,player}) {
    return (
        <div className="container">
            <h1 className="text-center text-warning">{player? "Edit Player":"Create a Player"}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label > First Name:</Form.Label>
                    <Form.Control
                        name="firstname"
                        required
                        className="form-control"
                        type="text"
                        placeholder ={player? null:"First Name"}
                        value={player? player.firstname:undefined}
                        onChange={handleChange}
                    />
                </Form.Group>


                <Form className="mb-3">Name
                    <Form.Label > Last :</Form.Label>
                    <Form.Control
                        required
                        name="lastname"
                        className="form-control"
                        type="text"
                        placeholder ={player? null:"Last Name"}
                        value={player? player.lastname:undefined}
                        onChange={handleChange}
                    />
                </Form>

                <Form className="mb-3">
                    <Form.Label > Affiliation:</Form.Label>
                    <Form.Control
                        required
                        name="affiliation"
                        className="form-control"
                        type="text"
                        placeholder ={player? null:"Affiliation"}
                        value={player? player.affiliation:undefined}
                        onChange={handleChange}
                    />
                </Form>
                <div className="text-center">
                    <Button variant="outline-primary" type="submit"> Submit Player</Button>
                </div>
            </Form>
        </div>
    );
}

export default PlayerForm;