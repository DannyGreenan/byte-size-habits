export default function Login() {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-base-100 font-nunito font-extrabold"
      style={{
        backgroundImage: `url('/background.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="w-full md:w-1/2 flex justify-center">
        <form
          onSubmit={console.log("Submit")}
          className="p-8 bg-base-200 rounded-lg shadow-lg space-y-6 w-full max-w-md h-full bg-opacity-80 backdrop-blur-lg">
          <div
            className="w-full h-32 bg-no-repeat bg-center rounded-t-lg"
            style={{
              backgroundImage: `url('/login.png')`,
              backgroundSize: "cover",
              height: "35vh",
              borderRadius: "0.5rem",
            }}></div>

          <div className="form-control w-full">
            <label htmlFor="enter_username" className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              id="enter_username"
              type="text"
              onChange={console.log("username input")}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-outline btn-accent w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
