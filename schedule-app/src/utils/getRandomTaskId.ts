//Between 99 as max and 13 as min because of defaultTasks ids
export const getRandomTaskId = () => Math.floor(Math.random() * (99 - 13) + 13); 
