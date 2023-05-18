const Button = ({ text, style }) => {
  const handleClick = () => {
    window.location.href = "http://zalo.me/0907115677"; // Đường dẫn muốn chuyển đến
  };
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
