import Notfound from "/NotFound.jpeg";

function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center   bg-black " >
      <img className="w-full h-[100vh]" src={Notfound} alt="" />
    </div>
  )
}

export default NotFound;
