<template>
    <router-link :to="{ name: 'task.create' }">Add Task</router-link>

    <ul class="list-group">
        <li class="list-group-item" v-for="item in tasks" :key="item.id">
            <input
                class="form-check-input me-1"
                type="checkbox"
                v-model="completed"
                :value="item.id"
            />
            {{ item.title }}

            <router-link :to="{ name: 'task.show', params: { id: item.id } }"
                >Show Task</router-link
            >
        </li>
    </ul>
    <button class="btn btn-primary" @click="TaskCompleted">Completed</button>
</template>

<script>
export default {

    data() {
        return {
            completed: [],
            tasks: [],
            errors: [],
        };
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async TaskCompleted() {
            try {
                let response=await axios.put("/api/task/completed/task", this.completed);
                console.log(response.data.messages);
                this.completed = null;
            } catch (err) {
                this.errors = err.response.data.errors;
            }
        },
  
        async getTasks() {
            let response = await axios.get("/api/task");
            this.tasks = response.data;
        },
    },
};
</script>

<style></style>
