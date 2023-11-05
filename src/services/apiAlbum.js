import axios from "axios";

export async function fetchAlbums(userId) {
  const res = await axios.get(`http://localhost:3005/albums?userId=${userId}`);

  return res.data;
}

export async function addAlbum(newAlbum) {
  const res = await axios.post("http://localhost:3005/albums", newAlbum);

  return res.data;
}

export async function removeAlbum(albumId) {
  const res = await axios.delete(`http://localhost:3005/albums/${albumId}`);

  res.data;
}
