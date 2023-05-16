const Button = ({ text, style, handleClick }) => {
  return (
    <button
      className={`${style} rounded-[10px] font-poppins font-medium `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
