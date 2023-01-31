// import { createContext, useEffect, useState } from 'react';
// import { getTasks } from '../services/tasks';

// const TasksContext = createContext();

// const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const data = await getTasks();
//         setTasks(data);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     fetchTasks();
//   }, []);
//   return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
// };

// export { TasksContext, TasksProvider };