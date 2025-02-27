import { defineStore } from "pinia";
import { ref } from "vue";

export const usaBiblioteca = defineStore("biblioteca", () => {
  const livros = ref([]);
  const autores = ref([]);
  const isLoading = ref(false);  // Para controlar o carregamento de dados
  const error = ref(null);  // Para capturar erros de requisição

  // Função para buscar os livros da API
  const fetchLivros = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch("https://api.exemplo.com/livros");
      if (!response.ok) {
        throw new Error("Falha ao buscar os livros");
      }
      const data = await response.json();
      livros.value = data;  // Atualiza o estado com os dados recebidos
    } catch (err) {
      error.value = err.message;  // Captura o erro caso aconteça
    } finally {
      isLoading.value = false;  // Finaliza o carregamento
    }
  };

  // Função para buscar os autores da API
  const fetchAutores = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch("https://api.exemplo.com/autores");
      if (!response.ok) {
        throw new Error("Falha ao buscar os autores");
      }
      const data = await response.json();
      autores.value = data;  // Atualiza o estado com os dados recebidos
    } catch (err) {
      error.value = err.message;  // Captura o erro caso aconteça
    } finally {
      isLoading.value = false;  // Finaliza o carregamento
    }
  };

  const addLivro = (livro) => {
    livros.value.push(livro);
  };

  const addAutor = (autor) => {
    autores.value.push(autor);
  };

  const editarLivro = (livroEditado) => {
    const index = livros.value.findIndex((livro) => livro.id === livroEditado.id);
    if (index !== -1) {
      livros.value[index] = { ...livroEditado };
    }
  };

  return {
    livros,
    autores,
    addLivro,
    addAutor,
    editarLivro,
    fetchLivros,
    fetchAutores,
    isLoading,
    error
  };
});
