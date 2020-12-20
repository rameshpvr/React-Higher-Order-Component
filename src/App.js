import React from 'react';
import './App.css';
import FormOne from './Components/FormOne';
import FormTwo from './Components/FormTwo';

function App() {
  return (
    <div>
      <div className="app-main-header">React Higher Order Component</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <FormOne 
              formName="Form One"
            />
          </div>
          <div className="col-md-5 mx-auto">
            <FormTwo
              formName="Form Two" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
