// ** React Imports
import { Fragment, useEffect } from 'react'

// ** React Imports
import { useParams, Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardHeader, Button } from 'reactstrap'

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

// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Store & Actions
import { getUser } from './store'
import { useDispatch } from 'react-redux'

export const columns = [
  {
    name: <div className='font-size-12'>Domain </div>,
    sortable: true,
    minWidth: '75px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: () => <span className='text-capitalize'></span>
  },
  {
    name: <div className='font-size-12'></div>,
    sortable: true,
    minWidth: '75px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: () => <span className='text-capitalize'></span>
  },
  {
    name: <div className='font-size-12'></div>,
    sortable: true,
    minWidth: '75px',
    sortField: 'fullName',
    selector: row => row.fullName,
    cell: () => <span className='text-capitalize'></span>
  }
]


const ClientOverview = () => {

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Hooks
  const { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  const projectsArr = []
  
  return (
    <Fragment>
      <Card>
        <CardHeader tag='h4'>SEO Rank</CardHeader>
        <div className='react-dataTable user-view-account-projects'>
          <DataTable
            noHeader
            responsive
            columns={columns}
            data={projectsArr}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
          />
        </div>
      </Card>
      <Card>
        <CardHeader tag='h4'>Site Audit</CardHeader>
        <div className='react-dataTable user-view-account-projects'>
          <DataTable
            noHeader
            responsive
            columns={columns}
            data={projectsArr}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
          />
        </div>
      </Card>
    </Fragment>
  )
}

export default ClientOverview
