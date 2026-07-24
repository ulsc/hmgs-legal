import type { Metadata } from "next";
import { LegalShell } from "../LegalShell";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "HMGS Sınav Hazırlık KVKK aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <LegalShell
      eyebrow="KVKK AYDINLATMA METNİ"
      title="Kişisel verilerine ilişkin bilgilendirme."
      intro="Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi kapsamında hazırlanmıştır."
    >
      <section>
        <h2>1. Veri sorumlusu</h2>
        <p>
          Kişisel verilerin, veri sorumlusu sıfatıyla Reşat Volkan Günel
          tarafından işlenir. İletişim:{" "}
          <a href="mailto:resatvolkangunel@gmail.com">
            resatvolkangunel@gmail.com
          </a>.
        </p>
      </section>

      <section>
        <h2>2. Veri kategorileri ve amaçlar</h2>
        <ul>
          <li>
            <strong>Anonim kimlik ve güvenlik:</strong> oturum oluşturma,
            yetkilendirme ve kötüye kullanımın önlenmesi.
          </li>
          <li>
            <strong>Çalışma ve işlem bilgileri:</strong> ilerleme kaydı,
            kişisel çalışma planı, eşitleme ve hizmetin sunulması.
          </li>
          <li>
            <strong>Satın alma/erişim bilgileri:</strong> Apple işlemlerinin
            doğrulanması ve premium erişimin sağlanması.
          </li>
          <li>
            <strong>Bildirim bilgileri:</strong> tercih edilen hatırlatma ve
            hizmet bildirimlerinin iletilmesi.
          </li>
          <li>
            <strong>Analiz, performans ve hata bilgileri:</strong> açık onay
            verilmesi hâlinde ürünün geliştirilmesi ve hataların giderilmesi.
          </li>
          <li>
            <strong>İletişim bilgileri:</strong> destek talebi gönderildiğinde
            talebin yanıtlanması.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Hukuki sebepler</h2>
        <p>
          Veriler; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili
          olması, veri sorumlusunun hukuki yükümlülüklerini yerine getirmesi,
          bir hakkın tesisi/kullanılması/korunması ve temel haklara zarar
          vermemek kaydıyla meşru menfaat hukuki sebeplerine dayanarak
          işlenebilir. Analiz, performans ve hata koleksiyonu gibi isteğe bağlı
          işlemler açık onayına dayanır; onayını dilediğin zaman geri
          alabilirsin.
        </p>
      </section>

      <section>
        <h2>4. Aktarım</h2>
        <p>
          Veriler, yukarıdaki amaçlarla sınırlı olmak üzere Apple, Google
          Firebase ve güvenli bulut/altyapı sağlayıcılarına; ayrıca hukuken
          yetkili kamu kurumlarına aktarılabilir. Yurt dışı aktarım gereken
          durumlarda KVKK’nın ilgili hükümleri ve uygun güvenceler uygulanır.
        </p>
      </section>

      <section>
        <h2>5. Toplama yöntemi</h2>
        <p>
          Veriler uygulamayı kullanman, tercihlerini seçmen, satın alma işlemi
          yapman, bildirim izni vermen veya destek talebi göndermen sırasında
          elektronik yöntemlerle otomatik ya da kısmen otomatik şekilde
          toplanır.
        </p>
      </section>

      <section>
        <h2>6. KVKK’nın 11. maddesindeki hakların</h2>
        <p>Aşağıdaki konularda başvuru yapabilirsin:</p>
        <ul>
          <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
          <li>işlenmişse bilgi talep etme ve amacına uygun kullanımı öğrenme,</li>
          <li>aktarıldığı üçüncü kişileri bilme,</li>
          <li>eksik veya yanlış işlenen verilerin düzeltilmesini isteme,</li>
          <li>kanuni şartlar oluştuğunda silinmesini veya yok edilmesini isteme,</li>
          <li>düzeltme/silme işlemlerinin aktarılan kişilere bildirilmesini isteme,</li>
          <li>otomatik analiz sonucu aleyhe bir sonuca itiraz etme,</li>
          <li>kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme.</li>
        </ul>
        <p>
          Başvurunu, kimliğini ve talebini açıklayarak{" "}
          <a href="mailto:resatvolkangunel@gmail.com">
            resatvolkangunel@gmail.com
          </a>{" "}
          adresine iletebilirsin.
        </p>
      </section>
    </LegalShell>
  );
}
