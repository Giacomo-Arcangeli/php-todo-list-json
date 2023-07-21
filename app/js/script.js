// Estrapolo il metodo createApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      const data = { task: this.newTask };
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post(
          "http://localhost:8888/php-todo-list-json/api/tasks/",
          data,
          config
        )
        .then((res) => {
          this.tasks = res.data;
          this.newTask = "";
        });
    },
  },
  created() {
    axios
      .get("http://localhost:8888/php-todo-list-json/api/tasks/")
      .then((res) => {
        this.tasks = res.data;
      });
  },
});

// La monto nell'elemento HTML "root"
app.mount("#root");
