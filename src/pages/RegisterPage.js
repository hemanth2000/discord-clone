import { Link } from "react-router-dom";

function RegisterPage(props) {
  return (
    <div className='bg-[url("/assets/login_bg.svg")] bg-cover w-screen h-screen flex justify-center items-center'>
      <div className="flex flex-col w-[35%] bg-[#36393f] p-5 rounded animate-[pushdown_0.5s_ease-in-out_1]">
        <h3 className="text-white text-center mb-1 font-bold">Welcome back!</h3>
        <div className="w-full flex flex-col">
          {["Email", "Username", "Password"].map((text) => (
            <div>
              <p className="uppercase text-[#b9bbbe] mt-1 text-[9px] font-bold">
                {text}
              </p>
              <input className="bg-[#303339] text-[#b9bbbe] text-[12px] w-full rounded-sm px-1 py-[5px] my-1 border-[1px] transition-colors outline-none border-[#23272a] hover:border-black focus:border-[hsl(197,100%,47.8%)]" />
            </div>
          ))}

          <div>
            <p className="uppercase text-[#b9bbbe] mt-1 text-[9px] font-bold">
              DATE OF BIRTH
            </p>
            <input
              type="date"
              className="bg-[#303339] text-[#b9bbbe] text-[12px] w-full rounded-sm px-1 py-[5px] my-1 border-[1px] transition-colors outline-none border-[#23272a] hover:border-black focus:border-[hsl(197,100%,47.8%)]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#5865f2] text-white text-[12px] rounded-sm py-[5px] my-1"
          >
            Continue
          </button>
        </div>

        <Link
          to="/login"
          className="text-[hsl(197,100%,47.8%)] mb-4 text-[9px] hover:underline"
        >
          Already have an account?
        </Link>

        <span className="text-[8px] text-[#dcddde]">
          By registering, you agree to Discord's{" "}
          <Link to="/" className="text-[hsl(197,100%,47.8%)] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/" className="text-[hsl(197,100%,47.8%)] hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
