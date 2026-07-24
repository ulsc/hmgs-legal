import Link from "next/link";

const pages = [
  {
    href: "/privacy",
    label: "Gizlilik Politikası",
    description:
      "Uygulamada hangi verilerin neden işlendiğini ve tercihlerinizi nasıl yönetebileceğinizi açıklar.",
  },
  {
    href: "/kvkk",
    label: "KVKK Aydınlatma Metni",
    description:
      "6698 sayılı Kanun kapsamındaki veri sorumlusu, işleme amaçları ve haklarınız.",
  },
  {
    href: "/terms",
    label: "Kullanım Koşulları",
    description:
      "Uygulama, içerikler ve tek seferlik uygulama içi satın almalar için geçerli koşullar.",
  },
  {
    href: "/support",
    label: "Destek",
    description:
      "Teknik sorunlar, satın alma ve geri yükleme işlemleri için doğrudan iletişim.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="brand-mark" aria-hidden="true">
            H
          </div>
          <p className="eyebrow">HMGS SINAV HAZIRLIK</p>
          <h1>Çalışman sende.<br />Hakların da.</h1>
          <p className="hero-copy">
            Gizlilik, kullanım koşulları ve destek bilgilerini açık ve
            anlaşılır biçimde burada bulabilirsin.
          </p>
          <a className="primary-action" href="mailto:resatvolkangunel@gmail.com">
            Destek ekibine yaz
          </a>
        </div>
      </section>

      <section className="shell hub" aria-labelledby="legal-heading">
        <div className="section-heading">
          <p className="eyebrow">BİLGİ MERKEZİ</p>
          <h2 id="legal-heading">Aradığın belgeye ulaş.</h2>
        </div>
        <div className="card-grid">
          {pages.map((page, index) => (
            <Link className="document-card" href={page.href} key={page.href}>
              <span className="card-number">0{index + 1}</span>
              <h3>{page.label}</h3>
              <p>{page.description}</p>
              <span className="card-link">İncele →</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="shell footer">
        <span>© 2026 Reşat Volkan Günel</span>
        <span>HMGS Sınav Hazırlık, resmî bir ÖSYM uygulaması değildir.</span>
      </footer>
    </main>
  );
}
