import background from './assets/background.jpg';
import './App.css';

function App() {

  return (
    <div 
        className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${background})`}}
    >
        <div className='w-[600px] h-[400px] bg-jordy-blue rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-white'>
            <p className='text-white font-bold text-4xl text-center leading-loose'>
                hi pookie ૮ ˶ᵔ ᵕ ᵔ˶ ა
                <br />
                ˚*•̩̩͙✩•̩̩͙*˚＊˚*•̩̩͙✩•̩̩͙*˚＊
                <br />
                are you ready?
            </p>
            <p className='text-white font-serif text-sm-bold'>
                p.s. you have to look at this on a computer + sound up ↻(𓄼 .̀  ̮.́)Ψ
            </p>
            <br />
            <button className='bg-plum-web text-white font-bold py-2 px-4 rounded-lg border-2 border-white'>
                i'm ready {'<'}3
            </button>
        </div>
    </div>
  );
}

export default App;
