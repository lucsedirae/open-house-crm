//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons


export const ContactItem = ({ contact }) => {
  const {
    id,
    name,
    email,
    phone,
    address,
    streetNumber,
    street,
    address2,
    city,
    state,
    zipcode,
    type,
  } = contact;

  //* Checks the contact type and returns the appropriate badge background color
  const typeCheck = (type) => {
    switch (type) {
      case "vendor":
        return "bg-primary";
      case "client":
        return "bg-success";
      default:
        return "bg-warning";
    }
  };

  return (
    <div className="card bg-light">
      <h5 className="mx-1 my-1">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`mx-1 badge ${typeCheck(type)}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h5>
      <ul className="list-group">
        {address && (
          <li className="list-group-item">
            <ul className="address-list">
              <li>
                {address.street && (
                  <li>
                    {address.streetNumber} {address.street}
                  </li>
                )}
              </li>
              {address.address2 && <li>{address.address2}</li>}
              <li>
                {address.city && (
                  <li>
                    {address.city}, {address.state} {address.zipcode}
                  </li>
                )}
              </li>
            </ul>
          </li>
        )}
        {email && (
          <li className="list-group-item">
            <i className="mx-1 fas fa-envelope-open text-primary"></i>
            <span>{email}</span>
          </li>
        )}
        {phone && (
          <li className="list-group-item">
            <i className="mx-1 fas fa-phone text-primary"></i>
            <span>{phone}</span>
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-primary btn-small">Edit</button>
        <button className="btn btn-danger btn-small">Delete</button>
      </p>
    </div>
  );
};

export default ContactItem;
