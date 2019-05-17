import React, {Component, Fragment} from 'react'

class MyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <Fragment>
                <p>Hello {this.state.name}</p>
                <input type='text' value={this.state.name} onChange={this.onChange} />
            </Fragment>
        )
    }
}

export default MyComponent