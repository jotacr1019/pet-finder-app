import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");
const authImage = require("url:../../assets/bfd84aa5a8054f6581b5b7fbc066c4ef.png");

export function initSignUp(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand is-flex is-justify-content-space-between">
            <div class="navbar-item">
                <img src="${dogImage}" width="72" height="50">
            </div>
            <div class="dropdown is-right">
                <div class="dropdown-trigger">
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                    <div class="dropdown-content has-background-dark">
                        <style>
                            @media(min-width: 505px) {
                                .dropdown-content {
                                    width: 300px;
                                }
                            }
                            @media(min-width: 768px) {
                                .dropdown-content {
                                    width: 400px;
                                }
                            }
                        </style>
                        <div class="dropdown-item has-text-centered is-size-5 is-size-4-tablet">
                            <a class="has-text-primary menu_start">Inicio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start"></div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-success btn_start is-rounded">
                            Inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container-signup">
        <style>
            @media(min-width: 440px) {
                .container-signup {
                    padding: 40px 64px;
                }
            }
            @media(min-width: 480px) {
                .container-signup {
                    padding: 40px 84px;
                }
            }
            @media(min-width: 565px) {
                .container-signup {
                    padding: 40px 112px;
                }
            }
            @media(min-width: 635px) {
                .container-signup {
                    padding: 40px 142px;
                }
            }
            @media(min-width: 700px) {
                .container-signup {
                    padding: 40px 174px;
                }
            }
            @media(min-width: 769px) {
                .container-signup {
                    padding: 85px 22px 85px 0px;
                }
            }
            @media(min-width: 850px) {
                .container-signup {
                    padding: 85px 38px 85px 4px;
                }
            }
            @media(min-width: 970px) {
                .container-signup {
                    padding: 85px 64px 85px 6px;
                }
            }
            @media(min-width: 1024px) {
                .container-signup {
                    padding: 84px 85px 83px 6px;
                }
            }
            @media(min-width: 1110px) {
                .container-signup {
                    padding: 84px 130px 83px 16px;
                }
            }
        </style>
        <div class="columns">
            <style>
                @media(min-width: 769px) {
                    .columns {
                        gap: 0px;
                    }
                }
                @media(min-width: 1024px) {
                    .columns {
                        gap: 30px;
                    }
                }
                @media(min-width: 1110px) {
                    .columns {
                        gap: 55px;
                    }
                }
            </style>
            <div class="column is-half is-flex is-justify-content-center">
                <div class="image-div img-div is-align-self-center">
                    <img src="${authImage}" alt="Pet-Finder-welcome" class="responsive-image">
                        <style>
                            @media(min-width: 769px) {
                                .responsive-image {
                                    width: 90%;
                                    height: 40vh;
                                }
                            }
                            @media(min-width: 930px) {
                                .responsive-image {
                                    width: 100%;
                                    height: 45vh;
                                }
                            }
                            @media(min-width: 1024px) {
                                .responsive-image {
                                    width: 100%;
                                    height: 55vh;
                                }
                            }
                    </style>
                </div>
            </div>
            <div class="column is-half column-signup">
                <h1 class="title is-3 has-text-centered has-text-black is-size-2-tablet">
                    Registrarse
                </h1>
                <p class="subtitle is-6 has-text-centered has-text-grey-dark">
                    Ingresa los siguientes datos para realizar el registro
                </p>
                <form class="form-signup">
                    <div class="field">
                        <label class="label has-text-left">Nombre</label>
                        <div class="control has-icons-left">
                            <input class="input" name="name" type="text" placeholder="Ingresa tu nombre">
                            <span class="icon is-small is-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            </span>
                        </div>
                        <p class="help help-name is-danger has-text-left" style="visibility: hidden">
                            Este campo es necesario
                        </p>
                    </div>
                    <div class="field">
                        <label class="label has-text-left">Email</label>
                        <div class="control has-icons-left">
                            <input class="input" name="email" type="email" placeholder="e.g. mail@mail.com">
                            <span class="icon is-small is-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            </span>
                        </div>
                        <p class="help help-email is-danger has-text-left" style="visibility: hidden">
                            Este campo es necesario
                        </p>
                    </div>
                    <div class="field">
                        <label class="label has-text-left">Contraseña</label>
                        <div class="control has-icons-left">
                            <input class="input" name="password" type="password" placeholder="**********">
                            <span class="icon is-small is-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            </span>
                        </div>
                        <p class="help help-password is-danger has-text-left" style="visibility: hidden">
                            Este campo es necesario
                        </p>
                    </div>
                    <div class="field">
                        <label class="label has-text-left">Confirmar contraseña</label>
                        <div class="control has-icons-left">
                            <input class="input" name="confirmPassword" type="password" placeholder="**********">
                            <span class="icon is-small is-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            </span>
                        </div>
                        <p class="help help-confirm-password is-danger has-text-left" style="visibility: hidden">
                            Este campo es necesario
                        </p>
                    </div>
                    <div class="columns container-signin is-flex is-flex-direction-row is-justify-content-center mt-4">
                        <style>
                            @media(min-width: 768px) {
                                .container-signin {
                                    gap: 6px;
                                }
                        }
                        </style>
                        <p class="subtitle is-align-self-flex-end sub-1 is-7 has-text-centered">
                            Ya tienes una cuenta?
                        </p>
                        <a class="subtitle sub-2 is-7 has-text-centered has-text-info" href="/sign-in">
                            Iniciar sesión
                        </a>
                    </div>
                    <div class="field">
                        <p class="control container-button has-text-centered">
                            <button class="button button-signup is-success has-text-centered">
                                Registrarse
                            </button>
                        </p>
                    </div>
                </form>
                <span class="icon-text signup_span-error is-justify-content-center is-align-items-center has-text-success has-background-danger" style="display: none">
                    <style>
                        .hidden {
                            display: none;
                        }
                        .full-screen-error {
                            position: fixed;
                            min-width: 375px;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 45%;
                            max-width: 600px;
                            height: 22%;
                            max-height: 400px;
                            padding: 10px;
                            z-index: 9999;
                            background-color: white;
                            overflow: auto;
                            gap: 12px;
                        }
                        @media (min-width: 769px) {
                            .full-screen-error {
                                width: 58%;
                                max-width: 800px;
                                height: 24%;
                                max-height: 600px;
                            }
                        }
                        @media (min-width: 1024px) {
                            .full-screen-error {
                                width: 46%;
                                max-width: 800px;
                                height: 25%;
                                max-height: 600px;
                            }
                        }
                    </style>
                    <span class="icon is-large">
                        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffdd57}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                            <style>
                                .svg-icon{
                                    fill: #ffdd57 !important; 
                                    width: 7em;
                                    height: 7em;
                                }
                            </style>
                    </span>
                    <span class="subtitle is-4 is-size-3-tablet has-text-centered has-text-warning">
                        Se produjo un error, refresca la página e intenta de nuevo
                    </span>
                </span>
                <span class="icon-text signup_span-wait is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
                    <style>
                        .hidden {
                            display: none;
                        }
                        .full-screen {
                            position: fixed;
                            min-width: 375px;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 45%;
                            max-width: 600px;
                            height: 12%;
                            max-height: 400px;
                            z-index: 9999;
                            background-color: white;
                            overflow: auto;
                            gap: 12px;
                        }
                        @media (min-width: 769px) {
                            .full-screen {
                                width: 50%;
                                max-width: 800px;
                                height: 14%;
                                max-height: 600px;
                            }
                        }
                        @media (min-width: 1024px) {
                            .full-screen {
                                width: 40%;
                                max-width: 800px;
                                height: 14%;
                                max-height: 600px;
                            }
                        }
                    </style>
                    <span class="icon is-large">
                        <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#6fc88a}</style><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"/></svg>
                            <style>
                                .svg {
                                    width: 5em;
                                    height: 5em;
                                }
                            </style>
                    </span>
                    <span class="subtitle is-4 is-size-3-tablet has-text-primary-light">
                        Espere por favor
                    </span>
                </span>
            </div>
        </div>
    </div>`;
    div.className = "root-sign-up";

    // console.log(state);

    openAndCloseNavbar(div);

    const menuStartEl = div.querySelector(".menu_start");
    const btnStartEl = div.querySelector(".btn_start");

    menuStartEl.addEventListener("click", () => {
        params.goTo("/welcome");
    });
    btnStartEl.addEventListener("click", () => {
        params.goTo("/welcome");
    });

    //

    const formEl: any = div.querySelector(".form-signup");
    const spanWaitEl: any = div.querySelector(".signup_span-wait");
    const spanErrorEl: any = div.querySelector(".signup_span-error");
    const helpNameEl: any = div.querySelector(".help-name");
    const helpEmailEl: any = div.querySelector(".help-email");
    const helpPasswordEl: any = div.querySelector(".help-password");
    const helpConfirmPasswordEl: any = div.querySelector(
        ".help-confirm-password"
    );

    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        helpNameEl.style.visibility = "hidden";
        helpEmailEl.style.visibility = "hidden";
        helpPasswordEl.style.visibility = "hidden";
        helpConfirmPasswordEl.style.visibility = "hidden";
        const data = new FormData(e.target as any);
        const value = Object.fromEntries(data.entries()) as any;
        const name: string = value.name;
        const email: string = value.email;
        const password: string = value.password;
        const confirmPassword: string = value.confirmPassword;
        if (!name) {
            helpNameEl.style.visibility = "visible";
        }
        if (!email) {
            helpEmailEl.style.visibility = "visible";
        }
        if (!password) {
            helpPasswordEl.style.visibility = "visible";
        }
        if (!confirmPassword) {
            helpConfirmPasswordEl.style.visibility = "visible";
        }
        if (name && email && password && confirmPassword) {
            if (password !== confirmPassword) {
                helpConfirmPasswordEl.innerHTML =
                    "Las contraseñas no coinciden";
                helpConfirmPasswordEl.style.visibility = "visible";
            } else {
                spanWaitEl.style.display = "flex";
                spanWaitEl.classList.add("full-screen");
                formEl.style.pointerEvents = "none";
                const createUserResponse = await state.createUserInDB({
                    full_name: name,
                    email: email,
                    password: password,
                });
                if (createUserResponse) {
                    setTimeout(() => {
                        params.goTo("/user-reports-empty");
                    }, 1000);
                } else {
                    spanErrorEl.style.display = "flex";
                    spanErrorEl.classList.add("full-screen-error");
                }
            }
        }
    });

    return div;
}
