export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-full bg-violet-300 text-white hover:bg-violet-400 transition-colors duration-200 disabled:bg-gray-400 ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
