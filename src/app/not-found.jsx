import Link from "next/link";

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-600">Sorry, the page you are looking for could not be found.</p>
        <Link href="/" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}