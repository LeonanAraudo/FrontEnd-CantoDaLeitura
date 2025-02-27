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

  const editarLivro = async (id, livroEditado) => {
    try {
      // Enviar os dados do livro para a API para atualização
      const resposta = await fetch(`https://sua-api.com/editar-livro/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livroEditado),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao editar o livro. Tente novamente.");
      }

      // Atualizar o livro no store localmente
      const index = livros.value.findIndex((livro) => livro.id === id);
      if (index !== -1) {
        livros.value[index] = { ...livros.value[index], ...livroEditado };
      }

      alert("Livro editado com sucesso!");
    } catch (erro) {
      alert(erro.message);
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
