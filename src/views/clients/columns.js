// ** React Imports
import { Link } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTachometerAlt, faBullhorn, faEnvelope, faUser, faChartPie, faMagnifyingGlass, faWrench, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTachometerAlt, faBullhorn, faEnvelope, faUser, faChartPie, faMagnifyingGlass, faWrench, faLink)

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// SVG
import Microsoft from '@src/assets/images/pages/clients/microsoft.svg'
import GoogleMyBusiness from '@src/assets/images/pages/clients/GoogleMyBusiness.svg'
import TwitterAds from '@src/assets/images/pages/clients/TwitterAds.svg'
import HubSpot from '@src/assets/images/pages/clients/HubSpot.svg'
import Zapier from '@src/assets/images/pages/clients/zapier.svg'
import Handshake from '@src/assets/images/pages/clients/handshake.svg'
import GoogleImg from '@src/assets/images/pages/clients/google.png'

// ** Store & Actions
import { store } from '@store/store'
import { getUser} from './store'

// // ** Renders Client Columns
// const renderClient = row => {
//   if (row.avatar.length) {
//     return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
//   } else {
//     return (
//       <Avatar
//         initials
//         className='me-1'
//         color={row.avatarColor || 'light-primary'}
//         content={row.fullName || 'John Doe'}
//       />
//     )
//   }
// }

// // ** Renders Role Columns
// const renderRole = row => {
//   const roleObj = {
//     subscriber: {
//       class: 'text-primary',
//       icon: User
//     },
//     maintainer: {
//       class: 'text-success',
//       icon: Database
//     },
//     editor: {
//       class: 'text-info',
//       icon: Edit2
//     },
//     author: {
//       class: 'text-warning',
//       icon: Settings
//     },
//     admin: {
//       class: 'text-danger',
//       icon: Slack
//     }
//   }

//   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

//   return (
//     <span className='text-truncate text-capitalize align-middle'>
//       <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} me-50`} />
//       {row.role}
//     </span>
//   )
// }

// const statusObj = {
//   pending: 'light-warning',
//   active: 'light-success',
//   inactive: 'light-secondary'
// }

export const columns = [
  {
    name: <div className='font-size-15'><FontAwesomeIcon icon="fas fa-tachometer-alt" /> </div>,
    sortable: false,
    minWidth: '20px',
    maxWidth: '20px',
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center'>
        <FontAwesomeIcon icon="fas fa-tachometer-alt" />
      </div>
    )
  },
  {
    name: <div className='font-size-12'>Name </div>,
    sortable: true,
    minWidth: '100px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <Link
            to={`/companies/${row.id}`}
            className='user_name text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
        </div>
      </div>
    )
  }, 
  {
    name: <div className='font-size-12'>Created </div>,
    sortable: true,
    minWidth: '75px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: () => <span className='text-capitalize'>5/31/2022</span>
  },
  {
    name: <div className='font-size-12 google-color'><FontAwesomeIcon icon="fa-brands fa-google"/></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center google-color'>
          <FontAwesomeIcon icon="fa-brands fa-google"/>
        </div>
    )
  },
  {
    name: <div className='font-size-12 google-color'><FontAwesomeIcon icon="fa-solid fa-bullhorn" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center google-color'>
         <FontAwesomeIcon icon="fa-solid fa-bullhorn" />
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-bullhorn" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
         <FontAwesomeIcon icon="fa-solid fa-bullhorn" />
        </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ Microsoft } alt='microsoft' />
      </i></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
        </div>
    )
  },
  {
    name: <div className='font-size-15 instagram-color'><FontAwesomeIcon icon="fa-brands fa-instagram" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center instagram-color'>
         <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </div>
    )
  },
  {
    name: <div className='font-size-12 linkedin-color'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center linkedin-color'>
         <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </div>
    )
  },
  {
    name: <div className='font-size-12 linkedin-color'><FontAwesomeIcon icon="fa-solid fa-bullhorn" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center linkedin-color'>
         <FontAwesomeIcon icon="fa-solid fa-bullhorn" />
        </div>
    )
  },
  {
    name: <div className='font-size-12 linkedin-color'>360</div>,
    minWidth: '20px',
    maxWidth: '50px',
    sortable: true,
    sortField: 'status',
    selector: row => row.status,
    cell: () => (
      <div className='d-flex justify-content-ceter align-items-center linkedin-color font-size-11 text-nowrap '>
         360
      </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ GoogleMyBusiness } alt='GoogleMyBusiness' />
      </i></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
          <i>
            <img src={ GoogleMyBusiness } alt='GoogleMyBusiness' />
          </i>
        </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ TwitterAds } alt='TwitterAds' />
      </i></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
          <i>
            <img src={ TwitterAds } alt='TwitterAds' />
          </i>
        </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ TwitterAds } alt='TwitterAds' />
      </i></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
          <i>
            <img src={ TwitterAds } alt='TwitterAds' />
          </i>
        </div>
    )
  },
  {
    name: <div className='font-size-15'><img src={GoogleImg} className='w-15' /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
         <img src={GoogleImg} className='w-11' />
        </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ HubSpot } alt='HubSpot' />
      </i></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
          <i>
            <img src={ HubSpot } alt='HubSpot' />
          </i>
        </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ Zapier } className='w-12' alt='HubSpot' />
      </i></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
          <i>
            <img src={ Zapier } className='w-12' alt='Zapier' />
          </i>
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-envelope" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center'>
         <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </div>
    )
  },
  {
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-user" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
          4
        </div>
    )
  },
  {
    name: <div className='font-size-12'>
      <i>
        <img src={ Handshake } className='w-12' alt='Handshake' />
      </i>
    </div>,
    minWidth: '20px',
    maxWidth: '20px',
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
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-chart-pie" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
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
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
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
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-wrench" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
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
    name: <div className='font-size-12'><FontAwesomeIcon icon="fa-solid fa-link" /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    sortable: true,
    sortField: 'billing',
    selector: row => row.billing,
    cell: () => (
        <div className='d-flex justify-content-ceter align-items-center text-nowrap'>
          12
        </div>
    )
  },
  {
    name: <div className='font-size-11 text-nowrap'>Number of logins</div>,
    sortable: true,
    minWidth: '100px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: () => (
      <div className='text-center text-nowrap w-100'>
          0
      </div>
    )
  },
  {
    name: <div className='font-size-12'>Latest </div>,
    sortable: true,
    minWidth: '75px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: () => <span className='text-capitalize'>5/31/2022</span>
  }
]
