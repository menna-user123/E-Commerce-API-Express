export class APPERROR extends Error {
  statuscode: number;
  status: string;
  constructor(message: string, statuscode: number) {
    super(message);
    this.statuscode = statuscode;
    this.status = `{statuscode}`.startsWith("5") ? "error" : "fail";
  }
}
