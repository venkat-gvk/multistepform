export default function PersonalDetails(props) {
  const { user, nextStep, handleChange } = props;

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form>
        <div>
          <input
            name="name"
            value={user.name}
            placeholder="Name"
            required
            onChange={handleChange}
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <input
            name="email"
            value={user.email}
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-56 md:w-96 h-4 p-4 rounded mb-3 focus:outline-none focus:ring focus:ring-green-200"></input>
        </div>

        <div>
          <button
            onClick={handleNext}
            className="w-full hover:bg-green-700 px-3 py-1 text-center rounded text-white bg-green-500">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
