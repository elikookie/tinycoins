export default function Card({ children }) {
  return (
    <div className="flex flex-col border border-solid border-2 border-indigo-100 rounded-lg bg-white p-4">
      {children}
    </div>
  );
}
