import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {

    constructor(props){
        super(props)
        this.state={
            message:""
        }
    }
    async componentDidMount(){
        // REST Archictuctre 
        //sapConfigurations => Module
        //abapConfigurations => Sub Module
        //save => Method name
        //POST
        // Axios.post("/api/q/rest?api=sapConfigurations@abapConfigurations@save", {data: {}})
        // GET
        // Axios.get("/api/q/rest?api=sapConfigurations@abapConfigurations@save")
        // GET with Parameters
        // Axios.get("/api/q/rest?api=sapConfigurations@abapConfigurations@save&&id=1")
        let response=await Axios.get("/api/q/rest?api=Module@subModule@hello");
        this.setState({"message":response.data.response.message}) 
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                            <div className="card-body">{this.state.message}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<Example />, document.getElementById('content'));
}
