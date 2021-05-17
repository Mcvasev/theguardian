import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import AppGuardian from './AppGuardian';
import './index.css';



 let root = document.querySelector('#root')
 ReactDom.render(<AppGuardian/>, root)