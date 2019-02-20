import React from 'react'
import {Form,Button,Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/index'
import { Formik} from 'formik';

const RegisterForm = (props) => (
    <div>
        <Formik
            initialValues={{ email: '', password: '',name:'' }}
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
                props.register(values)
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
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
            
                {touched.name && errors.name ? <div style={{color:'red',fontWeight:'bold'}}>{errors.name}</div> : null }
            </Form.Field>
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
                    Register
                </Button>
                <Button type="button" onClick={() => props.closeModal('RegisterModal')}>
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
    register: actionCreators.register,
    closeModal: actionCreators.closeModal
})(RegisterForm)
