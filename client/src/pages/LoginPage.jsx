
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="md:min-h-[600px] min-h-[700px]">
      <div className="md:my-20">
        <h1 className="md:text-4xl text-2xl text-center my-10">
          Login To Your Account.<span className="text-blue-500">.</span>.
        </h1>
        <div className="w-full">
          <div className="md:max-w-[85rem] md:w-full md:mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
