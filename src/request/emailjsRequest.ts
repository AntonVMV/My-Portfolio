import emailjs from "@emailjs/browser";

export function emailjsRequest(data: HTMLFormElement) {
  emailjs
    .sendForm("service_8m31yrw", "template_e6jb52n", data, "Blwz-AArlR4dR7NiF")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
