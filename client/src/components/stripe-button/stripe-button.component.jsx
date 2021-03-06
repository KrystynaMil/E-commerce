import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9X4Fh0MwbBc3CUIjywacwnHR';

    const  onToken = token => {
      axios({
          url: 'payment', 
          method: 'post',
          data: {
            amount: priceForStripe,
            token
          }
      }).then(response => {
        alert('Payment successful')
      }).catch(error => {
          console.log('Payment error: ', JSON.parse(error));
          alert('There was an issue with your payment. Please sure you use the provided credit cart.')
      })
    }


    return (
        <StripeCheckout 
        label='Pay Now'
        name='E-SHOP'
        billingAddress
        shippingAddress
        image='https://img.icons8.com/color/48/000000/octaedro.png'
        description={`Your total is €${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      

        />
      );
    };

export default StripeCheckoutButton;
