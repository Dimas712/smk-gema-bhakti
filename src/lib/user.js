export async function getProfile(api) {
  const res = await api.get("/users/profile");
  return res.data;
}

export async function updateProfile(api, data) {
  const res = await api.put("/users/profile", data);
  return res.data;
}