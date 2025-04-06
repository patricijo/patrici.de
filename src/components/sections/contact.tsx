import { ContactForm } from "../Form";

export const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <div className="flex md:flex-1/3 md:min-h-screen items-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio!</h1>
      </div>
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4">
        <ContactForm />
      </div>
    </div>
  );
};
