// Import the styles from a CSS Module file.
// This behaves like a regular JavaScript import.
// IMPORTANT: the file must be named with `.module.css` so Vite knows to treat it as a CSS Module.

import styles from './button.module.css';

// This is a reusable Button component.
// It takes a prop called `buttonText` to decide what text to display inside the button.

const Button = ({ buttonText }) => {
  return (
    
    // Use a class from the imported CSS module.
    // styles.btn refers to the `.btn` class inside button.module.css.
    // This is locally scoped — it won't affect other buttons in the app.
    
    <button className={styles.btn}>
      {buttonText}
    </button>
  );
};

// Export the Button component so it can be used in other parts of the app.

export default Button;