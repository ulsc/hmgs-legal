import type { Metadata } from "next";
import { LegalShell } from "../LegalShell";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "HMGS Sınav Hazırlık uygulaması kullanım koşulları.",
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="KULLANIM KOŞULLARI"
      title="Uygulamayı kullanırken geçerli koşullar."
      intro="HMGS Sınav Hazırlık uygulamasını indirerek veya kullanarak bu koşulları kabul etmiş olursun."
    >
      <section>
        <h2>1. Hizmetin kapsamı</h2>
        <p>
          HMGS Sınav Hazırlık; çalışma planı, soru oturumları, açıklamalar,
          denemeler, ilerleme takibi, tekrar araçları ve sesli içerikler sunan
          bir eğitim destek uygulamasıdır. Uygulama ÖSYM’nin veya başka bir
          resmî kurumun uygulaması değildir.
        </p>
        <div className="callout">
          Uygulamadaki hazırlık ölçümleri eğitim amaçlı göstergelerdir; sınav
          sonucu, puan veya başarı garantisi vermez.
        </div>
      </section>

      <section>
        <h2>2. Kullanım hakkı</h2>
        <p>
          Uygulama ve içerikleri kişisel, ticari olmayan çalışma amacıyla
          kullanman için sınırlı, devredilemez ve münhasır olmayan bir kullanım
          hakkı sağlanır. İçerikleri izinsiz kopyalayamaz, yeniden yayımlayamaz,
          satamaz, otomatik şekilde toplayamaz veya uygulamanın güvenliğini
          aşmaya çalışamazsın.
        </p>
      </section>

      <section>
        <h2>3. İçerik ve güncellik</h2>
        <p>
          Hukuki mevzuat ve sınav kapsamı değişebilir. İçeriklerin doğru ve
          güncel tutulması için makul özen gösterilir; ancak uygulama hukuki
          danışmanlık hizmeti sunmaz ve tüm içeriklerin her an eksiksiz veya
          hatasız olacağı garanti edilmez. Fark ettiğin bir sorunu uygulama
          içinden bildirebilirsin.
        </p>
      </section>

      <section>
        <h2>4. Uygulama içi satın almalar</h2>
        <p>
          Premium erişim ürünleri Apple App Store üzerinden tek seferlik
          uygulama içi satın alma olarak sunulabilir. Ürün adı, fiyatı ve erişim
          süresi satın alma ekranında gösterilir. Bu ürünler otomatik yenilenen
          abonelik değildir.
        </p>
        <p>
          Ödeme, Apple hesabından tahsil edilir. İade talepleri ve App Store
          ödeme kuralları Apple tarafından yönetilir. Daha önce satın aldığın
          erişimi uygulamadaki “Satın Almaları Geri Yükle” seçeneğiyle
          doğrulayabilirsin.
        </p>
      </section>

      <section>
        <h2>5. Uygun kullanım ve hizmet değişiklikleri</h2>
        <p>
          Hizmeti kötüye kullanman, güvenliği ihlal etmen, yetkisiz erişim
          denemen veya başkalarının haklarına zarar vermen hâlinde erişim
          sınırlandırılabilir. Özellikler, içerikler ve teknik gereksinimler
          güvenlik, mevzuat veya ürün geliştirme nedenleriyle güncellenebilir.
        </p>
      </section>

      <section>
        <h2>6. Fikrî mülkiyet</h2>
        <p>
          Uygulamanın yazılımı, tasarımı, marka unsurları, soru ve açıklamaları
          ile diğer özgün içerikleri üzerindeki haklar ilgili hak sahiplerine
          aittir. Bu koşullar mülkiyet devri anlamına gelmez.
        </p>
      </section>

      <section>
        <h2>7. Sorumluluğun sınırı</h2>
        <p>
          Kanunun izin verdiği ölçüde uygulama “olduğu gibi” sunulur. İnternet,
          cihaz, App Store veya üçüncü taraf hizmetlerinden kaynaklanan
          kesintilerden; uygulamadaki eğitim içeriğine dayanılarak verilen
          mesleki ya da hukuki kararlardan sorumluluk kabul edilmez. Zorunlu
          tüketici hakların saklıdır.
        </p>
      </section>

      <section>
        <h2>8. İletişim ve değişiklikler</h2>
        <p>
          Soruların için{" "}
          <a href="mailto:resatvolkangunel@gmail.com">
            resatvolkangunel@gmail.com
          </a>{" "}
          adresine yazabilirsin. Koşullar güncellendiğinde yeni tarih bu
          sayfada yayımlanır; önemli değişiklikler ayrıca uygulama içinde
          duyurulabilir.
        </p>
      </section>
    </LegalShell>
  );
}
