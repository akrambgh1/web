// NotFound.jsx
export default function NotFound() {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center h-screen p-10">
      <h1 className="text-8xl text-white  font-[500]">404</h1>
      <p className="text-lg text-white font-[500] font-bold mt-4">Page not found</p>
      <a href="/" className="text-blue-500 mt-2 inline-block">Go back home</a>
    </div>
  );
}
