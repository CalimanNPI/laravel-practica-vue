<template>
    <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">
                {{ task.description }}
            </p>

            <a href="#" class="card-link" v-on:click="deleteTask(task.id)"
                >Delete</a
            >
        </div>
        <router-link
            :to="{ name: 'task.edit', params: { id: $route.params.id } }"
            >Edit</router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: [],
        };
    },
    mounted() {
        this.getTask();
    },
    methods: {
        async getTask() {
            let response = await axios.get(
                "/api/task/" + this.$route.params.id
            );
            this.task = response.data;
        },
        async deleteTask(id) {
            try {
                await axios.delete("/api/task/" + id);
                this.$route.push("/tasks");
                console.log(response.data);
            } catch (err) {
                this.errors = err.response.data.errors;
            }
        },
    },
};
</script>

<style></style>
