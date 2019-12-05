import React from 'react';
import './MyButton.css';
export const MyButton = ({
  children
}) => React.createElement("div", null, React.createElement("button", null, children));
export default MyButton;