export default function UserDetails(props) {
  const { user, nextStep, previousStep, handleChange } = props;

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <div>
      <form>
        <div className="lg:grid lg:grid-cols-2 lg:space-x-3">
          <div>
            <input
              name="firstname"
              value={user.firstname}
              placeholder="FirstName"
              required
              onChange={handleChange}
              className="md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <input
              name="lastname"
              value={user.lastname}
              placeholder="LastName"
              required
              onChange={handleChange}
              className="md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <input
              name="education"
              value={user.education}
              placeholder="Education"
              required
              onChange={handleChange}
              className="lg:relative lg:right-3 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <input
              name="country"
              value={user.country}
              placeholder="Country"
              required
              onChange={handleChange}
              className="md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="w-full lg:w-[50%] hover:bg-green-700 px-3 py-1 text-center rounded text-white bg-green-500 mb-2">
            Next
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handlePrevious}
            className="w-full lg:w-[50%] hover:bg-purple-700 px-3 py-1 text-center rounded text-white bg-purple-500">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
