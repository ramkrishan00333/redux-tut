import React from "react";

const User = (props) => {
  const { data } = props;
  return (
    <>
      <h4>{data.name}</h4>
      <h4>{data.email}</h4>
    </>
  );
};

export default User;
