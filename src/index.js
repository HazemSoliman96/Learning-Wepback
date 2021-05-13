// import _ from 'lodash';
// import printMe from './print';
import { cube } from './math';
import './style.scss';

function component() {
  //const element = document.createElement('div');
  const element = document.createElement('pre');
  // const btn = document.createElement('button');

  //lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello, Webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // btn.innerHTML = 'click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn)
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());