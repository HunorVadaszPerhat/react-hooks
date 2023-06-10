import './App.css';
import UseStateComponent from './hooks/UseStateComponent';
import UseReducerComponent from './hooks/UseReducerComponent';
import UseEffectComponent from './hooks/UseEffectComponent';
import UseRefComponent from './hooks/UseRefComponent';
import UseLayoutEffectComponent from './hooks/UseLayoutEffectComponent';
import UseContextComponent from './hooks/UseContextComponent';
import UseMemoComponent from './hooks/UseMemoComponent';
import UseCallbackComponent from './hooks/UseCallbackComponent';

function App() {

  return (
    <>
      <UseStateComponent />
      <UseReducerComponent />
      <UseEffectComponent />
      <UseRefComponent />
      <UseLayoutEffectComponent />
      <UseContextComponent />
      <UseMemoComponent/>
      <UseCallbackComponent />
    </>
  );
}

export default App;
