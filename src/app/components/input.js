export default function Input({ 
    type = 'text', 
    placeholder = '', 
    value, 
    onChange, 
    className = '', 
    ...props 
  }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-solid border-2 border-indigo-100 rounded-full px-3 py-2 ${className}`}
        {...props}
      />
    );
  }