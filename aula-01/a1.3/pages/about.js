import Link from "next/link";

function aboutPage() {
  return (
    <div>
      <p>About Page</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default aboutPage;
