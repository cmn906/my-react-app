// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;











import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f828857f9d34e5a3b5fefe58eae6f39cbd3ef1958316f35c7c4d514b04b03f?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
          alt="Company logo"
          className="logo"
        />
      </div>
      <nav className="nav">
        <div className="nav-content">
          <div className="banner-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d25d3fe02a4ca158071c6d9da5bf4aef77b5090f750dacd84a193c1e4edff?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
              alt="Navigation banner"
              className="banner"
            />
          </div>
          <div className="nav-links">
            <a href="#mentors" className="nav-link">Mentors</a>
            <a href="#profile" className="nav-link">My Profile</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;













// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex gap-5 flex-wrap">
//       <div className="flex flex-col w-[22%]">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f828857f9d34e5a3b5fefe58eae6f39cbd3ef1958316f35c7c4d514b04b03f?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
//           alt="Company logo"
//           className="object-contain max-w-full aspect-[1.67] w-[250px] mt-10"
//         />
//       </div>
//       <nav className="flex flex-col w-[78%]">
//         <div className="flex flex-col grow mt-10">
//           <div className="flex gap-5 flex-col">
//             <div className="flex flex-col w-[53%]">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d25d3fe02a4ca158071c6d9da5bf4aef77b5090f750dacd84a193c1e4edff?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
//                 alt="Navigation banner"
//                 className="object-contain grow w-full aspect-[1.73] mt-10"
//               />
//             </div>
//             <div className="flex flex-col ml-5 w-[21%]">
//               <a href="#mentors" className="mt-8 text-4xl text-white" tabIndex={0}>
//                 Mentors
//               </a>
//             </div>
//             <div className="flex flex-col ml-5 w-[26%]">
//               <a href="#profile" className="mt-8 text-4xl text-white" tabIndex={0}>
//                 My Profile
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';

// function LoginForm() {
//   return (
//     <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//       <form className="flex flex-col w-full text-xl font-semibold whitespace-nowrap max-md:mt-10 max-md:max-w-full">
//         <h1 className="self-start text-4xl text-white">Login</h1>
//         <label htmlFor="email" className="self-start mt-8 text-white max-md:ml-2">
//           E-mail
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="flex shrink-0 mt-1.5 rounded-xl bg-slate-800 h-[50px] max-md:max-w-full"
//           required
//         />
//         <label htmlFor="password" className="self-start mt-10 text-white max-md:ml-2">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="flex shrink-0 mt-1.5 rounded-xl bg-slate-800 h-[50px] max-md:max-w-full"
//           required
//         />
//         <div className="flex gap-5 justify-between mx-8 mt-10 max-md:mr-2.5 max-md:max-w-full">
//           <button type="button" className="px-16 py-5 text-white rounded-3xl border border-solid bg-slate-800 border-zinc-100 max-md:px-5">
//             Register
//           </button>
//           <button type="submit" className="px-16 py-5 rounded-3xl border border-solid bg-zinc-300 border-slate-800 text-slate-800 max-md:px-5">
//             Login
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default LoginForm;

// import React from 'react';

// function Header() {
//   return (
//     <header className="flex gap-5 max-md:flex-col">
//       <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f828857f9d34e5a3b5fefe58eae6f39cbd3ef1958316f35c7c4d514b04b03f?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" alt="" className="object-contain shrink-0 max-w-full aspect-[1.67] w-[250px] max-md:mt-10" />
//       </div>
//       <nav className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
//         <div className="grow max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             <div className="flex flex-col w-[52%] max-md:ml-0 max-md:w-full">
//               <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d25d3fe02a4ca158071c6d9da5bf4aef77b5090f750dacd84a193c1e4edff?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" alt="" className="object-contain grow w-full aspect-[1.73] max-md:mt-10" />
//             </div>
//             <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
//               <h2 className="mt-8 text-4xl font-semibold text-white max-md:mt-10">Mentors</h2>
//             </div>
//             <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
//               <h2 className="mt-8 text-4xl font-semibold text-white max-md:mt-10">My Profile</h2>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;