import { useState } from "react";
import UserDetails from "./UserDetails";
import Confirmation from "./Confirmation";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    name: "",
    email: "",
    firstname: "",
    lastname: "",
    education: "",
    country: "",
  });

  const previousStep = () => {
    setStep((step) => {
      return step - 1;
    });
  };

  const nextStep = () => {
    setStep((step) => {
      return step + 1;
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <PersonalDetails
          user={user}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <UserDetails
          user={user}
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Confirmation
          user={user}
          nextStep={nextStep}
          previousStep={previousStep}
          setUser={setUser}
        />
      );
    case 4:
      return <Success />;

    default:
    // do nothing
  }
}
