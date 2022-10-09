import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h1>Bella </h1>
        </Link>
      </div>
    </header>
  );
}
