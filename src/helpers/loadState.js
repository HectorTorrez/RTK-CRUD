export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('task');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('task', serializedState);
    } catch (error) {
      // Manejar el error en caso de que no se pueda guardar el estado
    }
  };