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
    return this.handleTransaction("get", key);
  }

  async put(key: string, value: string) {
    return this.handleTransaction("put", key, value);
  }

  async delete(key: string) {
    return this.handleTransaction("delete", key);
  }

  private async handleTransaction(
    method: "get" | "put" | "delete",
    key: string,
    value?: string,
  ): Promise<string> {
    const store = await this.store;
    return new Promise((resolve, reject) => {
      const transaction = store.transaction(
        this.name,
        method === "get" ? "readonly" : "readwrite",
      );
      const args = method === "put" ? [value, key] : [key];
      const result = transaction.objectStore(this.name)[method](...args);
      transaction.oncomplete = () => resolve(result.result);
      transaction.onerror = () => reject(transaction.error);
    });
  }
}

export default Database;
