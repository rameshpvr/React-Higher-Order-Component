import React, { Component } from 'react';

const HigherOrderComponent = OldComponent => {

    class FormNewComponent extends Component{

        constructor(props){
            super(props);
            this.state={
                username : '', email : '', password : '',
                usernameError:'', emailError : '', passwordError : '',
                loginForm : ['username','password'],
                signupForm : ['username', 'email', 'password'],
                viewResult : false
            }
        }

        handleInputChange = (e) =>{
            this.setState({ [e.target.name] : e.target.value })
            if( [e.target.name+'Error'] !== '' ){
                this.setState({ [e.target.name+'Error'] : '' })
            }
        }

        handleFormSubmit = (e) =>{
            e.preventDefault();
            let validation = this.formValidation()
            if(validation){
                this.setState({ viewResult : true })
            }
        }

        formValidation = () =>{
            var result = true;
            if(this.props.formName === 'Form One'){
                this.state.loginForm.map(( filedName ) =>{
                    if(this.state[filedName] === ''){
                        this.setState({ [filedName+'Error'] : `Please Enter ${filedName}` })
                        result = false;
                    }
                })
            }
            if(this.props.formName === 'Form Two'){
                this.state.signupForm.map(( filedName ) => {
                    if(this.state[filedName] === ''){
                        this.setState({ [filedName+'Error'] : `Please Enter ${filedName}` })
                        result = false;
                    }
                })
            }
            return result
        }

        render(){
            return(
                <OldComponent
                    username = { this.state.username }
                    email = { this.state.email }
                    password = { this.state.password }
                    usernameError = { this.state.usernameError }
                    emailError = { this.state.emailError }
                    passwordError = { this.state.passwordError }
                    handleInputChange = { this.handleInputChange }
                    handleFormSubmit = { this.handleFormSubmit }
                    viewResult = { this.state.viewResult }
                    formName = { this.props.formName }
                />
            )

        }

    }

    return FormNewComponent
    
}

export default HigherOrderComponent
