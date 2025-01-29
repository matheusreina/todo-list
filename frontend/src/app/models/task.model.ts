export interface Task {
  id?: number; // O "?" indica que o campo é opcional (útil para quando criamos uma nova tarefa, pois o ID é gerado pelo backend)
  title: string;
  description: string;
  completed: boolean;
  updating?: boolean; // Propriedade para controlar o estado de edição
}
