import Image from 'next/image'

import Card from '../comps/card'
import DetailUI from '../comps/DetailUI'

import HeaderUI from '../comps/HeaderUI'
import FooterUI from '../comps/FooterUI'

export default function Home() {

  
  return (
    <div className='main-body-default'>
      <HeaderUI/>
      <div style={{minHeight: 900}}>Content</div>
      <FooterUI/>
    </div>
  )
}
