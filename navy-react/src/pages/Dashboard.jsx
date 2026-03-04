import { useAuth } from "../auth/AuthContext";
import API from "../api/axios";

export default function Dashboard() {
  const { user } = useAuth();

  const logout = async () => {
    await API.post("/logout").catch(() => {});
    window.location.href = "http://localhost:5173";
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white p-6">

      <div className="bg-white/10 border border-cyan-400 rounded-xl px-6 py-4 flex justify-between items-center backdrop-blur-lg mb-6">
        <h1 className="text-lg font-semibold tracking-wider">
          ⚓ WELCOME, {user?.username?.toUpperCase()}
        </h1>

        <button
          onClick={logout}
          className="bg-cyan-500 px-4 py-1 rounded hover:bg-cyan-600"
        >
          Logout
        </button>
      </div>


      <div className="rounded-2xl overflow-hidden border border-cyan-400 mb-6">
        <img
          src="https://uc-strapi-prod.s3.ap-south-1.amazonaws.com/INS_Mumbai_D62_at_sea_1_edited_ed525f2cfc.png"
          className="w-full h-[350px] object-cover  "
        />

        <div className="p-6 bg-gradient-to-t from-[#0a192f] to-transparent -mt-40">
          <h2 className="text-3xl font-bold text-cyan-300">
            INDIAN NAVY: GUARDIANS OF THE OCEAN
          </h2>
          <p className="text-gray-800 ">Sham No Varunah ⚓</p>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-6 mb-6">


        <div className="bg-white/10 border border-cyan-400 rounded-xl p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            ABOUT THE INDIAN NAVY
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            The Indian Navy is the maritime branch of the Indian Armed Forces.
            It safeguards the nation’s maritime borders, ensures secure sea
            lines, and maintains combat-ready naval forces including aircraft
            carriers, destroyers, submarines, and patrol vessels.
          </p>
        </div>


        <div className="bg-white/10 border border-cyan-400 rounded-xl p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            MISSION & VISION
          </h3>

          <p className="text-gray-300 text-sm">
            <b>MISSION:</b> Protect maritime interests & deter aggression.
          </p>

          <p className="text-gray-300 text-sm mt-2">
            <b>VISION:</b> Combat-ready, credible & future-ready naval force.
          </p>
        </div>

      </div>


      <div className="bg-white/10 border border-cyan-400 rounded-xl p-6 backdrop-blur-lg">

        <h3 className="text-center text-xl font-bold text-cyan-400 mb-6">
          GLOBAL NAVAL COMPARISON
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div>
            <h4 className="text-gray-400">ACTIVE PERSONNEL</h4>
            <p className="text-3xl text-cyan-400 font-bold">150,000+</p>
          </div>

          <div>
            <h4 className="text-gray-400">AIRCRAFT CARRIERS</h4>
            <p className="text-3xl text-cyan-400 font-bold">02</p>
          </div>

          <div>
            <h4 className="text-gray-400">SUBMARINES</h4>
            <p className="text-3xl text-cyan-400 font-bold">18</p>
          </div>

        </div>
      </div>

    </div>
  );
}
