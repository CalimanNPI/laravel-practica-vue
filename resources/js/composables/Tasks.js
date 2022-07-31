import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useTasks() {
    const tasks = ref([]);
    const task = ref([]);
    const router = useRouter;
    const errors = ref("");

    const getTasks = async () => {
        let response = await axios.get("/api/task");
        tasks.value = response.data.data;
    };
    const getTask = async (id) => {
        let response = await axios.get("/api/task/" + id);
        task.value = response.data.data;
    };
    const storeTask = async (data) => {
        try {
            await axios.post("/api/task/", data);
            await router.push({ name: "task.index" });
        } catch (err) {
            if (err.response.status === 422) {
                errors.value += err.response.data.errors;
                /*for (const key in err.response.data.errors) {
                    errors.value += err.response.data.errors[key][0] + "";
                }*/
            }
        }
    };
    const updateTask = async (id, data) => {
        try {
            await axios.patch("/api/task/" + id, data);
            await router.push({ name: "task.index" });
        } catch (err) {
            if (err.response.status === 422) {
                errors.value += err.response.data.errors;
                /*for (const key in err.response.data.errors) {
                    errors.value += err.response.data.errors[key][0] + "";
                }*/
            }
        }
    };
    const destroyTask = async (id) => {
        try {
            await axios.delete("/api/task/" + id);
        } catch (err) {
            if (err.response.status === 422) {
                errors.value += err.response.data.errors;
                /*for (const key in err.response.data.errors) {
                    errors.value += err.response.data.errors[key][0] + "";
                }*/
            }
        }
    };

    return {
        tasks,
        task,
        errors,
        getTasks,
        getTask,
        storeTask,
        updateTask,
        destroyTask,
    };
}
