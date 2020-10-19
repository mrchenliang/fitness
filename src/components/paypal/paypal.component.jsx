import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
// import Car from '../../assets/running-background.jpeg';
import Spinner from "../spinner/spinner.component";

 const CLIENT = {
   sandbox:
     "AXQFUm8tx_oPx-bNTHwyukKq8xLCJZCddDuMb3kW9hx_F5LNOEy_b2weiCjzG0_cUcVS5yheDAmd01Fc",
   production:
     "AUy3P0m4GLbJDjpiKNine_ag-yVSHydqZKfvV3_DBgrSaIqOECmUh4HJRlgRv9J5Vew3nopoTxOeUQgz"
 };

 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +this.props.program,
          amount: {
            value: this.props.amount,
            currency: 'CAD',
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;

    return (
      <div className="main">
        {loading && <Spinner />}

        {showButtons && (
          <div>
            <div className = "paypal-description">
              <h2>Item: {this.props.program}</h2>
              <h2>Checkout Amount: ${this.props.amount}.00 CAD</h2>
            </div>

            <PayPalButton className = "paypal-checkout"
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {paid && (
          <div className="main">
            <h2>
              Congrats! you payment has been confirmed! I am looking forward to working with you!
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=CAD`)(PaypalButton);
