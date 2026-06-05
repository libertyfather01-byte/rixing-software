"use server";

import prisma from "@/lib/prisma";

export async function submitContactRequest(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { error: "Name, email, and message are required." };
    }

    await prisma.contactRequest.create({
      data: {
        name,
        email,
        company,
        service,
        message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact request:", error);
    return { error: "Failed to submit request. Please try again." };
  }
}
