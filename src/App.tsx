import './styles/App.scss'
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content h-[2000px]">
                <div className="container mx-auto">
                    <h1 className="main-title text-center text-[7.5rem] pt-[6rem] font-bold">
                        Design-driven<br/> <span className={'text-white'}>development of your </span> <br/> web product
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default App
