import { useSelector } from "react-redux";
import General from "./components/General";
import Modal from "./components/Modal";
const ProfileOverview = () => {
  // Call for api
  const data = useSelector((state) => state.UserSlice.data);
  if (!data) {
    return <>Please Wait for data</>;
  }
  return (
    <div className="flex w-full flex-col gap-5">
      {/* <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div> */}
      {/* all project & ... */}

      {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div> */}

      <General data={data} />

      {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
    </div>
  );
};

export default ProfileOverview;
