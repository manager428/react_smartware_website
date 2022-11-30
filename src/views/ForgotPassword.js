// ** React Imports
import { Link } from 'react-router-dom'

// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Reactstrap Imports
import { Card, Col, CardBody, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'

// ** Logo
import loginLogo from '@src/assets/images/logo/auth.png'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
const ForgotPasswordBasic = () => {
  return (
    <div className='auth-wrapper auth-basic'>
      <div className='auth-inner my-2'>
        <Col className='d-flex align-items-center justify-content-center auth-bg px-2 p-lg-5'>
          <div className='mobile-login'>
            <Card className='mb-0'>
              <CardBody className='p-0'>
                <img src={loginLogo} alt='logo'/>
                <CardTitle tag='h4' className='mb-1 mt-1 text-center'>
                  Forgotten password for support
                </CardTitle>
                <Form className='auth-forgot-password-form mt-2' onSubmit={e => e.preventDefault()}>
                  <div className='mb-1'>
                    <Label className='form-label' for='login-email'>
                      Email
                    </Label>
                    <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
                  </div>
                  <Button className='btn-auth-primary' block>
                    Send new password
                  </Button>
                  <p className='text-center mt-2'>
                    <Link to='/login'>
                      <span className='align-middle create_account'>Go to login</span>
                    </Link>
                  </p>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Col>
      </div>
    </div>
  )
}

export default ForgotPasswordBasic
