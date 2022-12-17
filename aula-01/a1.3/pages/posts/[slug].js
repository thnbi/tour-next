import { useRouter } from "next/router";
import Link from "next/link";

export default function PostPage() {
  const router = useRouter();

  return (
    <div>
      rota: {router.query.slug}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
