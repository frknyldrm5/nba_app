import React from 'react';

function RegistrationForm(props) {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form style={{ width: '300px' }}>
                <h3 className="mb-3">Register</h3>
                <div className="mb-3">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right mt-3">
                    Already registered? <a href="/sign-in">Sign in</a>
                </p>
            </form>
        </div>
    );
}

export default RegistrationForm;
