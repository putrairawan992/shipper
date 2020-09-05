import React from "react";

const ButtonDriverManagement = (props) => {
  const { onClick, label, validasi } = props;
  return (
    <button
      className={validasi ? "disabled" : "shipper__button-driverManagement"}
      onClick={onClick}
      disabled={validasi ? true : false}
    >
      {label}
    </button>
  );
};

export default ButtonDriverManagement;
