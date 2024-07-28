import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

export const showToast = (msg: any, type = 'default') => {
  switch (type) {
    case "success":
        toast.success(msg);
        break;
    case "error":
        toast.error(msg);
        break;
    default:
        toast(msg);
        break;
  }
};

const Notify = () => {
    return <ToastContainer autoClose={2000} />;
}

export default Notify;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// export const showToast = (msg: any, type = 'default') => {
//   switch (type) {
//     case "success":
//       toast.success(msg);
//       break;
//     case "error":
//       toast.error(msg);
//       break;
//     default:
//       toast(msg);
//       break;
//   }
// };

// const Notify = () => {
//   return <ToastContainer autoClose={2000} />;
// };

// const App = () => {
//   const handleClick = () => {
//     showToast("This is a default toast message!");
//     showToast("This is a success message!", "success");
//     showToast("This is an error message!", "error");
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Show Toast</button>
//       <Notify />
//     </div>
//   );
// };

// export default Notify;

// ReactDOM.render(<App />, document.getElementById('root'));
