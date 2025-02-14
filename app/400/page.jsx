import Link from "next/link";
import ReturnButton from "../ReturnButton";

export default function Error({ searchParams }) {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-8">
      <div className="flex">
        <h1 className="text-3xl">400</h1>
        <div className="divider divider-error divider-horizontal"></div>
        <p className="text-xl flex items-center">Bad Request</p>
      </div>
      {searchParams.error === undefined ? (
        ""
      ) : (
        <p className="text-center">
          Error: &quot;{searchParams.error}&quot; <br /> And that&apos;s all we
          know
        </p>
      )}
      <div className="flex flex-wrap gap-3 justify-center">
        <ReturnButton />
        <Link href="/" className="btn w-[175px]">
          Return Home
        </Link>
      </div>
    </main>
  );
}
