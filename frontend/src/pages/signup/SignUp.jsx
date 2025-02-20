import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-purple-500'>
                    Chatter <span className='text-gray-300'> Kaydol</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-white label-text'>Adınız</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Ecem Dürger'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName} // ✅ Hata düzeltildi (fullname -> fullName)
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-white label-text'>Kullanıcı Adınız</span>
                        </label>
                        <input
                            type='text'
                            placeholder='ecemm'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base text-white label-text'>Şifre</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Şifreyi Giriniz'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base text-white label-text'>Şifre Tekrar</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Şifreyi Tekrar Giriniz'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link
                        to={"/login"}
                        className='text-sm hover:underline text-blue-50
                         hover:text-purple-500 mt-2 inline-block'
                    >
                        Hesabınız var mı?
                    </Link>

                    <div>
                        <button
                            className='btn btn-block bg-purple-500 hover:bg-purple-700 border border-gray-700 btn-sm mt-2 text-white'
                            disabled={loading} // ✅ Kayıt olurken buton disable ediliyor
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Kaydol"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;



//STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox"

// const SignUp = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className='text-3xl font-semibold text-center text-purple-200'> Chatter
//                     <span className="text-purple-200"> Kaydol</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-blue-100 label-text">Adınız</span>
//                         </label>
//                         <input type="text" placeholder="Ecem Dürger" className="w-full input input-bordered input-success h-10" />
//                     </div>
//                     <label className="label p-2">
//                         <span className="text-blue-100 input-successlabel-text">Kullanıcı Adınız</span>
//                     </label>
//                     <input type="text" placeholder="ecemm" className="w-full input input-bordered input-success h-10" />
//                     <div>
//                     </div>
//                     <div>
//                         <label className="label">
//                             <span className="text-blue-100 label-text">Şifre</span>
//                         </label>
//                         <input type="password"
//                             placeholder="Şifreyi Giriniz"
//                             className="w-full input input-success input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label">
//                             <span className="text-blue-100 label-text">Şifre Tekrar</span>
//                         </label>
//                         <input type="password"
//                             placeholder="Şifreyi Tekrar Giriniz"
//                             className="w-full input input-success input-bordered h-10" />
//                     </div>

//                     <GenderCheckbox />

//                     <a href="#" className="text-blue-50 text-sm hover: underline hover:text-blue-200 mt-2 inline-block">Hesabınız var mı?</a>

//                     <div>
//                         <button className="btn btn-block bg-purple-500 hover:bg-purple-700 btn-sm mt-2 text-blue-100">Kaydol</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp