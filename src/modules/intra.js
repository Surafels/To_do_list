
 export const updateLocalStorage = (saveList) => {
  localStorage.setItem('saveList', JSON.stringify(saveList));
};
export const markComplete = (index, complete) => {
  let saveList = JSON.parse(localStorage.getItem('saveList')) || [];

  if (index >= 0 && index < saveList.length) {
    saveList[index].complete = complete;
    updateLocalStorage(saveList);
  }
};

