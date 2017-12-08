import React from 'react';
import ScrollElement from '../lib';
import './App.scss';

const App = () => (
  <div>
    <section id="section01">
      <a href="#section02"><ScrollElement type='chevron'/></a>
    </section>
    <section id="section02">
      <a href="#section03"><ScrollElement type='chevron-sliding'/></a>
    </section>
    <section id="section03">
      <a href="#section04"><ScrollElement type='chevron-circle'/></a>
    </section>
    <section id="section04">
      <a href="#section05"><ScrollElement type='chevron-circle-pulse'/></a>
    </section>
  </div>
);

export default App;
