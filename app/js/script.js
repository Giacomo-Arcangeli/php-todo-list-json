// Estrapolo il metodo createApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      tasks: [],
    };
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
