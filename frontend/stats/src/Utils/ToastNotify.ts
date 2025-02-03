import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ToastNotify {
  private notification = toast;

  public success(message: string): void {
    this.notification.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: "✅",
    });
  }

  public fail(message: any): void {
    message = this.extractErrorMessage(message);
    this.notification.error(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: "❌",
    });
  }

  private extractErrorMessage(err: any): string {
    if (typeof err === "string" && err !== "") return err;
    if (typeof err?.response?.data === "string" && err?.response.data !== "") return err.response.data;
    if (typeof err?.message === "string" && err?.message !== "") return err.message;
    return "An error occurred";
  }
}

export const toastNotify = new ToastNotify();