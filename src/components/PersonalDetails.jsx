export default function PersonalDetails(props) {
  const { user, nextStep, handleChange } = props;

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form>
        <div className="lg:grid grid-cols-2 lg:space-x-3">
          <div>
            <input
              name="name"
              value={user.name}
              placeholder="Name"
              required
              onChange={handleChange}
              className="md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <input
              name="email"
              value={user.email}
              placeholder="Email"
              required
              onChange={handleChange}
              className="md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="w-full lg:w-[50%] hover:bg-green-700 px-3 py-1 text-center rounded text-white bg-green-500">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
