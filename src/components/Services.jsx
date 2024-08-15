import React from 'react'
import {services} from '../contants'
import ServiceCrad from './ServiceCrad'
function Services() {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 '>
{services.map(service=>(
  <ServiceCrad key={service.label} {...service}/>
))}
    </section>
  )
}

export default Services