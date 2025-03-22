import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="col-one">
        <h1>404</h1>
        <div>
          <h2>This page could not be found.</h2>
        </div>
      </div>
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
}
