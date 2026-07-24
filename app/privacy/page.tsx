import type { Metadata } from "next";
import { LegalShell } from "../LegalShell";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "HMGS Sınav Hazırlık uygulaması gizlilik politikası.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="GİZLİLİK POLİTİKASI"
      title="Verilerini nasıl koruyoruz?"
      intro="Bu politika, HMGS Sınav Hazırlık uygulamasını kullandığında hangi bilgilerin işlendiğini, neden işlendiğini ve tercihlerini nasıl yönetebileceğini açıklar."
    >
      <section>
        <h2>1. Kimiz?</h2>
        <p>
          HMGS Sınav Hazırlık uygulamasının geliştiricisi ve bu politika
          kapsamındaki veri sorumlusu Reşat Volkan Günel’dir. Gizlilikle ilgili
          soruların veya taleplerin için{" "}
          <a href="mailto:resatvolkangunel@gmail.com">
            resatvolkangunel@gmail.com
          </a>{" "}
          adresinden iletişim kurabilirsin.
        </p>
      </section>

      <section>
        <h2>2. İşlenen bilgiler</h2>
        <h3>Hesap ve uygulama kimliği</h3>
        <p>
          Uygulama, kayıt formu doldurmadan çalışabilmen için Firebase üzerinden
          anonim bir kullanıcı kimliği oluşturur. Adın veya e-posta adresin,
          destek için kendin paylaşmadığın sürece bu anonim hesaba eklenmez.
        </p>

        <h3>Çalışma ve ilerleme bilgileri</h3>
        <p>
          Çözdüğün oturumlar, yanıtlar, konu ilerlemen, çalışma planın,
          tercihler ve premium erişim durumu cihazında saklanabilir ve
          cihazlar/oturumlar arasında devamlılık için bulut ortamına
          eşitlenebilir.
        </p>

        <h3>Satın alma bilgileri</h3>
        <p>
          Satın alma işlemleri Apple tarafından yürütülür. Uygulama ödeme kartı
          bilgilerini görmez veya saklamaz. Ürün kimliği, Apple işlem
          doğrulaması ve erişim süresi gibi satın alma durumunu doğrulamak için
          gerekli sınırlı bilgiler işlenebilir.
        </p>

        <h3>Bildirim ve cihaz bilgileri</h3>
        <p>
          Bildirimleri etkinleştirirsen bildirim iletim anahtarı, ücretsiz veya
          premium bildirim grubuna üyelik ve hatırlatma tercihleri
          işlenebilir. Bildirim iznini iOS ayarlarından kapatabilirsin.
        </p>

        <h3>Analiz, hata ve performans bilgileri</h3>
        <p>
          Açık onayın sonrasında Firebase Analytics, Crashlytics ve Performance
          aracılığıyla ekran/özellik kullanımı, yaklaşık performans ölçümleri,
          hata kayıtları, uygulama sürümü ve anonim uygulama kimliği
          işlenebilir. Bu koleksiyon, onay vermeden önce kapalıdır.
        </p>

        <h3>Destek ve içerik bildirimleri</h3>
        <p>
          Bize e-posta gönderir veya bir içerik sorununu bildirirsen, iletinin
          içeriğini ve iletişim için kullandığın bilgileri talebini çözmek
          amacıyla işleriz.
        </p>
      </section>

      <section>
        <h2>3. Kullanım amaçları</h2>
        <ul>
          <li>Uygulamayı çalıştırmak ve anonim oturumunu güvenli tutmak,</li>
          <li>çalışma ilerlemeni kaydetmek ve eşitlemek,</li>
          <li>satın almaları doğrulamak ve premium erişimi sağlamak,</li>
          <li>talep ettiğin bildirimleri iletmek,</li>
          <li>onayın varsa performansı ölçmek ve hataları gidermek,</li>
          <li>destek taleplerini ve içerik bildirimlerini yanıtlamak,</li>
          <li>güvenliği, kötüye kullanım önlemeyi ve yasal yükümlülükleri sağlamak.</li>
        </ul>
      </section>

      <section>
        <h2>4. Hizmet sağlayıcılar</h2>
        <p>
          Uygulama; kimlik doğrulama, veri eşitleme, uzaktan yapılandırma,
          bildirim, analiz ve hata takibi için Google Firebase; satın alma ve
          ödeme işlemleri için Apple; içerik ve uygulama servislerinin iletimi
          için güvenli bulut ve içerik dağıtım hizmetlerinden yararlanır.
          Hizmet sağlayıcılar bilgileri kendi sözleşmeleri ve gizlilik
          kuralları çerçevesinde işler.
        </p>
        <p>
          Bu sağlayıcıların altyapıları Türkiye dışında bulunabilir. Aktarım
          gereken durumlarda yürürlükteki veri koruma kurallarına uygun
          güvenceler uygulanır.
        </p>
      </section>

      <section>
        <h2>5. Saklama ve güvenlik</h2>
        <p>
          Bilgiler, uygulama hizmetini sağlamak, satın alma erişimini
          doğrulamak, yasal yükümlülükleri yerine getirmek veya bir talebi
          çözmek için gerekli olduğu sürece tutulur; sonrasında silinir ya da
          anonimleştirilir. Cihazdaki indirilen içerikleri ve yerel verileri
          uygulamayı silerek kaldırabilirsin.
        </p>
        <p>
          Aktarım sırasında şifreleme, erişim kısıtları ve hizmet sağlayıcıların
          güvenlik kontrolleri kullanılır. Hiçbir elektronik aktarım veya
          saklama yönteminin mutlak güvenlik sağlayamayacağını da belirtmek
          isteriz.
        </p>
      </section>

      <section>
        <h2>6. Tercihlerin ve taleplerin</h2>
        <p>
          Analiz iznini uygulama içindeki gizlilik tercihlerinden, bildirim
          iznini iOS ayarlarından yönetebilirsin. Verilerine erişme, düzeltme,
          silme veya işleme hakkında bilgi alma talebin için destek adresine
          yazabilirsin. Anonim hesabını bulabilmemiz için uygulamada görünen
          destek/hesap kimliğini paylaşman istenebilir.
        </p>
        <div className="callout">
          Satın alma geçmişi ve ödeme iadesi Apple tarafından yönetilir. Apple
          satın almalarını uygulamadaki “Satın Almaları Geri Yükle” seçeneğiyle
          tekrar doğrulayabilirsin.
        </div>
      </section>

      <section>
        <h2>7. Çocukların gizliliği ve değişiklikler</h2>
        <p>
          Uygulama 13 yaş altındaki çocuklara yönelik değildir. Bu politikayı
          hizmetlerdeki veya mevzuattaki değişikliklere göre güncelleyebiliriz.
          Önemli değişikliklerde uygulama içinde veya bu sayfada bilgilendirme
          yapılır.
        </p>
      </section>
    </LegalShell>
  );
}
