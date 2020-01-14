import React, { FunctionComponent } from "react";
import { hot } from 'react-hot-loader';

const App: FunctionComponent = () => {
  return (
    <p>Foo</p>
  );
};

declare const module: any;
export default hot(module)(App);