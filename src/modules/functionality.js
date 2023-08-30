
export const updateLocalStorage = () => {
  let saveList = JSON.parse(localStorage.getItem('saveList')) || [];

  localStorage.setItem('saveList', JSON.stringify(saveList));
};

 export  const markComplete = (index) => {
  let saveList = JSON.parse(localStorage.getItem('saveList')) || [];
  if (index >= 0 && index < saveList.length) {
    saveList[index].complete = !saveList[index].complete;

    updateLocalStorage(saveList);
    }
};