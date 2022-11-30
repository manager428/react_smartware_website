// ** React Imports
import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Store & Actions
import { getUser } from '../store'
import { useSelector, useDispatch } from 'react-redux'

// ** User Components
import ActivitiesView from '../../activitiesView'
import ClientOverview from '../../clientoverview'
import WeekCalendar from '../../calendar'
import Reports from '../../reports'
import CompanyInfo from '../../companyinfo'
import Users from '../../users'
import Integrations from '../../connections'
import Btobtracking from '../../btobtracking'
import Tracking from '../../tracking'
import Notifications from '../../notifications'
import Domains from '../../domain'
import Language from '../../language'
import PcMarkup from '../../ppcmackup'


const UserTabs = ({ active, toggleTab }) => {
    // ** Store Vars
  const store = useSelector(state => state.users)
  const dispatch = useDispatch()

  // ** Hooks
  const { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <span className='fw-bold'>Dashboard</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <span className='fw-bold'>Activities</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <span className='fw-bold'>Reports</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <span className='fw-bold'>Company Info</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '5'} onClick={() => toggleTab('5')}>
            <span className='fw-bold'>Users</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '6'} onClick={() => toggleTab('6')}>
            <span className='fw-bold'>Integrations</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '7'} onClick={() => toggleTab('7')}>
            <span className='fw-bold'>Webleads B2B tracking</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '8'} onClick={() => toggleTab('8')}>
            <span className='fw-bold'>Tracking</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '9'} onClick={() => toggleTab('9')}>
            <span className='fw-bold'>Notifications</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '10'} onClick={() => toggleTab('10')}>
            <span className='fw-bold'>Domains</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '11'} onClick={() => toggleTab('11')}>
            <span className='fw-bold'>Language</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '12'} onClick={() => toggleTab('12')}>
            <span className='fw-bold'>PPC Markup</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <ClientOverview />
          <ActivitiesView />
        </TabPane>
        <TabPane tabId='2'>
          <ActivitiesView />
          <WeekCalendar />
        </TabPane>
        <TabPane tabId='3'>
          <Reports />
        </TabPane>
        <TabPane tabId='4'>
          <CompanyInfo selectedUser={store.selectedUser} />
        </TabPane>
        <TabPane tabId='5'>
          <Users />
        </TabPane>
        <TabPane tabId='6'>
          <Integrations />
        </TabPane>
        <TabPane tabId='7'>
          <Btobtracking />
        </TabPane>
        <TabPane tabId='8'>
          <Tracking />
        </TabPane>
        <TabPane tabId='9'>
          <Notifications />
        </TabPane>
        <TabPane tabId='10'>
          <Domains />
        </TabPane>
        <TabPane tabId='11'>
          <Language />
        </TabPane>
        <TabPane tabId='12'>
          <PcMarkup />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
