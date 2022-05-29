class Router {
  [x: string]: any;
  constructor(event: any) {
    this.event = event;
    this.request = this.event.request;
    this.urlObj = new URL(this.request.url);
    this.pathname = this.urlObj.pathname;
    this.searchParams = this.urlObj.searchParams;
    this.method = this.request.method;
    this.ip =
      this.request.headers.get("CF-Connecting-IP") ||
      this.request.headers.get("x-real-ip");
    this.status = {
      action: 0,
      filterPath: 0,
      auth: 0,
      path: 0,
    };
    this.setStatus = (key: string | number, value: any) => {
      this.status[key] = value;
      return this;
    };
    this.getParam = (key: any) => {
      return this.searchParams.get(key);
    };
    this.get = (path: any) => {
      if (this.status.action) return this;
      if (this.status.filterPath) return this;
      if (this.method == "GET") {
        if (this.pathname.startsWith(path)) {
          this.status.filterPath = 1;
          this.status.path = path;
        }
      }
      return this;
    };
    this.post = (path: any) => {
      if (this.status.action) return this;
      if (this.status.filterPath) return this;
      if (this.method == "POST") {
        if (this.pathname.startsWith(path)) {
          this.status.filterPath = 1;
          this.status.path = path;
        }
      }
      return this;
    };
    this.action = function (call: any) {
      if (this.status.action) return this;
      if (this.status.filterPath) {
        this.status.action = 1;
        this.run = async () => {
          return await call(this);
        };
      }
      return this;
    };
  }
}
export default Router;
