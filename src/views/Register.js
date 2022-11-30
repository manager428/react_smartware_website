// ** React Imports
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ** Custom Hook
import useJwt from '@src/auth/jwt/useJwt'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogin } from '@store/authentication'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Label, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Logo
import loginLogo from '@src/assets/images/logo/auth.png'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const defaultValues = {
  email: '',
  terms: false,
  username: '',
  password: ''
}

const Register = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    const tempData = { ...data }
    delete tempData.terms
    if (Object.values(tempData).every(field => field.length > 0) && data.terms === true) {
      const { username, email, password } = data
      useJwt
        .register({ username, email, password })
        .then(res => {
          if (res.data.error) {
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) {
                setError(property, {
                  type: 'manual',
                  message: res.data.error[property]
                })
              }
            }
          } else {
            const data = { ...res.data.user, accessToken: res.data.accessToken }
            ability.update(res.data.user.ability)
            dispatch(handleLogin(data))
            navigate('/')
          }
        })
        .catch(err => console.log(err))
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
        if (key === 'terms' && data.terms === false) {
          setError('terms', {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0 d-flex'>
        <Col className='d-flex align-items-center justify-content-center auth-bg px-2 p-lg-5'>
          <div className='mobile-login'>
            <img src={loginLogo} alt='logo'/>
            <Form action='/' className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <Controller
                  id='username'
                  name='username'
                  control={control}
                  render={({ field }) => (
                    <Input autoFocus placeholder='johndoe' invalid={errors.username && true} {...field} />
                  )}
                />
                {errors.username ? <FormFeedback>{errors.username.message}</FormFeedback> : null}
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Controller
                  id='email'
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input type='email' placeholder='john@example.com' invalid={errors.email && true} {...field} />
                  )}
                />
                {errors.email ? <FormFeedback>{errors.email.message}</FormFeedback> : null}
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>
              <div className='form-check mb-1'>
                <Controller
                  name='terms'
                  control={control}
                  render={({ field }) => (
                    <Input {...field} id='terms' type='checkbox' checked={field.value} invalid={errors.terms && true} />
                  )}
                />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <Button type='submit' className='btn-auth-primary' block>
                Sign up
              </Button>
              <p className='text-center mt-2'>
                <span className='me-25 create_account_label'>Already have an account?</span>
                <Link to='/login'>
                  <span className='create_account'>Sign in instead</span>
                </Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Register
