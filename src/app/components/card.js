export default function Card({ children, className = "" }) {
  return (
    <div className={`flex flex-col border border-solid border-2 border-indigo-100 rounded-xxl bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}
