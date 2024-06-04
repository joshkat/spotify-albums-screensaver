export default function NotFound() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex">
        <h1 className="text-3xl">404</h1>
        <div className="divider divider-error divider-horizontal"></div>
        <p className="text-xl flex items-center">
          This page could not be found
        </p>
      </div>
    </main>
  );
}
