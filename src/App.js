
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App(props) {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          imagen='Emma'
          nombre='Emma Bostian'
          pais='Sweden'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio={[<>Ive always struggled with learning JavaScript. I ve taken many courses but freeCodeCamp s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills </strong>  and confidence I needed to land my dream job as a software engineer at Spotify.</>]}/>
          
        
        <Testimonio 
          imagen='Shawn'
          nombre='Shawn Wang'
          pais='Singapore'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio={[<>It s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer.<strong> freeCodeCamp changed my life.'</strong></>]}/>
         
        <Testimonio 
          imagen='Sarah'
          nombre='Sarah Chima'
          pais='Nigeria'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio={[<><strong>freeCodeCamp was the gateway to my career </strong>as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'</>]}/>
        
      </div>
      
    </div>
  );
}

export default App;
