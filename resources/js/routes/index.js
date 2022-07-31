

import TaskIndex from "../Tasks/index.vue";
import TaskShow from "../Tasks/show.vue";
import TaskCreate from "../Tasks/create.vue";
import TaskEdit from "../Tasks/edit.vue";

const routes = [
    {
        name: 'task.index',
        path: "/tasks",
        component: TaskIndex,
    },
    {
        name: 'task.show',
        path: "/tasks/:id/show",
        component: TaskShow,
    },
    {
        name: 'task.create',
        path: "/tasks/create",
        component: TaskCreate,
    },
    {
        name: 'task.edit',
        path: "/tasks/:id/edit",
        component: TaskEdit,
    },
];

export default routes;


