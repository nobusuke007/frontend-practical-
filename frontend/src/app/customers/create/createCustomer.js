"use server";
import { revalidatePath } from "next/cache";

const createCustomer = async (formData) => {
  const creating_customer_name = formData.get("customer_name");
  const creating_customer_id = formData.get("customer_id");
  const creating_age = formData.get("age");
  const creating_gender = formData.get("gender");

  //入力チェック、全ての項目の入力を必須とする

  if (
    creating_customer_name &&
    creating_customer_id &&
    creating_age &&
    creating_gender
  ) {
  } else {
    throw new Error("All form of field(customer_name, customer_id, age, gender) is needed to be filled out.");
  }

  const body_msg = JSON.stringify({
    customer_name: creating_customer_name,
    customer_id: creating_customer_id,
    age: creating_age,
    gender: creating_gender,
  });

  console.log(body_msg);

  const res = await fetch(`http://127.0.0.1:8000/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body_msg
  });
  if (!res.ok) {
    throw new Error("Failed to create customer");
  }

  revalidatePath(`/customers`);
};

export default createCustomer;
