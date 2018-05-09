import React from 'react';
import Image from './Image';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Image />
        <h1>My name is Matthew R. Vaden. I’m a Washington, D.C. based software developer, consultant, perpetual learner, and a shameless nerd.</h1>
        <p>My current professional interests include software design/development for the web, informational visualization, and mobile application development. But I tend to get distracted a lot and end up working on a number of other things.</p>
        <p>If you have any questions, comments, or concerns, feel free to be in touch! I’m always checking email and Twitter, and you can also probably find me most other places online as "abovtheinfluinc".</p>
      </div>
    );
  }
}