import React from 'react'
import './Footer.css'
import FooterItem from './components/FooterItem'

const FooterItems = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johan-andersson-03ab40161/',
    icon: 'linkedin'
  },
  {
    name: 'Github',
    url: 'https://github.com/brocahontaz',
    icon: 'github',
  }
]

const Footer = () =>
  <div className='Footer'>
    <div className='Wrapper'>
      <ul>
        {FooterItems.map(item =>(
          <FooterItem name={item.name} url={item.url} icon={['fab', item.icon]} />
        ))}
      </ul>
    </div>
  </div>

export default Footer