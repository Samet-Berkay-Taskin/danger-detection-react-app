import { useEffect, useState } from 'react'
import '../style/index.css'
import { Button, Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { SelectModel } from '../components/selectModel';


function DetectionImage() {
    const [source, setSource] = useState<any>()
    const [open, setOpen] = useState(false)

    const openImage = () => {
        setOpen(!open);

    }

    useEffect(() => {
        const uploadImg = async () => {
            const formData = new FormData();
            formData.append('file', source[0]);

            const response = await axios.post('http://127.0.0.1:5000/imageUpload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (response.status === 200) {
                toast.success('Görsel başarılı bir şekilde yüklendi ve tespit yapıldı.')
            }
            else {
                toast.error('Görsel yüklenemedi...')
            }
        }
        if (source) {
            uploadImg()
        }
    }, [source])

    return (
        <div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-2xl'>Fotoğraf Ekle ve İncele</h1>
            </div>

            <SelectModel />

            <div className='mt-12'>
                <Input size="large" type='file' accept='.jpeg,.jpg,.png' className='border-orange-400 cursor-pointer' onChange={(e) => (setSource(e.target.files))} />
            </div>
            {source?.length > 0 && (
                <div>
                    <Button block className='mt-8' onClick={openImage}>
                        Yüklenen fotoğrafa bak veya kapat
                    </Button>
                    {open && (
                        <div >
                            <img
                                className='mt-8'
                                src={URL.createObjectURL(source[0])}
                                alt="Fotoğraf"
                                height={500}
                                width={800}
                            />
                        </div>)}
                </div>
            )}

            <ToastContainer />
        </div>
    )
}
export default DetectionImage;