// ** React Imports
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTachometerAlt, faBullhorn, faEnvelope, faUser, faChartPie, faMagnifyingGlass, faWrench, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTachometerAlt, faBullhorn, faEnvelope, faUser, faChartPie, faMagnifyingGlass, faWrench, faLink)

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// SVG
import Handshake from '@src/assets/images/pages/clients/handshake.svg'

export const columns = [
  {
    name: <div className='font-size-12'>Name </div>,
    sortable: true,
    minWidth: '100px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <span className='fw-bolder'>{row.fullName}</span>
        </div>
      </div>
    )
  },
  {
    name: <div className='font-size-12'>
        <img src={ Handshake } className='w-12' alt='Handshake' />
        &nbsp;&nbsp;
        Web leads
    </div>,
    minWidth: '50px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
          8
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> &nbsp; Keywords</div>,
    minWidth: '50px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
         7
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> &nbsp; Competitors</div>,
    minWidth: '50px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
         15
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-wrench" /> &nbsp; Domains</div>,
    minWidth: '50px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
         21
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-brands fa-google" /> &nbsp; Views</div>,
    minWidth: '50px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
          12
        </div>
    )
  }
]
