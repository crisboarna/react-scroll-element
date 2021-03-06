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
      <h1>chevron-bouncing</h1>
      <a href="#s3"><ScrollElement type='chevron-bouncing'/></a>
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
      <h1>chevron-sliding-fade-spin</h1>
      <a href="#s6"><ScrollElement type='chevron-sliding-fade-spin'/></a>
    </section>
    <section id="s6">
      <h1>chevron-circle</h1>
      <a href="#s7"><ScrollElement type='chevron-circle'/></a>
    </section>
    <section id="s7">
      <h1>chevron-circle-pulse</h1>
      <a href="#s8"><ScrollElement type='chevron-circle-pulse'/></a>
    </section>
    <section id="s8">
      <h1>slider</h1>
      <a href="#s9"><ScrollElement type='slider'/></a>
    </section>
    <section id="s9">
      <h1>slider-chevron</h1>
      <a href="#s10"><ScrollElement type='slider-chevron'/></a>
    </section>
    <section id="s10">
      <h1>slider-action</h1>
      <a href="#s11"><ScrollElement type='slider-action'/></a>
    </section>
    <section id="s11">
      <h1>Fin.</h1>
    </section>
  </div>
);

export default App;
