# Tehlike Tespit Arayüzü (React + TypeScript + Vite + Tailwind)


Bu proje, backend ve frontend olmak üzere iki aşamadan oluşmaktadır. Bu repository, projenin frontend kısmını içermektedir. Ancak projeyi tamamlayabilmek için backend kısmını da kurmanız gerekmektedir. Backend kısmının kodlarına BU LİNKTEN ulaşabilir ve projeyi tamamlayabilirsiniz.Projede, YOLOv8 modeli kullanılarak geliştirilmiş bir nesne tespit uygulaması bulunmaktadır. Bu uygulama, belirli nesneleri tanıyan dört farklı model içermektedir. Kullanıcılar, uygulamanın arayüzü üzerinden videoları ve fotoğrafları yükleyebilir, YouTube'dan video linki verebilir ve tespit sonuçlarını görüntüleyebilir veya indirebilirler. Ayrıca, hangi modelin kullanılacağını seçme seçeneği bulunmaktadır.

## Kullanılan Teknolojiler
- React.js
- TypeScript
- Vite
- Tailwind CSS


## Kurulum ve Çalıştırma

1. Projeyi Klonlayın:
   ```bash
   git clone https://github.com/kullanici-adi/tehlike-tespit-arayuz.git
   cd tehlike-tespit-arayuz
   ```

2. Gerekli Bağımlılıkları Yükleyin:
   ```bash
   npm install
   ```

3. Projeyi Başlatın:
   ```bash
   npm run dev
   ```

   ## Kullanım

1. **Görüntü veya Video Yükleme:**
   - Arayüze, analiz yapılacak fotoğraf veya video dosyasını yükleyebilirsiniz.
   - Alternatif olarak, YouTube'dan bir video linki girebilirsiniz.

2. **Sonuçları Görüntüleme ve İndirme:**
   - Yüklediğiniz dosyaların analizi gerçek zamanlı olarak yapılacak ve sonuçlar arayüzde görselleştirilecektir.
   - Analiz sonuçlarını isterseniz indirebilir veya arayüz üzerinde görüntüleyebilirsiniz.
