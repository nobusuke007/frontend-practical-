export default async function fetchCustomers() {
  console.log("API_ENDPOINT:", process.env.API_ENDPOINT);

  const res = await fetch(process.env.API_ENDPOINT + "/allcustomers", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
}
