import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country && Country.getAllCountries().map((index) => (
                <option value="{index.isoCode}" key="{index.isoCode}"
              >
              {index.name}
              </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State && State.getStatesOfCountry("IN").map((index) => (
                <option value="{index.isoCode}" key="{index.isoCode}"
              >
              {index.name}
              </option>
              ))}
              </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label htmlFor="phone">Phone No.</label>
            <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"placeholder="Format 123-123-1234" />
          </div>
            <Popup trigger=
                {<button type = "button" className="shipping-button">Confirm Order</button>}
                position="right center">
                <div 
                style={{color:"red",position: 'absolute', top: '50%', right: '100%', 
                  transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', 
                  borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed
                </div>
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
