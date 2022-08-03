import PropTypes from "prop-types";
const Spinner = ({
    spinnerClassname='',
    className='',
}) => {
    return (
        <>
        <div className={`flex z-10 justify-center align-center p-auto  absolute left-1/2 top-1/2 max-h-10 w-fit h-auto bg-transparent ${className}` }>
        
          <i className= {`animate-spin fa-solid fa-spinner bg-transparent ${spinnerClassname}`}></i>
        </div>
        <div className="bg-gray-400 dd-overlay opacity-50 w-full h-full absolute top-0 left-0  backdrop-blur-md backdrop-contrast-125">

        </div>
</>
     );
};

Spinner.propTypes = {
    spinnerClassname:PropTypes.string,
    className:PropTypes.string
};

 
export default Spinner;
