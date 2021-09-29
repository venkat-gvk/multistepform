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
        <div>
          <input
            name="name"
            value={user.firstname}
            placeholder="FirstName"
            required
            onChange={handleChange}
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.lastname}
            placeholder="LastName"
            required
            onChange={handleChange}
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.education}
            placeholder="Education"
            required
            onChange={handleChange}
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="name"
            value={user.country}
            placeholder="Country"
            required
            onChange={handleChange}
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <button
            onClick={handleNext}
            className="w-full hover:bg-green-700 px-3 py-1 text-center rounded text-white bg-green-500 mb-2">
            Next
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
