import React, { Component } from 'react';
import HigherOrderFormComponent from '../HigherOrderComponents/FormComponent';

class FormOne extends Component{

    render(){
        const { username, password, usernameError, passwordError, handleInputChange, handleFormSubmit, viewResult } = this.props;
        return(
            <div>
                <div className="app-main-header-name">{this.props.formName}</div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        className="form-input-field"
                        value={username}
                        onChange={handleInputChange}
                    />
                    {
                        usernameError ? <div className="form-input-error">{usernameError}</div> : null
                    }
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        className="form-input-field"
                        value={password}
                        onChange={handleInputChange}
                    />
                    {
                        passwordError ? <div className="form-input-error">{passwordError}</div> : null
                    }
                    <button className="form-input-button">Submit form one</button>
                    {
                        viewResult ? 
                        <div className="form-result">
                            <h5>Username : {username}</h5>
                            <h5>password : {password} </h5>
                        </div> : null
                    }
                </form>
            </div>
        )
    }

}

export default HigherOrderFormComponent(FormOne)