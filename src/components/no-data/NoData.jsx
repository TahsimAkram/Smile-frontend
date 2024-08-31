import { assets } from "../../assets/assets";
const NoData = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="w-full sm:w-80 flex flex-col items-center">
      <img
        className="w-full object-cover"
        src={assets.no_data_img}
        alt=""
      />
      <p>No Data Found</p>
    </div>
  </div>
  )
}

export default NoData