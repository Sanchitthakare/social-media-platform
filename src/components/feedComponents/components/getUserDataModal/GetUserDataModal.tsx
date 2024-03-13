import React from "react";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const profileTypeOptions = [
  { value: "student", label: "Student" },
  { value: "professional", label: "Professional" },
  { value: "investor", label: "Investor" },
];

const GetUserDataModal = ({ setShowModal }: Props) => {
  const [selectedGender, setSelectedGender] = React.useState("");
  const [selectedProfileType, setSelectedProfileType] = React.useState("");
  const [next, setNext] = React.useState(false);

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleProfileType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfileType(event.target.value);
  };

  const handleNext = () => {
    setNext(true);
  };

  const handleBack = () => {
    setNext(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedGender === "") {
      toast.error("Please select your Gender");
      return;
    }
    if (selectedProfileType === "") {
      toast.error("Please select your Profile Type");
      return;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog">
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg border">
          {!next && (
            <>
              <div className="">
                <span className="md:text-3xl sm:text-2xl text-lg font-bold">
                  Select your Profile Type
                </span>
              </div>

              <div className="mt-6">
                <form
                  className="flex flex-col justify-center items-center gap-6"
                  onSubmit={handleNext}
                >
                  <div className="flex space-x-4 w-full">
                    <select
                      name="gender"
                      id="gender"
                      value={selectedGender}
                      onChange={handleGenderChange}
                      className="p-2 rounded-lg w-1/3 bg-gray-200"
                      required
                    >
                      <option value="" disabled>
                        I am a/an
                      </option>
                      {genderOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <select
                      name="profileType"
                      id="profileType"
                      value={selectedProfileType}
                      onChange={handleProfileType}
                      className="p-2 rounded-lg w-2/3 bg-gray-200"
                      required
                    >
                      <option value="" disabled>
                        Profile Type
                      </option>
                      {profileTypeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg w-full m-2"
                  >
                    Next
                  </button>
                </form>
              </div>
            </>
          )}
          {next && (
            <>
              <div className="flex justify-start flex-col gap-4 p-8 ">
                <span className="md:text-4xl sm:text-3xl text-xl font-bold flex gap-3 items-center ">
                  <span
                    className="hover:bg-gray-200 p-2 rounded-full cursor-pointer"
                    onClick={handleBack}
                  >
                    <IoArrowBackOutline />
                  </span>
                  <span> One Final Step!</span>
                </span>
                <span>Hang on tight! We are almost done!</span>
              </div>

              <div className="  bg-gray-200  w-full bottom-8 p-8 rounded-xl  ">
                <div className="flex flex-col gap-4">
                  <span className="text-xl font-bold">
                    Do you want us to Import data from your LinkedIn Profile ?
                  </span>
                  <span>
                    Do you want us to import Data from your LinkedIn Profile?
                    This will import your Name, Picture, Cover Image, Title,
                    Education, Work Experience & More?
                  </span>
                </div>
                <div className="flex mt-6">
                  <button
                    className="bg-blue-400 p-2 rounded-lg w-1/2 m-2"
                    onClick={() => {
                      setShowModal(false)
                    }}
                  >
                    Do Not Import
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg w-1/2 m-2"
                  >
                    Agree & Join
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetUserDataModal;
