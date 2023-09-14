function  ServiceWorker() {
  return new Response(' ', {
    headers: {
      'content-type': 'text/javascript;charset=UTF-8'
    }
  });
}

export default ServiceWorker;
