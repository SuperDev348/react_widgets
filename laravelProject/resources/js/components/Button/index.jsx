import React, {Component} from 'react';
import './index.css'

export default class Button extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        let defaultClass = ["btn", "font-weight-bold", "customButton"];
        if (this.props.className) 
            defaultClass = defaultClass.concat(this.props.className);
        
        if (this.props.block) 
            defaultClass.push('block')

        if (this.props.visible==undefined || this.props.visible)
            defaultClass.push("visible")
        else 
            defaultClass.push("notVisible")

        return (
            <button
                style={{
                width: this.props.width
                    ? this.props.width
                    : "auto"
            }}
                className={defaultClass.join(" ")}
                onClick={this.props.onClick}>{this.props.children}</button>
        )
    }

}