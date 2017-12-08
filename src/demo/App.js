import React from 'react';
import ScrollElement from '../lib';
import './App.scss';

const App = () => (
  <div>
    <section id="s1">
      <h1>chevron</h1>
      <a href="#s2"><ScrollElement type='chevron'/></a>
    </section>
    <section id="s2">
      <h1>chevron-sliding</h1>
      <a href="#s3"><ScrollElement type='chevron-sliding'/></a>
    </section>
    <section id="s3">
      <h1>chevron-sliding-fade</h1>
      <a href="#s4"><ScrollElement type='chevron-sliding-fade'/></a>
    </section>
    <section id="s4">
      <h1>chevron-sliding-fade-triple</h1>
      <a href="#s5"><ScrollElement type='chevron-sliding-fade-triple'/></a>
    </section>
    <section id="s5">
      <h1>chevron-circle</h1>
      <a href="#s6"><ScrollElement type='chevron-circle'/></a>
    </section>
    <section id="s6">
      <h1>chevron-circle-pulse</h1>
      <a href="#s7"><ScrollElement type='chevron-circle-pulse'/></a>
    </section>
  </div>
);

export default App;
