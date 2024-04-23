import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const { pathname } = router;

  return (
    <div className="flex gap-5">
      <div style={{ padding: "5px", color: "black", background: "white" }}>
        <Link href="/">Home</Link>
      </div>
      <div style={{ padding: "5px", color: "black", background: "white" }}>
        <Link href="/about">Sobre</Link>
      </div>
      {pathname !== "/products" && (
        <div style={{ padding: "5px", color: "black", background: "white" }}>
          <Link href="/products">Produtos</Link>
        </div>
      )}
    </div>
  );
}
