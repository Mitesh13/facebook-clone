import googleImage from './Images/g.png'
import './login.css'
import {auth, provider} from '../firebase'
const Login = ({setUser}) => {

    const login = () => {
        console.log("called");
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);
            
            setUser(result.user)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-container">
            <section className="section-left">
                <h1>facebook clone</h1>
                <p>Facebook clone helps you connect and share with the people in your life.</p>
            </section>

            <section className="section-right">
                <div className="card">
                    {/* <p>Login with:</p>
                    <hr/> */}
                    <div className="image-wrapper" onClick={login}>
                        <img src={googleImage} alt="Google" height="50" />
                        <span>Sign in with Google</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
