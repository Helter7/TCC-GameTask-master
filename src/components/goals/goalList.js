export function goalList(goalData, taskData) {
  const list = goalData.map((goal) => {
    const tasks = taskData.filter(({ goal_id }) => goal.id == goal_id);
    return { goal, tasks };
  });

  return list;
}
