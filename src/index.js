import _ from 'lodash';
import printMe from './print';
import './style.scss';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  //lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn)
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());