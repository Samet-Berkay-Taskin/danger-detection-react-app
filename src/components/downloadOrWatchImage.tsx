import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Button, Select } from 'antd';
import { DownloadOutlined, AreaChartOutlined } from '@ant-design/icons';
import { get_detected_photo, getPhotos } from '../services';

export default function DownloadOrWatchImage() {
    const [imageNames, setImagesNames] = useState<any>('');
    const [selectedImageName, setSelectedImageName] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if (open === undefined)
            setOpen(false)
        else
            setOpen(false)
    }, [selectedImageName])

    useEffect(() => {
        getPhotos()
            .then((response: any) => {
                if (response.data?.photos === '')
                    setImagesNames([]);
                else
                    setImagesNames(response.data?.photos.map((item: any) => ({
                        label: item,
                        value: item
                    })));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    const handleChangeImgName = (value: string) => {
        setSelectedImageName(value)
    }

    const handleShow = () => {
        setOpen(!open)

        get_detected_photo(selectedImageName)
            .then((response: any) => {
                // Blob URL'sini oluştur
                const blobUrl = window.URL.createObjectURL(new Blob([response?.data]));

                // Görüntülemek için yeni bir Image elementi oluştur
                const img = new Image();
                img.src = blobUrl;

                // Image elementini görüntülemek için bir div'e ekleyin
                const imageContainer = document.getElementById('imageContainer');
                imageContainer.innerHTML = ''; // Önceki görüntüyü temizle
                imageContainer.appendChild(img);
            })
    };

    const handleDownload = () => {
        get_detected_photo(selectedImageName)
            .then((response: any) => {
                // Tarayıcıda dosyayı indirmek için bir bağlantı oluşturuyoruz.
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', selectedImageName);
                document.body.appendChild(link);
                link.click();

            })
    };

    return (
        <div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-2xl'>Tespit İşlemi Yapılmış Videoyu veya Fotoğrafı İndir</h1>
            </div>

            <div className='mt-12 flex'>
                <p>Fotoğraf seç:</p>
                <Select
                    status="warning"
                    style={{ width: '85%', paddingLeft: '20px' }}
                    placeholder='Seçiniz...'
                    options={imageNames}
                    onChange={handleChangeImgName}
                />
                <Button className='ml-4' type="primary" icon={<AreaChartOutlined />} onClick={handleShow} disabled={selectedImageName === ''} />
                <Button className='ml-4' type="primary" icon={<DownloadOutlined />} onClick={handleDownload} disabled={selectedImageName === ''} />
            </div>
            {open &&
                <div id="imageContainer" className='w-[500px] h-[500px]'></div>
            }

            <ToastContainer />
        </div>
    )
}
