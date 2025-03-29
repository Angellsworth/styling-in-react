//defined in an object
//words are camelCased in this type of styling
const buttonStyle = {
    backgroundColor: 'rebeccapurple',
    borderRadius: '8px',
    color: 'white',
    fontSize: '24pt',
    padding: '15px 50px',
    width: '300px',
  };
  

  const Button = ({ buttonText }) => {
    return <button style={buttonStyle}>{buttonText}</button>;
  };
  
  export default Button;