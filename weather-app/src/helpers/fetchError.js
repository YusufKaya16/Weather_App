export const fetchError = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Şehir yanlış!");
  }
};
