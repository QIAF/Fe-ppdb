const Button = (props) => {
  const { type, className, name, placeholder, value, onChange, defaultChecked, maxLength,onClick } = props;

  return (
    <Button
      className={className}
      name={name}
      onClick={onClick}
    />
  );
};

export default Button;