import React, { Component } from 'react';
import HigherOrderFormComponent from '../HigherOrderComponents/FormComponent';


class FormTwo extends Component{

    render(){
        const { username, email, password, usernameError, emailError, passwordError, handleInputChange, handleFormSubmit,
        viewResult } = this.props;
        return(
            <div>
                <div className="app-main-header-name">{this.props.formName}</div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="username"
                        name="username"
                        placeholder="Enter username"
                        className="form-input-field"
                        value={username}
                        onChange={handleInputChange}
                    />
                    {
                        usernameError ? <div className="form-input-error">{usernameError}</div> : null
                    }
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        className="form-input-field"
                        value={email}
                        onChange={handleInputChange}
                    />
                    {
                        emailError ? <div className="form-input-error">{emailError}</div> : null
                    }
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-input-field"
                        value={password}
                        onChange={handleInputChange}
                    />
                    {
                        passwordError ? <div className="form-input-error">{passwordError}</div> : null
                    }
                    <button className="form-input-button">Submit form two</button>
                    {
                        viewResult ? 
                        <div className="form-result">
                            <h5>Username : {username}</h5>
                            <h5>Email : {email} </h5>
                            <h5>Password : {password}</h5>
                        </div> : null
                    }
                </form>
            </div>
        )
    }
}

export default HigherOrderFormComponent(FormTwo)