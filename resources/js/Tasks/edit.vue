<template>
    <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
            <form v-on:submit.prevent="submit_form()">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input
                        type="text"
                        class="form-control"
                        id="title"
                        v-model="fields.title"
                        placeholder="Migala"
                    />
                    <div
                        class="alert alert-danger"
                        v-if="errors && errors.title"
                    >
                        {{ errors.title[0] }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label"
                        >Example textarea</label
                    >
                    <textarea
                        class="form-control"
                        id="description"
                        v-model="fields.description"
                        rows="3"
                    ></textarea>
                    <div
                        class="alert alert-danger"
                        v-if="errors && errors.description"
                    >
                        {{ errors.description[0] }}
                    </div>
                </div>
                <div class="mb-3">
                    <input
                        type="submit"
                        class="btn btn-primary"
                        :disabled="form_submitting"
                        :value="form_submitting ? 'Saving...' : 'Save'"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: {
                title: "",
                description: "",
            },
            errors: {},
            form_submitting: false,
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
            this.fields = response.data;
        },
        async submit_form() {
            try {
                this.form_submitting = true;
                this.form_submitting = false;
                let response = await axios.post("/api/task", this.fields);
                console.log(response.data);
                this.$route.push({ name: "task.index" });
            } catch (error) {
                this.errors = error.response.data.errors;
                this.form_submitting = false;
            }
        },
    },
};
</script>

<style></style>
