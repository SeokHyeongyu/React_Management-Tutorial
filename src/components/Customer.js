import React from "react";

class Customer extends React.Component {
    render () {
        return (
            <div>
                <CustomerProfile
                    id={this.props.id}
                    name={this.props.name}
                    image={this.props.image}
                />
                <CustomerInfo job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.image} alt="progile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render () {
        return (
            <div>
               <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer;