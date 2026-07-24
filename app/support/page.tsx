import type { Metadata } from "next";
import { LegalShell } from "../LegalShell";

export const metadata: Metadata = {
  title: "Destek",
  description: "HMGS Sınav Hazırlık destek ve iletişim merkezi.",
};

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="DESTEK"
      title="Birlikte çözelim."
      intro="Teknik bir sorun, satın alma sorusu veya içerik bildirimi için doğrudan bize ulaşabilirsin."
    >
      <section>
        <h2>Destek ekibine ulaş</h2>
        <p>
          E-postanda sorunu gördüğün ekranı, kullandığın iPhone modelini, iOS
          sürümünü ve mümkünse ekran görüntüsünü paylaş. Parola, ödeme kartı
          bilgisi veya Apple hesabı şifresi gönderme.
        </p>
        <div className="support-actions">
          <a
            className="primary-action"
            href="mailto:resatvolkangunel@gmail.com?subject=HMGS%20Sınav%20Hazırlık%20Destek"
          >
            E-posta gönder
          </a>
          <a className="secondary-action" href="mailto:resatvolkangunel@gmail.com">
            Adresi kopyala
          </a>
        </div>
      </section>

      <section>
        <h2>Satın alma görünmüyor mu?</h2>
        <ol>
          <li>Satın almayı yaptığın Apple hesabıyla giriş yaptığını kontrol et.</li>
          <li>Uygulamadaki Profil ekranını aç.</li>
          <li>“Satın Almaları Geri Yükle” seçeneğini kullan.</li>
          <li>
            Erişim hâlâ görünmüyorsa ürün adı ve yaklaşık işlem tarihiyle bize
            yaz; ödeme kartı bilgisi gönderme.
          </li>
        </ol>
        <p>
          İade talepleri Apple tarafından yönetilir. Bir satın alma için iade
          talebini{" "}
          <a href="https://reportaproblem.apple.com/">
            Apple Sorun Bildir sayfasından
          </a>{" "}
          iletebilirsin.
        </p>
      </section>

      <section>
        <h2>İçerik hatası bildirmek</h2>
        <p>
          Soru ekranındaki bildirim seçeneğini kullanabilir veya konu, soru
          başlığı ve hatanın kısa açıklamasıyla e-posta gönderebilirsin.
          Bildirimler içerik inceleme sürecine alınır.
        </p>
      </section>

      <section>
        <h2>Gizlilik talebi</h2>
        <p>
          Verilerine erişme, düzeltme veya silme talebin için e-postanın konu
          alanına “Gizlilik Talebi” yaz. Anonim hesabını bulabilmemiz için
          uygulamada görünen destek/hesap kimliğini paylaşman istenebilir.
        </p>
      </section>

      <section>
        <h2>Uygulama bilgileri</h2>
        <ul>
          <li>Uygulama: HMGS Sınav Hazırlık</li>
          <li>Platform: iPhone</li>
          <li>Geliştirici: Reşat Volkan Günel</li>
          <li>
            İletişim:{" "}
            <a href="mailto:resatvolkangunel@gmail.com">
              resatvolkangunel@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </LegalShell>
  );
}
