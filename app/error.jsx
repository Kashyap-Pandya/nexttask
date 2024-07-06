"use client";
const error = ({ error, reset }) => {
  return <div className="error">error: {error.message}</div>;
};
export default error;
