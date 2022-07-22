import React from "react";

interface Props {
  label: string;
}

const Button: React.FunctionComponent<Props> = ({ label }) => {
  return <button>{label}</button>
}

export default Button;
