// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser } from '../store'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'

// ** Custom Component
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = () => {
    // ** Store Vars
    const store = useSelector(state => state.users)
    const dispatch = useDispatch()

    // ** Hooks
    const { id } = useParams()

    // ** Get suer on mount
    useEffect(() => {
        dispatch(getUser(parseInt(id)))
    }, [dispatch])

    const [active, setActive] = useState('1')

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    
    return store.selectedUser !== null && store.selectedUser !== undefined ? (
        <div className='app-user-view'>
            <Breadcrumbs title={ store.selectedUser.username } data={[{ title: 'Home' }, { title: 'Clients' }]} />
            <Row>
                <UserTabs active={active} toggleTab={toggleTab} />
            </Row>
        </div>
    ) : (
        <Alert color='danger'>
            <h4 className='alert-heading'>User not found</h4>
            <div className='alert-body'>
                User with id: {id} doesn't exist. Check list of all Users: <Link to='/'>Client List</Link>
            </div>
        </Alert>
    )
}
export default UserView
