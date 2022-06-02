class Router {
  readonly event: FetchEvent;
  readonly request: Request;
  readonly pathname: string;
  readonly ip: string;
  readonly method: string;
  private urlObj: URL;
  private searchParams: URLSearchParams;
  [x: string]: any;
  constructor(event: FetchEvent) {
    this.event = event;
    this.request = this.event.request;
    this.urlObj = new URL(this.request.url);
    this.searchParams = this.urlObj.searchParams;
    this.pathname = this.urlObj.pathname;
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
  }
  public getParam = (key: string) => {
    return this.searchParams.get(key);
  };
  public setStatus = (key: string, value: number) => {
    this.status[key] = value;
    return this;
  };
  public get = (path: string, eq: boolean = false) => {
    if (this.status.action) return this;
    if (this.status.filterPath) return this;
    if (this.method == "GET") {
      if (this.pathname.startsWith(path)) {
        if (eq) {
          if (this.pathname == path) {
            this.status.filterPath = 1;
            this.status.path = path;
          }
        } else {
          this.status.filterPath = 1;
          this.status.path = path;
        }
      }
    }
    return this;
  };
  public post = (path: string, eq: boolean = false) => {
    if (this.status.action) return this;
    if (this.status.filterPath) return this;
    if (this.method == "POST") {
      if (this.pathname.startsWith(path)) {
        if (eq) {
          if (this.pathname == path) {
            this.status.filterPath = 1;
            this.status.path = path;
          }
        } else {
          this.status.filterPath = 1;
          this.status.path = path;
        }
      }
    }
    return this;
  };
  public action = function (call: Function) {
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
export default Router;
