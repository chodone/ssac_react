//  ../ : 상위폴더
// ./ : 현재폴더

import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Hello2 from './Hello2';
import Props from './Props';
import Props2 from './Props2';
import Props3 from './Props3';
import Section from './Section';
import Condition from './Condition';
import Condition2 from './Condition2';
import Condition3 from './Condition3';

function AppExample() {
  return (
    <div className="App">
      <header className="App-header">
        Hello world!!!
        <Hello />
        <Hello2 />
        <Props number="10" />
        <Props2 number="1000" value="props value" />
        <Props3 number="12345" value ="구조분해할당" />
        <section>
          <div>Section Children</div>
          <Hello2 />
        </section>
        <Condition />
        <Condition2 />
        <Condition3 />

      </header>
    </div>
  );
}

export default AppExample;
