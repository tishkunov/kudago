import React, {Component} from 'react';

export class ErrorBoundary extends Component {

     state = {
        hasError: false
    };


    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });

        console.error(info);
    }


    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Opps, something went wrong...
                        <hr/><strong>PLEASE RELOAD PAGE</strong>
                    </h2>
                </div>
            );
        }

        return this.props.children;
    }

}