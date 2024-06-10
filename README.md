# Tehlike Tespit Arayüzü (React + TypeScript + Vite + Tailwind)

Bu proje, backend ve frontend olmak üzere iki aşamadan oluşmaktadır. Bu repository, projenin frontend kısmını içermektedir. Ancak projeyi tamamlayabilmek için backend kısmını da kurmanız gerekmektedir. Backend kısmının kodlarına BU LİNKTEN ulaşabilir ve projeyi tamamlayabilirsiniz.Projede, YOLOv8 modeli kullanılarak geliştirilmiş bir nesne tespit uygulaması bulunmaktadır. Bu uygulama, belirli nesneleri tanıyan dört farklı model içermektedir. Kullanıcılar, uygulamanın arayüzü üzerinden videoları ve fotoğrafları yükleyebilir, YouTube'dan video linki verebilir ve tespit sonuçlarını görüntüleyebilir veya indirebilirler. Ayrıca, hangi modelin kullanılacağını seçme seçeneği bulunmaktadır.

[BU LİNKTEN BACKEND REPOSUNA ULAŞABİLİRSİNİZ.](https://github.com/Samet-Berkay-Taskin/danger-detection-api)

## Kullanılan Teknolojiler
- React.js
- TypeScript
- Vite
- Tailwind CSS


## Kurulum ve Çalıştırma

1. Projeyi Klonlayın:
   ```bash
   git clone https://github.com/Samet-Berkay-Taskin/danger-detection-react-app.git
   cd danger-detection-react-app
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
  

### NOT: Video veya fotoğraf dosyalarının isimleri içerisinde "&", "+", "%", "?" gibi özel karakterler bulunuyorsa, nesne tespiti yapılabilir ancak tespit edilen sonuçları önizleyemez veya indiremezsiniz. Bu durum, backend tarafında istek atıldığında belirtilen video veya fotoğraf dosyasını bulamadığından kaynaklanır. Bu tür özel karakterler kullanılıyorsa, sunucu isteği doğru şekilde işleyemez ve istenen dosyayı bulamaz. Bu nedenle, video veya fotoğraf dosyalarının isimlerinde bu tür özel karakterler bulunmamalı veya uygun şekilde kodlanmalıdır.
