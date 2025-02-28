import { defineStore } from "pinia";
import { ref } from "vue";

export const usaBiblioteca = defineStore("biblioteca", () => {
  const livros = ref([]);
  const autores = ref([]);
  const topAutores = ref([])
  const error = ref(null);  
  
  const addLivro = (livro) => {
    livros.value.push(livro);
  };

  const addAutor = (autor) => {
    autores.value.push(autor);
  };

  const addTopAutor = (autorTop) => {
    topAutores.value.push(autorTop);
  };

  const fetchLivros = async () => {
    error.value = null;
    try {
      const response = await fetch("http://127.0.0.1:8000/books/",{
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Falha ao buscar os livros");
      }
      const data = await response.json();
      livros.value = data;  
    } catch (err) {
      error.value = err.message;  
    }
  };

  const fetchAutores = async () => {
    error.value = null;
    try {
      const response = await fetch("http://127.0.0.1:8000/authors/",{
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Falha ao buscar os autores");
      }
      const data = await response.json();
      autores.value = data; 
    } catch (err) {
      error.value = err.message;  
    } 
  };
  
  const fetchTopAutores = async () => {
    error.value = null;
    try {
      const response = await fetch("http://127.0.0.1:8000/authors/tops/",{
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Falha ao buscar os top autores");
      }
      const data = await response.json();
      topAutores.value = data; 
    } catch (err) {
      error.value = err.message;  
    } 
  };

  const editarLivro = async (id, livroEditado) => {
    try {
      const resposta = await fetch(`http://127.0.0.1:8000/books/${id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livroEditado),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao editar o livro");
      }

      const index = livros.value.findIndex((livro) => livro.id === id);
      if (index !== -1) {
        livros.value[index] = { ...livros.value[index], ...livroEditado };
      }

      alert("Livro editado com sucesso");
    } catch (erro) {
      alert(erro.message);
    }
  };

  return {
    livros,
    autores,
    topAutores,
    addLivro,
    addAutor,
    editarLivro,
    fetchLivros,
    fetchAutores,
    fetchTopAutores,
    addTopAutor,
    error
  };
});
