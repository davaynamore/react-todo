export default class TodoService {
    constructor() {
      this._apiBase = 'https://jsonplaceholder.typicode.com';
    }    
  
    async getTodos(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    getAllTodos = async () => {
      return await this.getTodos(`/todos/`);
    }
}