
"use server";

export async function submitRequest(
  prevState: { message: string; success: boolean },
  formData: FormData
) {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const book = formData.get("book")?.toString().trim() || "";

  if (!name || !email || !book) {
    return {
      message: "Заповніть усі поля.",
      success: false,
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      message: "Введіть правильну електронну пошту.",
      success: false,
    };
  }

  return {
    message: "Заявку успішно надіслано!",
    success: true,
  };
}
