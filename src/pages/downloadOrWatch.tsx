import DownloadOrWatchImage from '../components/downloadOrWatchImage'
import DownloadOrWatchVideo from '../components/downloadOrWatchVideo'

export default function DownloadOrWatch() {
    return (
        <div>
            <DownloadOrWatchImage />
            <div className='mt-24'>
                <DownloadOrWatchVideo />
            </div>
        </div>
    )
}
