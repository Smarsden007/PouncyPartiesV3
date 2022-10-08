
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Checkout1 = () => {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 19
  };

  return (
    

        <div className="paypal-button-container">
          <PayPalScriptProvider options={{ "client-id": "AeJzJ2q46GK7xRWxiHUSCsoEwlVRbY_hAasM8mMjG8v2haPGn7LNgyV-Z7ET7PwYv-9MHMI8HtuAiwYB" }}
    >
          <PaypalCheckoutButton product={product} />
          </PayPalScriptProvider>
        </div>
  );
};

export default Checkout1;
