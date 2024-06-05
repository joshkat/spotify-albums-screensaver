import Link from "next/link";

export default function Error() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-8">
      <div className="flex">
        <h1 className="text-3xl">403</h1>
        <div className="divider divider-error divider-horizontal"></div>
        <p className="text-xl flex items-center">Forbidden</p>
      </div>
      <Link href="/" className="btn">
        Return Home
      </Link>
    </main>
  );
}
