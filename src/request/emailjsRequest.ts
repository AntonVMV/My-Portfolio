import emailjs from "@emailjs/browser";

export async function emailjsRequest(data: HTMLFormElement) {
  try {
    const result = emailjs.sendForm(
      "service_8m31yrw",
      "template_e6jb52n",
      data,
      "Blwz-AArlR4dR7NiF"
    );
    return result;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("Unknown Error");
    }
  }
}
