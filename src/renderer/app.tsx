import { render } from 'react-dom';
import type { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <h2>Hello from React!</h2>
      <button onClick={() => window.puppeteer.test1()}>Test</button>
    </div>
  );
}

render(<App />, document.body);
