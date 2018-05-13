import React from 'react';
import Image from './Image';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Image />
        <h1>
          Matthew Vaden
        </h1>
        <h3>
          Web Developer
        </h3>

        <h1>
          Matthew Vaden is a Web Developer who is based in Washington D.C. He describes himself as a perpetual learner and shameless nerd.
        </h1>
        <p>
          Professionally, Matthew wears a number of hats. At Leidos (most recently), he acted as a Software Engineer, QA Engineer and Scrum Master.</p> 
        <p>
          He also enjoys using his technical talents for community service, and has done so on behalf of organizations like Greater Washington Urban League Young Professionals, Black Millennials for Flint and Black Girls Code. 
        </p>
        <p>
          Matthew is always reachable via email and social media through his username "abovtheinfluinc".
        </p>
      </div>
    );
  }
}