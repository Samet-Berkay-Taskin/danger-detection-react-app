import { useEffect, useState } from 'react'
import { Radio } from 'antd';
import { select_model } from '../services';

interface Model {
    model: string;
}

export const SelectModel = () => {
    const [selectedModel, setSelectedModel] = useState<Model>({ model: "pistol" })

    const models: Model[] = [
        { model: "pistol" },
        { model: "fire" },
        { model: "yolov8n" },
        { model: "catAndDog" },
    ]

    useEffect(() => {
        select_model(selectedModel)
    }, [selectedModel])

    return (
        <div>
            <h6 className='flex items-center justify-center mt-12'>Model seçiniz</h6>
            <Radio.Group defaultValue="Tabanca" size="small" className='flex items-center justify-center mt-2'>
                <Radio.Button value="Tabanca" onChange={() => (setSelectedModel(models[0]))}>Tabanca</Radio.Button>
                <Radio.Button value="Yangın" onChange={() => (setSelectedModel(models[1]))}>Yangın</Radio.Button>
                <Radio.Button value="Yolov8" onChange={() => (setSelectedModel(models[2]))}>Yolov8</Radio.Button>
                <Radio.Button value="Kedi ve Köpek" onChange={() => (setSelectedModel(models[3]))}>Kedi ve Köpek</Radio.Button>
            </Radio.Group>
        </div>
    )
}
