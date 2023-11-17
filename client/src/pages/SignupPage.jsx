import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="md:min-h-[600px]">
      <div className="md:my-20">
        <h1 className="md:text-4xl text-2xl text-center">
          Welcome To The<span className="text-blue-500">B</span>log.
          <span className="text-blue-500">.</span>.
        </h1>
        <div className="w-full">
          <div className="md:max-w-[85rem] md:w-full md:mx-auto">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
