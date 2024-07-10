import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center max-h-max mt-6">
      <h2 className="text-3xl text-black font-bold mb-4">404 Page Not Found</h2>
      <p className="mb-4">We are sorry, there is no page like this.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to main page!
      </Link>
    </div>
  );
}
