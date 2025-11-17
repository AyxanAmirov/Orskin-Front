import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F8FAF9] to-[#E9F4F2] font-[Montserrat] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#B3D6D0]/40 rounded-full blur-[120px] top-[-150px] left-[-150px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#7AB8AC]/30 rounded-full blur-[100px] bottom-[-100px] right-[-100px]"></div>

      {/* Card */}
      <div
        className="relative z-10 bg-white/80 backdrop-blur-[10px] border border-[#E5E9E8] shadow-xl rounded-[20px] w-[90%] max-w-[420px] p-[40px] text-center"
      >
        <h1 className="text-[28px] font-[700] text-[#7AB8AC] mb-[10px]">
          Welcome Back
        </h1>
        <p className="text-[#777] text-[15px] mb-[35px]">
          Log in to access your Orskin Admin Panel
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-[14px] text-[#666] font-medium mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-[#ccc] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#7AB8AC] transition"
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-[14px] text-[#666] font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full border border-[#ccc] rounded-[10px] px-4 py-3 text-[15px] focus:outline-none focus:border-[#7AB8AC] transition"
            />
          </div>
          <button
            type="submit"
            className="bg-[#B3D6D0] hover:bg-[#A5CCC4] text-white font-[600] text-[16px] rounded-[10px] py-[12px] mt-[10px] transition-all duration-300 shadow-md hover:-translate-y-[2px]"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
