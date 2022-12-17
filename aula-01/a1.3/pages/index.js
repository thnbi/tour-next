import Link from "next/link";

function HomePage() {
  return (
    <div>
      <p>Welcome to Next.js!</p>
      <img src="/img/avatar.jpg" height="200px"></img>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
