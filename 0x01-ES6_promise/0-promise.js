export default function getResponseFromAPI() {
  const made = true;
  return new Promise((resolve, reject) => {
    if (made) {
      resolve();
    } else {
      reject();
    }
  });
}
