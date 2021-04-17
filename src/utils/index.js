export const getLocal = () => {
  return JSON.parse(localStorage.getItem('favs'));
};

export const setLocal = (value) => {
  return localStorage.setItem('favs', value);
};

export const getFavorites = (id) => {
  let arrLocal = getLocal();
  let favs = false;

  if (arrLocal) {
    if (arrLocal.includes(id)) {
      arrLocal = arrLocal.filter((item) => item !== id);
      favs = false;
    } else {
      arrLocal.push(id);
      favs = true;
    }

    setLocal(JSON.stringify(arrLocal));
  } else {
    setLocal(JSON.stringify([id]));
  }

  arrLocal = getLocal();

  return {favs, arrLocal};
};
