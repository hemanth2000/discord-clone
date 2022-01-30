import { Link } from "react-router-dom";

function LoginPage(props) {
  return (
    <div className='bg-[url("/assets/login_bg.svg")] bg-cover w-screen h-screen flex justify-center items-center'>
      <div className="flex w-3/5 bg-[#36393f] p-5 rounded animate-[pushdown_0.5s_ease-in-out_1]">
        <div className="form-div w-3/5 flex flex-col">
          <h3 className="text-white text-center mb-1 font-bold">
            Welcome back!
          </h3>
          <p className="text-[#dcddde] text-center mb-1 text-[10px]">
            We're so excited to see you again!
          </p>
          {["Email or Phone Number", "Password"].map((text) => (
            <div>
              <p className="uppercase text-[#b9bbbe] mt-1 text-[9px] font-bold">
                {text}
              </p>
              <input className="bg-[#303339] text-[#b9bbbe] text-[12px] w-[90%] rounded-sm px-1 py-[5px] my-1 border-[1px] transition-colors outline-none border-[#23272a] hover:border-black focus:border-[hsl(197,100%,47.8%)]" />
            </div>
          ))}
          <Link to="/" className="text-[hsl(197,100%,47.8%)] text-[9px]">
            Forgot your password?
          </Link>
          <button
            type="submit"
            className="bg-[#5865f2] text-white w-[90%] text-[12px] rounded-sm py-[5px] my-1"
          >
            Login
          </button>
          <span className="text-[#72767D] text-[9px]">
            Need an account?
            <Link
              to="/register"
              className="text-[hsl(197,100%,47.8%)] text-[9px] ml-1"
            >
              Register
            </Link>
          </span>
        </div>

        <div className=" w-2/5 qr-div flex flex-col items-center">
          <div className="w-[100px] h-[100px] bg-white p-1 rounded-sm mt-10">
            <img src={require("../assets/qr_code.png")} alt="qrcode" />
          </div>
          <div className="flex flex-col w-4/5 items-center">
            <span className="text-white mt-2 text-[] font-bold">
              Log in with QR Code
            </span>
            <span className="text-[#dcddde] text-[10px] mt-2 text-center">
              Scan this with the Discord mobile app to log in instantly.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
