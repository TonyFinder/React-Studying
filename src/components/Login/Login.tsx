import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormControls/FormControls';
import {maxLength, required} from '../../utils/validators';
import { connect } from 'react-redux';
import {loginTC} from '../../Redux/auth_reducer';

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = (props: any) => {
    const onSubmit = (formData: LoginFormType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const maxLength25 = maxLength(25)

const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"email"} component={Input} validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={Input} type={"password"} validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={"input"}/>Remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)
export default connect(null, {loginTC})(Login);