import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({ username, password })
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-purple-500'> Chatter <br />
                    <span className="text-gray-300">Giriş Yap</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-blue-100 label-text">Kullanıcı Adı</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Kullanıcı Adı Giriniz"
                            className="input input-bordered input-success w-full max-w-xs"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-blue-100 label-text">Şifre</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Şifre Giriniz"
                            className="input input-bordered input-success w-full max-w-xs"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to="/signup" className="text-blue-50 text-sm hover: underline hover:text-blue-200 mt-2 inline-block">Hesabınız yok mu?</Link>

                    <div>
                        <button
                            className="btn btn-block bg-purple-500 hover:bg-purple-700 btn-sm mt-2 text-blue-100"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                "Giriş Yap"
                            )}
                        </button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login



//STARTER CODE FOR THIS FILE

// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
//                 <h1 className='text-3xl font-semibold text-center text-purple-500'> Chatter <br />
//                     <span className="text-purple-500">Giriş Yap</span>
//                 </h1>
//                 <form >
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-blue-100 label-text">Kullanıcı Adı</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Kullanıcı Adı Giriniz"
//                             className="input input-bordered input-success w-full max-w-xs" />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-blue-100 label-text">Şifre</span>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Şifre Giriniz"
//                             className="input input-bordered input-success w-full max-w-xs" />
//                     </div>

//                     <a href="#" className="text-blue-50 text-sm hover: underline hover:text-blue-200 mt-2 inline-block">Hesabınız yok mu?</a>

//                     <div>
//                         <button className="btn btn-block bg-purple-500 hover:bg-purple-700 btn-sm mt-2 text-blue-100"> Giriş Yap</button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Login