export const getLocalStorageTodoData = () => {
    const data = localStorage.getItem("todos");
    try {
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error parsing local storage data:", e);
      return [];
    }
  };
  
  export const setLocalStorageTodoData = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  