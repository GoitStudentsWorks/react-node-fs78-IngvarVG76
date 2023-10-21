import { useSelector } from 'react-redux';
import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';
import { selectSelectedDate } from '../../../redux/date/selectors';
import { selectTasks } from '../../../redux/tasks/tasksSelectors';

export const ChoosedDay = () => {
  const tasks = useSelector(selectTasks);
  const date = useSelector(selectSelectedDate);

  return (
    <>
      <WeekCalendar />
      <TasksColumnsList tasks={tasks} date={date} />
    </>
  );
};

// import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
// //
// // import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';

// export const ChoosedDay = () => {
//   return (
//     <>
//       <WeekCalendar />
//       <TasksColumnsList />
//     </>
//   );
// };
