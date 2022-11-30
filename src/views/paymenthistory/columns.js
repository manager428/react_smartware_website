// ** React Imports
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTachometerAlt, faBullhorn, faEnvelope, faUser, faChartPie, faMagnifyingGlass, faWrench, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTachometerAlt, faBullhorn, faEnvelope, faUser, faChartPie, faMagnifyingGlass, faWrench, faLink)

export const columns = [
  {
    name: <div className='font-size-15'>Date</div>,
    sortable: false,
    minWidth: '50px',
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center'>
        11/02/2022 15:40
      </div>
    )
  },
  {
    name: <div className='font-size-15'>Status</div>,
    sortable: false,
    minWidth: '50px',
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center'>
        Ok
      </div>
    )
  },
  {
    name: <div className='font-size-15'>Payment method</div>,
    sortable: false,
    minWidth: '50px',
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center'>
        Credit Card
      </div>
    )
  },
  {
    name: <div className='font-size-15'>Amount</div>,
    sortable: false,
    minWidth: '50px',
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center'>
        92,50$
      </div>
    )
  },
  {
    name: <div className='font-size-15'>Error message</div>,
    sortable: false,
    minWidth: '50px',
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center'>
        
      </div>
    )
  }
]
