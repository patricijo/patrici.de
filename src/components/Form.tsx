"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";
import { Button } from "./ui";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    setStatus(result.message);
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: FormData = {
      name: form.senderName.value,
      email: form.email.value,
      message: form.message.value,
    };
    await handleSubmit(data);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="senderName"
          placeholder="Name"
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="border p-2 mb-2 w-full"
        />
        <button type="submit">
          <Button>Send</Button>
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
