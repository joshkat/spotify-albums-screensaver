export default function Loading() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="loading w-20 text-warning"></div>
      </div>
    </div>
  );
}
