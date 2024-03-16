import React, { useState } from "react";
import Link from "next/link";

const HomePageSigin = ({
  handleLogin,
  setEmail,
  setPassword,
  email,
  password,
}) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !email || !role || !whatsapp || !agreement) {
      setError("Please fill in all the required fields.");
      return;
    }
    handleLogin();
  };

  return (
    <div className="p-2 mt-8">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col-reverse ">
        <div className="md:w-1/2 md:p-0 p-2">
          <div className="mt-6 bg-white rounded-xl p-6">
            <h2 className="text-3xl font-semibold mb-4">
              Pre - Register in to ForeTeach
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="p-2 rounded-lg bg-gray-200"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
                className="p-2 rounded-lg bg-gray-200"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex flex-col md:flex-row gap-4">
                <select
                  className="p-2 rounded-lg bg-gray-200 flex-1"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="Investor">Investor</option>
                  <option value="Startup">Startup</option>
                </select>

                <input
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                  placeholder="WhatsApp Number"
                  className="p-2 rounded-lg bg-gray-200 flex-1"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>

             

              <input
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="LinkedIn URL"
                className="p-2 rounded-lg bg-gray-200"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
               <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                />
                <span className="ml-2">Agreement</span>
              </label>

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="bg-blue-400 text-white p-2 rounded-lg mt-6"
              >
                Register
              </button>
            </form>
            
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center pl-8">
    
        </div>
      </div>
    </div>
  );
};

export default HomePageSigin;
