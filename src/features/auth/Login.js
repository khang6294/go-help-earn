import React from 'react'
import {Form,Button,Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/index'
import { Formik } from 'formik';

const LoginForm = (props) => (
    <div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                    return errors;
                }}
            onSubmit={(values, { setSubmitting }) => {
                props.login(values)
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
            <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
            
                {touched.email && errors.email ? <div style={{color:'red',fontWeight:'bold'}}>{errors.email}</div> : null }
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && errors.password}
                </Form.Field>
                {props.error && 
                <Message negative>
                    <Message.Header>Login Error</Message.Header>
                    <p>{props.error.message}</p>
                </Message>
                }
                <Button positive type="submit" disabled={errors.email || isSubmitting}>
                    Login
                </Button>
                <Button type="button" onClick={() => props.closeModal('LoginModal')} >
                    Cancel
                </Button>
            </Form>
            )}
        </Formik>
    </div>
);

const mapStateToProps = state => ({
    error: state.auth.error
})

export default connect(mapStateToProps,{
    login: actionCreators.login,
    closeModal: actionCreators.closeModal
})(LoginForm)
