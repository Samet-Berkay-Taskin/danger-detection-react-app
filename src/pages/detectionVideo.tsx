import { useEffect, useState } from 'react'
import '../style/index.css'
import { Button, Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../components/loading';
import { SelectModel } from '../components/selectModel';


function DetectionVideo() {
    const [source, setSource] = useState<any>()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState<boolean>(false)

    const openVideo = () => {
        setOpen(!open);
    }

    useEffect(() => {
        const uploadVideo = async () => {
            const formData = new FormData();
            formData.append('file', source[0]);

            setLoading(true)
            const response = await axios.post('http://127.0.0.1:5000/videoUpload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (response.status === 200) {
                toast.success('Video başarılı bir şekilde yüklendi ve tespit yapıldı.')
                setLoading(false);
            }
            else {
                toast.error('Video yüklenemedi...')
                setLoading(false);
            }
        }
        if (source) {
            uploadVideo()
        }
    }, [source])

    return (
        <div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-2xl'>Video Ekle ve İzle</h1>
            </div>

            <SelectModel />

            <div className='mt-12'>
                <Input size="large" type='file' accept='.mp4' className='border-orange-400 cursor-pointer' onChange={(e) => (setSource(e.target.files))} />
            </div>
            {source?.length > 0 && (
                <div>
                    <Button block className='mt-8' onClick={openVideo}>
                        Yüklenen videoyu oynat veya kapat
                    </Button>
                    {open && (
                        <div >
                            <video
                                className='mt-12'
                                controls
                                src={URL.createObjectURL(source[0])}
                                height={250}
                                width="100%"
                            />
                        </div>)}
                </div>
            )}

            {loading &&
                <Loading />
            }
            <ToastContainer />
        </div>
    )
}
export default DetectionVideo;