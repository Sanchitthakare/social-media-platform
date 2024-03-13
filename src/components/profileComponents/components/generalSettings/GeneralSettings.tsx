import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { LiaCheckSolid } from "react-icons/lia";

type Props = {};

const GeneralSettings = (props: Props) => {
  const { data: session } = useSession();
  const [tagline, setTagline] = React.useState(
    `AI | Data Science | Full Stack Developer | MERN Stack | Next.js | Java | Python `
  );
  const [bio, setBio] =
    React.useState(`As a Product Engineer Intern at Highradius, I apply my expertise in Python and Machine Learning to create predictive models that enable data-driven decision-making. I also leverage my skills in React, Node.js, and MongoDB to develop scalable applications that offer innovative and efficient solutions. 

  I am pursuing a Bachelor of Technology degree in Computer Science from KIIT University, where I have acquired a strong academic background and a solid foundation in computer science. I have also obtained multiple certifications on HackerRank, validating my proficiency in problem-solving, data structures, algorithms, and React. 
  
  I am passionate about learning new technologies and staying up-to-date with the latest industry trends. I have delivered impactful projects, such as a Student Tracking System, a Portfolio Web Application, and a Personal Code Blog Web Application, demonstrating my technical prowess and creativity. 
  
  I am an adaptable and proactive professional who thrives in fast-paced, collaborative environments. I effectively communicate with diverse teams and stakeholders in both Hindi and English. I am always open to new opportunities and collaborations within the field of Data Science and Full Stack Development.`);
  const [image, setImage] = React.useState(session?.user.image as string);
  const [coverImage, setCoverImage] = React.useState("");

  const [editTagline, setEditTagline] = React.useState(false);
  const [editBio, setEditBio] = React.useState(false);
  const [showMore, setshowMore] = React.useState(false);

  return (
    <div className=" bg-blue-50 rounded-t-xl w-full">
      <div className="relative z-0">
        <Image
          src="https://source.unsplash.com/random/nature"
          alt="Cover-Image"
          width={1000}
          height={1000}
          className="w-full h-52 object-cover rounded-t-xl "
        />
        <div className="absolute -bottom-14 left-10 border-8 border-white rounded-full">
          <Image
            src={
              session?.user.image
                ? image
                : "https://source.unsplash.com/random/user"
            }
            alt="Cover-Image"
            width={400}
            height={400}
            className="md:w-40 md:h-40 h-28 w-28 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="p-8 pt-20 ">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold">{session?.user.name}</h1>
          <MdVerified className="text-blue-500" size={25} />
          {/* <h3>(He/Him)</h3> */}
        </div>
        <div className="pt-2  text-wrap flex flex-col">
          {editTagline && (
            <div className="flex space-x-4 items-center">
              <input
                type="text"
                placeholder="Tag line or title"
                className="bg-transparent border-b-2  border-black mb-2 w-80"
                value={tagline}
              />
              <span>
                <LiaCheckSolid
                  size={30}
                  className="bg-blue-300 p-1.5 rounded-full cursor-pointer"
                />
              </span>
              <span onClick={() => setEditTagline(false)}>
                <RxCross2
                  size={30}
                  className="bg-blue-300 p-1.5 rounded-full cursor-pointer"
                />
              </span>
            </div>
          )}
          {!editTagline && (
            <div className="flex space-x-4 items-center">
              <span className="w-80">{tagline}</span>
              <span onClick={() => setEditTagline(true)}>
                <MdOutlineEdit
                  size={30}
                  className="bg-blue-300 p-1.5 rounded-full cursor-pointer"
                />
              </span>
            </div>
          )}
        </div>

        <div className="pt-8  text-wrap flex flex-col">
          <div className="flex space-x-4 mb-2 items-center">
            <span className="text-xl font-semibold">About</span>
            {!editBio && (
              <span onClick={() => setEditBio(true)}>
                <MdOutlineEdit
                  size={30}
                  className="bg-blue-300 p-1.5 rounded-full cursor-pointer"
                />
              </span>
            )}
            {editBio && (
              <>
                <span>
                  <LiaCheckSolid
                    size={30}
                    className="bg-blue-300 p-1.5 rounded-full cursor-pointer"
                  />
                </span>
                <span onClick={() => setEditBio(false)}>
                  <RxCross2
                    size={30}
                    className="bg-blue-300 p-1.5 rounded-full cursor-pointer"
                  />
                </span>
              </>
            )}
          </div>
          {editBio && (
            <div>
              <textarea
                placeholder="Tag line or title"
                className="bg-transparent border-b-2  border-black mb-2 w-full"
                value={bio}
                rows={12}
              />
            </div>
          )}
          {!editBio && (
            <div>
              <span className="">
                {showMore ? bio : `${bio.substring(0, 250)}...`}
              </span>
              <button
                onClick={() => setshowMore(!showMore)}
                className="text-blue-500"
              >
                {showMore ? "Show Less" : "Read More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
