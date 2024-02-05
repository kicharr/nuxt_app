export const usePlannerStore = defineStore('planner', () => {
    const categories = [
        {id: 0, title: 'Not started'},
        {id: 1, title: 'In process'},
        {id: 2, title: 'Ready'},
        {id: 3, title: 'Refactor'},
    ];

    const taskList = ref([]);
    const createNewTask = ({categoryId, name, text}) => {
        console.log({categoryId, name, text})
        taskList.value.push({
            id: taskList.value?.length,
            categoryId: categoryId,
            name: name,
            text: text
        });
        updateLocalStorage('taskList', taskList.value);
    }

    const checkCurrentTaskList = () => {
        if (taskList.value.length) return;
        const localStorageList = localStorage.getItem('taskList');
        taskList.value = JSON.parse(localStorageList);
    }

    const deleteTask = (id) => {
        if (!taskList.value.length) return;
        let slicedTasksList = taskList.value.splice(id, 1);
        updateLocalStorage('taskList', taskList.value)
    }

    const updateTask = (id, data) => {
        taskList?.value.forEach(task => {
            if (task.id === id) {
                task.name = data.name;
                task.text = data?.text;
            }
        });
        updateLocalStorage('taskList', taskList.value);
    }

    const updateLocalStorage = (key, updatedData) => {
        if (!updatedData) return;
        localStorage.setItem(key, JSON.stringify(updatedData));
    }


    return {
        taskList,
        categories,
        createNewTask,
        updateTask,
        checkCurrentTaskList,
        updateLocalStorage,
        deleteTask,
    }
})