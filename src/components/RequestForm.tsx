
"use client";

import { useActionState } from "react";
import { submitRequest } from "@/app/actions";

const initialState = {
  message: "",
  success: false,
};

export default function RequestForm() {
  const [state, formAction, pending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form action={formAction}>
      <div>
        <label>Ваше ім'я:</label>
        <input
          type="text"
          name="name"
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
        />
      </div>

      <div>
        <label>Назва книги:</label>
        <input
          type="text"
          name="book"
          required
        />
      </div>

      <button type="submit" disabled={pending}>
        {pending ? "Надсилання..." : "Надіслати заявку"}
      </button>

      {state.message && <p>{state.message}</p>}
    </form>
  );
}
