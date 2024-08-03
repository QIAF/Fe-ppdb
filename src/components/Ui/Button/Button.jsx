export const Button = (type, className, name, onClick) => {
  return (
    <Button
      className={className}
      name={name}
      onClick={onClick}
      type = { type }
    />
  );
};
