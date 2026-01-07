import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Hello, Pradeep Kumar!</h1>
      <header>
        <p>Welcome! To Home</p>
        <nav>
          {/* <a href="/about">About</a> | <a href="/contact">Contact</a> */}
          <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> | <Link href="/users">Users</Link> | <Link href="/users/new">New Users</Link>
        </nav>
      </header>
    </main>
  );
}
