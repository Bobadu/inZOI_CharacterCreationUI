import IcyBackground from './components/IcyBackground';
import NavBar from './components/NavBar';
import Aside from './components/Aside';
import MainContent from './components/MainContent';

const App = () => {
    return (
        <>
            <IcyBackground />
            <div className="relative z-10">
                <NavBar />
                <Aside />
                <MainContent />
            </div>
        </>
    );
};

export default App;