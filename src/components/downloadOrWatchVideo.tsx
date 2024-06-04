import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Button, Select } from 'antd';
import { DownloadOutlined, AreaChartOutlined } from '@ant-design/icons';
import axios from 'axios';
import ReactPlayer from 'react-player';

export default function DownloadOrWatchVideo() {
    const [videoNames, setVideoNames] = useState<any>('');
    const [selectedVideoName, setSelectedVideoName] = useState<string>('');
    const [open, setOpen] = useState<boolean>()
    const [videoUrl, setVideoUrl] = useState<any>('');


    useEffect(() => {
        if (open === undefined)
            setOpen(false)
        else
            setOpen(false)
        setVideoUrl('')
    }, [selectedVideoName])

    useEffect(() => {
        const videos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/getVideos');
                if (response.data?.videos === '')
                    setVideoNames([])
                else
                    setVideoNames(response.data?.videos.map((item: any) => {
                        return {
                            label: item,
                            value: item
                        }
                    }));
            } catch (error) {
                console.error(error);
            }
        }
        videos()
    }, [])

    const handleChangeVideo = (value: string) => {
        setSelectedVideoName(value)
    }

    const handlePlay = async () => {
        setOpen(!open);
        try {
            const response = await axios.get(`http://127.0.0.1:5000/get_detected_video?video_name=${selectedVideoName}`, { responseType: 'arraybuffer' });
            const blob = new Blob([response.data], { type: 'video/mp4' });
            const url = URL.createObjectURL(blob);
            setVideoUrl(url);
        } catch (error) {
            console.error('Video oynatma hatası:', error);
        }
    };

    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/get_detected_video?video_name=${selectedVideoName}`, {
                responseType: 'blob' // Bu dosyanın bir blob olduğunu belirtiyoruz.
            });

            // Tarayıcıda dosyayı indirmek için bir bağlantı oluşturuyoruz.
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', selectedVideoName);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Video indirme hatası:', error);
        }
    };

    return (
        <div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-2xl'>Tespit İşlemi Yapılmış Videoyu veya Fotoğrafı İndir</h1>
            </div>

            <div className='mt-12 flex'>
                <p>Video seç:</p>
                <Select
                    status="error"
                    style={{ width: '85%', paddingLeft: '20px' }}
                    placeholder='Seçiniz...'
                    options={videoNames}
                    onChange={handleChangeVideo}
                />

                <Button className='ml-4' type="primary" icon={<AreaChartOutlined />} onClick={handlePlay} disabled={selectedVideoName === ''} />
                <Button className='ml-4' type="primary" icon={<DownloadOutlined />} onClick={handleDownload} disabled={selectedVideoName === ''} />
            </div>

            {open && (
                <div className='w-[500px] h-[500px]'>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width='750'
                        height='750'
                    />
                </div>
            )}

            <ToastContainer />
        </div >
    )
}
