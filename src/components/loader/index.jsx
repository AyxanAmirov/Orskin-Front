import spin from "../../assets/image/spin.webp"

function Loader() {
  return (
    <div className='z-[15] bg-[#fff] h-[100vh] fixed inset-0 flex justify-center items-center'>
      <img src={spin} alt="Spinner"
        width={"40px"} height={"40px"} loading="lazy"
      />
    </div>
  )
}

export default Loader