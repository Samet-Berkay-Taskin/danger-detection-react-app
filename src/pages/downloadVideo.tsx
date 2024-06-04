import { useState } from 'react';
import { LinkOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loading from '../components/loading';
import { SelectModel } from '../components/selectModel';


export default function DownloadVideo() {
    const [url, setUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const postUrlVideo = async () => {
        setLoading(true);

        const response = await axios.post('http://127.0.0.1:5000/download-video', { text: url })

        if (response.status === 200) {
            toast.success('Linkteki video başarılı bir şekilde inidirdi ve tespit yapıldı.')
            setLoading(false);
        }
        else {
            toast.error('Video İndirilemedi...')
            setLoading(false);
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center mt-12'>
                <h1 className='text-2xl'>Linkteki Videoyu İndir</h1>
            </div>

            <SelectModel />

            <Input className='w-[450px] mt-12' size="large" placeholder="Link" prefix={<LinkOutlined />} onChange={(e) => setUrl(e.target.value)} />
            <Button type="primary" className='ml-2' onClick={postUrlVideo}>
                Yükle
            </Button>

            {loading &&
                <Loading />
            }
            <ToastContainer />
        </div>

    )
}
