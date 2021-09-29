export default function Confirmation(props) {
  const { user, nextStep, previousStep, setUser } = props;

  const handleNext = (e) => {
    e.preventDefault();
    setUser({
      name: "",
      email: "",
      firstname: " ",
      lastname: " ",
      education: " ",
      country: "",
    });
    nextStep();
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form>
        <div>
          <input
            name="name"
            value={user.name}
            placeholder="Name"
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="email"
            value={user.email}
            placeholder="Email"
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.firstname}
            placeholder="FirstName"
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.lastname}
            placeholder="LastName"
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.education}
            placeholder="Education"
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.country}
            placeholder="Country"
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div className="mb-2">
          <button
            onClick={handleNext}
            className="w-full hover:bg-green-700 px-3 py-1 text-center rounded text-white bg-green-500">
            Confirm
          </button>
        </div>

        <div>
          <button
            onClick={handlePrevious}
            className="w-full hover:bg-purple-700 px-3 py-1 text-center rounded text-white bg-purple-500">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
