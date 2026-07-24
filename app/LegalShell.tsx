import Link from "next/link";
import type { ReactNode } from "react";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalShell({
  eyebrow,
  title,
  intro,
  children,
}: LegalShellProps) {
  return (
    <>
      <header className="legal-header">
        <nav className="shell nav" aria-label="Ana menü">
          <Link className="wordmark" href="/">
            HMGS Sınav Hazırlık
          </Link>
          <div className="nav-links">
            <Link href="/privacy">Gizlilik</Link>
            <Link href="/kvkk">KVKK</Link>
            <Link href="/terms">Koşullar</Link>
            <Link href="/support">Destek</Link>
          </div>
        </nav>
      </header>
      <main className="shell legal-page">
        <div className="legal-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className="updated">SON GÜNCELLEME · 24 TEMMUZ 2026</span>
        </div>
        <article className="legal-content">{children}</article>
      </main>
      <footer className="shell footer">
        <span>© 2026 Reşat Volkan Günel</span>
        <a href="mailto:resatvolkangunel@gmail.com">
          resatvolkangunel@gmail.com
        </a>
      </footer>
    </>
  );
}
