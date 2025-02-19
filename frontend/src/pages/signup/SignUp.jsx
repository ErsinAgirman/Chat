import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-purple-200'> Chatter
                    <span className="text-purple-200"> Kaydol</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-blue-100 label-text">Adınız</span>
                        </label>
                        <input type="text" placeholder="Ecem Dürger" className="w-full input input-bordered input-success h-10" />
                    </div>
                    <label className="label p-2">
                        <span className="text-blue-100 input-successlabel-text">Kullanıcı Adınız</span>
                    </label>
                    <input type="text" placeholder="ecemm" className="w-full input input-bordered input-success h-10" />
                    <div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-blue-100 label-text">Şifre</span>
                        </label>
                        <input type="password"
                            placeholder="Şifreyi Giriniz"
                            className="w-full input input-success input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-blue-100 label-text">Şifre Tekrar</span>
                        </label>
                        <input type="password"
                            placeholder="Şifreyi Tekrar Giriniz"
                            className="w-full input input-success input-bordered h-10" />
                    </div>

                    <GenderCheckbox />

                    <a href="#" className="text-blue-50 text-sm hover: underline hover:text-blue-200 mt-2 inline-block">Hesabınız var mı?</a>

                    <div>
                        <button className="btn btn-block bg-purple-500 hover:bg-purple-700 btn-sm mt-2 text-blue-100">Kaydol</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp


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