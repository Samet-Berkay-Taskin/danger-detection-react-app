
import { useNavigate } from 'react-router-dom'
import '../style/index.css'

export default function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <nav className=" border-gray-200 rounded-lg px-4 lg:px-8 py-4 bg-sky-300 ">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-8 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li onClick={() => { navigate('/') }}>
                                <p className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-zinc-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer italic">Ana Sayfa</p>
                            </li>
                            <li onClick={() => { navigate('/uploadDetectVido') }}>
                                <p className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-zinc-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer italic">Video Tespit</p>
                            </li>
                            <li onClick={() => { navigate('/uploadDetectImage') }}>
                                <p className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-zinc-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer italic">Fotoğraf Tespit</p>
                            </li>
                            <li onClick={() => { navigate('/downloadDetectVideo') }}>
                                <p className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-zinc-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer italic">Video Linki ile Tespit</p>
                            </li>
                            <li onClick={() => { navigate('/downloadOrWatch') }}>
                                <p className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:text-zinc-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer italic">Tespit Edilenler</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
