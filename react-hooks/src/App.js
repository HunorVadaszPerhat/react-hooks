import './App.css';
import UseStateComponent from './hooks/UseStateComponent';
import UseReducerComponent from './hooks/UseReducerComponent';
import UseEffectComponent from './hooks/UseEffectComponent';
import UseRefComponent from './hooks/UseRefComponent';
import UseLayoutEffectComponent from './hooks/UseLayoutEffectComponent';


function App() {

  return (
    <>
      <UseStateComponent />
      <UseReducerComponent />
      <UseEffectComponent/>
      <UseRefComponent/>
      <UseLayoutEffectComponent/>
    </>
  );
}

export default App;
