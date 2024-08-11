import { Axios } from "./base"

export const videoUpload = async (formData: any) => {
    await Axios.post('/videoUpload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
    })
}

export const select_model = async (selectedModel: any) => {
    await Axios.post('/selectModel', selectedModel);
}

export const getPhotos = async () => {
    const response = await Axios.get('/getPhotos');
    return response
}

export const get_detected_photo = async (selectedImageName: string) => {
    const response = await Axios.get(`get_detected_photo?photo_name=${selectedImageName}`, {
        responseType: 'blob' // Bu dosyanın bir blob olduğunu belirtiyoruz.
    });
    return response
}

export const getVideos = async () => {
    const response = await Axios.get('/getVideos');
    return response
}

export const get_detected_video = async (selectedVideoName: string) => {
    const response = await Axios.get(`http://127.0.0.1:5000/get_detected_video?video_name=${selectedVideoName}`, {
        responseType: 'blob' // Bu dosyanın bir blob olduğunu belirtiyoruz.
    });
    return response
}

export const imageUpload = async (formData: any) => {
    await Axios.post('http://127.0.0.1:5000/imageUpload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
    });
}

export const download = async (url: string) => {
    await Axios.post('/download-video', { text: url })
}