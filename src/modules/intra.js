export const updateLocalStorage = (saveList) => {
  localStorage.setItem('saveList', JSON.stringify(saveList));
};
export const markComplete = (index, complete) => {
  const saveList = JSON.parse(localStorage.getItem('saveList')) || [];

  if (index >= 0 && index < saveList.length) {
    if (complete) {
      saveList[index].complete = true;
    } else {
      saveList[index].complete = false;
    }
    updateLocalStorage(saveList);
  }
};
