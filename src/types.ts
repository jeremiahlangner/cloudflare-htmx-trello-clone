interface Environment {
  TrelloLists: KVNamespace; // Single group of lists per key? up to 25MB storage.
}

interface HandlerArgs {
  request: Request;
  env: Environment;
  ctx: ExecutionContext;
  route: URLPattern; // return type from URLPattern.exec()
}

interface Card {
  id: string;
  label: string;
  list: number;
}

interface List {
  name: string;
  id: string;
  cards: Card[];
}

export { HandlerArgs, Environment, Card, List };
