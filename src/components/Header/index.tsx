import './header.scss'
import {useEffect, useState} from "react";

const Header = () => {
    return (
        <header className="header w-full h-[130px] border-b border-gray-600 flex items-center">
            <div className="container mx-auto flex justify-between">
                <div className="header-logo flex items-center ">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="logo-image">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M39.598 8.601c-3.446 1.076-6.067 3.69-7.144 7.129a.56.56 0 0 1-1.074 0c-1.076-3.439-3.698-6.053-7.143-7.129a.558.558 0 0 1 0-1.07C27.681 6.455 30.303 3.84 31.38.4a.56.56 0 0 1 1.074 0c1.077 3.44 3.698 6.055 7.144 7.13a.558.558 0 0 1 0 1.07Z"
                              fill="#FFDA93"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M19.4 40C8.702 40 0 31.316 0 20.642c0-9.055 6.172-16.81 15.01-18.858a3.237 3.237 0 0 1 3.881 2.414 3.227 3.227 0 0 1-2.418 3.872C10.675 9.414 6.467 14.7 6.467 20.642c0 7.116 5.802 12.905 12.933 12.905 6.206 0 11.55-4.412 12.706-10.492a3.23 3.23 0 0 1 3.78-2.568 3.226 3.226 0 0 1 2.574 3.771C36.724 33.38 28.709 40 19.4 40Z"
                              fill="#FFF"></path>
                    </svg>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 13" className="logo-text">
                        <path
                            d="M.896 12V.8H3.52v4.416h4.24V.8h2.624V12H7.76V7.584H3.52V12H.896ZM20.476.8 24.894 12h-2.784l-.88-2.368h-4.464L15.885 12H13.1L17.517.8h2.96ZM17.63 7.264h2.72l-1.36-3.6-1.36 3.6ZM27.612 12V.8h2.624v8.832h5.216V12h-7.84Zm15.867.16c-1.675 0-3.062-.533-4.16-1.6-1.088-1.067-1.632-2.453-1.632-4.16 0-1.707.544-3.093 1.632-4.16 1.088-1.067 2.474-1.6 4.16-1.6 1.685 0 3.072.533 4.16 1.6 1.098 1.067 1.648 2.453 1.648 4.16 0 1.707-.55 3.093-1.648 4.16-1.088 1.067-2.475 1.6-4.16 1.6ZM41.27 8.752c.565.587 1.3.88 2.208.88.906 0 1.642-.293 2.208-.88.565-.597.848-1.381.848-2.352 0-.96-.288-1.739-.864-2.336-.566-.597-1.296-.896-2.192-.896-.907 0-1.643.299-2.208.896-.566.597-.848 1.376-.848 2.336 0 .97.282 1.755.848 2.352ZM58.148 12V.8h2.624v8.832h5.216V12h-7.84ZM75.307.8 79.723 12h-2.784l-.88-2.368h-4.464L70.715 12H67.93L72.347.8h2.96Zm-2.848 6.464h2.72l-1.36-3.6-1.36 3.6ZM82.442 12V.8h5.04c1.12 0 1.995.277 2.624.832.64.555.96 1.307.96 2.256 0 .917-.421 1.616-1.264 2.096 1.045.565 1.568 1.44 1.568 2.624 0 1.088-.33 1.925-.992 2.512-.661.587-1.632.88-2.912.88h-5.024Zm2.624-6.944h2.16c.363 0 .64-.09.832-.272.203-.181.304-.432.304-.752s-.101-.57-.304-.752c-.192-.192-.47-.288-.832-.288h-2.16v2.064Zm0 4.768h2.208c.438 0 .779-.117 1.024-.352.245-.245.368-.565.368-.96s-.128-.71-.384-.944c-.245-.235-.581-.352-1.008-.352h-2.208v2.608Z"
                            fill="#fff"></path>
                    </svg>
                </div>
                <div className={'nav-bar flex items-center'}>
                    <ul className={'flex gap-12 items-center'}>
                        <NavButton text={'Service'} path={'#'}/>
                        <NavButton text={'Project'} path={'#'}/>
                        <NavButton text={'Open Source'} path={'#'}/>
                        <NavButton text={'Blog'} path={'#'}/>
                    </ul>
                </div>
                <div className="header-get-btn">
                    <button
                        className="bg-[#02021e] transition border border-white text-white uppercase px-8 py-3 font-bold rounded-[100px] hover:bg-white hover:text-[#02021e]">Get
                        in
                        touch
                    </button>
                </div>
            </div>
        </header>
    )
}

interface navButton {
    text: string
    path: string
}

const NavButton: React.FC<navButton> = ({text, path}) => {
    return (
        <li className={'nav-button '}>
            <a href={path} className={'text-[hsla(0,0%,100%,.6)] text-xl transition'}>
                {text}
            </a>
        </li>
    )
}

export default Header