class Database {
  private name: string = "";
  private store: Promise<any> = Promise.resolve();

  constructor(name: string, DB?: Database) {
    if (DB) return DB;

    this.name = name;

    this.store = new Promise((resolve, reject) => {
      const open = indexedDB.open(this.name, 1);
      open.onerror = () => reject(open.error);
      open.onupgradeneeded = () => open.result.createObjectStore(this.name);
      open.onsuccess = () => resolve(open.result);
    });
  }

  async get(key: string): Promise<string> {
    const store = await this.store;
    return new Promise((resolve, reject) => {
      const transaction = store.transaction(this.name, "readonly");
      const value = transaction.objectStore(this.name).get(key);
      transaction.oncomplete = () => resolve(value.result);
      transaction.onerror = () => reject(transaction.error);
    });
  }

  async put(key: string, value: string) {
    const store = await this.store;
    return new Promise((resolve, reject) => {
      const transaction = store.transaction(this.name, "readwrite");
      const result = transaction.objectStore(this.name).put(value, key);
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error);
    });
  }

  async delete(key: string) {
    const store = await this.store;
    return new Promise((resolve, reject) => {
      const transaction = store.transaction(this.name, "readwrite");
      const result = transaction.objectStore(this.name).delete(key);
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error);
    });
  }
}

export default Database;
