import React from 'react'
import './FooterItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FooterItem = ({name, url, icon}) =>
  <li className='FooterItem'>
    <a href={url}><FontAwesomeIcon icon={icon} /> {name}</a>
  </li>

export default FooterItem