// Import a Sass stylesheet for this component.
// The file extension `.sass` means you're using the indented Sass syntax (no curly braces or semicolons).
// This file is globally scoped — any class inside it is available across the whole app.

import './button.sass';

// This is a reusable Button component.
// It accepts one prop: `buttonText`, which decides what text will appear on the button.

const Button = ({ buttonText }) => {
  return (
    
    // Apply the class "sassy-button" to the button.
    // This class is defined in the imported Sass file.
    
    <button className="sassy-button">
      {buttonText}
    </button>
  );
};

// Export the component so it can be used in other files.

export default Button;