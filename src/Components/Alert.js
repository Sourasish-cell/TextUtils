import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    if (!props.alert) {
        return null;
      }

    const isDarkMode = props.mode === "dark";

  // Define background and text colors based on mode
    const alertBackground = isDarkMode
    ? "#333" // Dark background for dark mode
    : props.alert.type === "warning"
    ? "#ffc107"
    : ""; // Default Bootstrap colors for other types

  const textColor = isDarkMode ? "white" : "black";

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{
        backgroundColor: alertBackground || "", // Set background only if needed
        color: textColor,
        border: "1px solid rgba(0,0,0,0.2)", // Optional: Make border visible in both modes
      }}>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert
