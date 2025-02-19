const GenderCheckbox = () => {
    return (
        <div className="flex justify-center gap-6 mt-2">
            {/* Erkek Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox border-slate-900" />
                <span className="label-text text-blue-100">Erkek</span>
            </label>

            {/* Kadın Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox border-slate-900" />
                <span className="label-text text-blue-100">Kadın</span>
            </label>
        </div>
    );
};

export default GenderCheckbox;


//STARTER CODE FOR THIS FILE

// const GenderCheckbox = () => {
//     return (
//         <div className="flex justify-center gap-6 mt-2">
//             {/* Erkek Checkbox */}
//             <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="checkbox border-slate-900" />
//                 <span className="label-text text-blue-100">Erkek</span>
//             </label>

//             {/* Kadın Checkbox */}
//             <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="checkbox border-slate-900" />
//                 <span className="label-text text-blue-100">Kadın</span>
//             </label>
//         </div>
//     );
// };

// export default GenderCheckbox;
