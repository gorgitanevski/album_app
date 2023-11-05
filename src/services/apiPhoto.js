import axios from "axios";

export async function fetchPhotos(albumId) {
  const res = await axios.get(
    `http://localhost:3005/photos?albumId=${albumId}`
  );

  return res.data;
}

export async function addPhoto(newPhoto) {
  const res = await axios.post("http://localhost:3005/photos", newPhoto);

  return res.data;
}

export async function removePhoto(photoId) {
  const res = await axios.delete(`http://localhost:3005/photos/${photoId}`);

  return res.data;
}
