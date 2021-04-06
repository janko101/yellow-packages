import React from "react";

export default function Error() {
  return (
    <div className="error-wrapper">
      <div className="error-box">
        <h1 className="error-title">500</h1>
        <p className="error-text">Sorry, it's me, not you.</p>
        <p className="error-text">&#58;&#40;</p>
        <p className="error-text">Please try again later</p>
      </div>
    </div>
  );
}
