import { ContactForm } from "../Form";

export const Contact = () => {
  return (
    <div className="flex">
      <div className="flex-1/3 items-center flex min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio!</h1>
      </div>
      <div className="flex-2/3 items-center flex min-h-screen">
        <ContactForm />
      </div>
    </div>
  );
};
