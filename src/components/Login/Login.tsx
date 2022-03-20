import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type LoginFormType = {
    login: string
    pass: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: LoginFormType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"login"} component={"input"}/>
            </div>
            <div>
                <Field name={"pass"} placeholder={"password"} component={"input"}/>
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