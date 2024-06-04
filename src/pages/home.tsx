import cv from '../assets/computer-vision.png'
import yolo from '../assets/yolo.jpeg'

export default function Home() {
    return (
        <div className='relative border-2 w-4/5 px-[20px] text-center'>
            <h1 className='text-3xl italic font-bold mt-4'>Computer Vision Nedir ? </h1>

            <div className='flex justify-center h-[400px] w-full mt-6'>
                <img src={cv} alt="computer-vision" />
            </div>

            <p className='mt-8 text-left'>
                Yapay Zeka'nın hızla gelişen alanlarından biri olan  <span className="font-bold">Bilgisayarlı Görü</span>, dijital görüntüleri işleyerek ve analiz ederek nesneleri ve sahneleri tanıyabilme kabiliyetine sahiptir. Bu teknoloji, farklı kaynaklardan gelen görüntü verilerini işleyerek çeşitli uygulamalara olanak tanır. Nesne tespiti, yüz tanıma, görüntü sınıflandırma, hareket analizi gibi birçok alanda kullanılabilen bilgisayarlı görü, günlük yaşamın pek çok alanında karşımıza çıkar.
            </p>

            <p className='mt-4 text-left'>
                Örneğin, otonom araçlar trafik işaretlerini tanıyıp okuyabilirken, tıbbi görüntüleme sistemleri kanser gibi hastalıkları tespit edebilir. Güvenlik alanında ise, yüz tanıma teknolojisi sayesinde kimlik doğrulama ve görüntü sınıflandırma teknolojisiyle tehlikeli nesnelerin tespiti gibi önemli işlevler sağlanabilir.
            </p>

            <p className='mt-4 text-left'>
                Kendi geliştirdiğimiz sistemde ise, <span className='font-bold'>YOLOv8</span> gibi güçlü bir derin öğrenme modeli kullanarak özellikle güvenlik odaklı bir uygulama geliştirdik. Sitemize yüklenen fotoğraf veya videolardaki silahları ve yangınları tespit ederek güvenliği artırmayı hedefliyoruz. Bu sayede, tehlikeli durumları tespit ederek önleyebilme imkanı sağlıyoruz.

                Yolculuğumuza bilgisayarlı görü teknolojisinin gücünü kullanarak, insan hayatını kolaylaştıracak ve güvenliğini sağlayacak yeni çözümler geliştirmek için devam ediyoruz. Siz de bu teknolojinin gücünü keşfetmek ve güvenliği artırmak için bizimle birlikte olun!
            </p>

            <h1 className='text-3xl italic font-bold mt-8'>Peki ya bu YOLO Algoritması Nedir ? </h1>

            <div className='flex justify-center h-[400px] w-full mt-6'>
                <img src={yolo} alt="YOLO" />
            </div>

            <p className='mt-8 text-left'>
                <span className='font-bold'>YOLO</span> (You only look once) türkçe karşılığı ‘Yalnızca bir kez bak ‘ olan , gerçek zamanlı nesne takibi için CNN kullanan en yaygın algoritmadır. Peki YOLO neden en çok tercih edilen uygulama oldu ? Bu sorunun cevabı ise çok hızlı olmasıydı .

                Gerçek zamanlı nesne takibi için RCNN , Fast R CNN, Faster R CNN gibi uygulamalar 2015 yılında YOLO piyasaya sürülene kadar çok kullanılırdı.YOLO sayesinde artık çok hızlı istenilen nesneyi tespit edebiliyoruz.
            </p>

            <p className='mt-10 text-left'>
                Bu web sitesi, bilgisayar mühendisliği bölümünde yaptığım bitirme projesinin ürünüdür. Önyüz tasarımını,React ile sade ve anlaşılır olacak şekilde özenle oluşturdum. Bu projeyi geliştirirken, bilgisayarlı görü teknolojisine olan tutkumla web geliştirme tutkumu birleştirdim ve önemli ihtiyaçları karşılayan bir çözüm oluşturmayı hedefledim. Bu proje, teknik yeteneklerimi geliştirmemin yanı sıra topluma fayda sağlayacak bir çözüm sunma fırsatı oldu. Heyecan verici bu yolculuğu sizlerle paylaşmaktan mutluluk duyuyorum.
            </p>

            <p className='mt-6 text-right text-lg font-semibold'>Samet Berkay Taşkın</p>
            <br /> <br />

        </div>
    )
}
