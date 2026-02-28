"use server";

export async function submitContactForm(formData: FormData) {
  // Simulate an API call or email send
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real application, you would parse and validate the formData here,
  // then send it to a database or an email service.

  return { success: true, message: "Application received successfully." };
}
