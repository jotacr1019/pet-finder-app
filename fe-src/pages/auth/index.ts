import { state } from "../../state";
import { openAndCloseNavbar } from "../welcome";
const authImage = require("url:../../assets/undraw_login.svg");
const dogImage = require("url:../../assets/dog2.png");

export function initAuth(params) {
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
                            <a class="has-text-primary-dark menu_start">Inicio</a>
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
                        <a class="button is-success btn-start is-rounded">
                            Inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container-auth">
        <style>
            @media(min-width: 440px) {
                .container-auth {
                    padding: 40px 64px;
                }
            }
            @media(min-width: 480px) {
                .container-auth {
                    padding: 40px 84px;
                }
            }
            @media(min-width: 565px) {
                .container-auth {
                    padding: 40px 112px;
                }
            }
            @media(min-width: 635px) {
                .container-auth {
                    padding: 40px 142px;
                }
            }
            @media(min-width: 700px) {
                .container-auth {
                    padding: 40px 174px;
                }
            }
            @media(min-width: 769px) {
                .container-auth {
                    padding: 82px 22px 122px 4px;
                }
            }
            @media(min-width: 850px) {
                .container-auth {
                    padding: 82px 38px 122px 4px;
                }
            }
            @media(min-width: 970px) {
                .container-auth {
                    padding: 82px 64px 122px 6px;
                }
            }
            @media(min-width: 1024px) {
                .container-auth {
                    padding: 82px 85px 118px 6px;
                }
            }
            @media(min-width: 1110px) {
                .container-auth {
                    padding: 80px 130px 118px 16px;
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
                        gap: 25px;
                    }
                }
                @media(min-width: 1110px) {
                    .columns {
                        gap: 55px;
                    }
                }
            </style>
            <div class="column is-half is-flex">
                <div class="is-align-self-center">
                    <img src="${authImage}" alt="Pet-Finder-auth" class="responsive-image">
                        <style>
                            @media(min-width: 769px) {
                                .responsive-image {
                                    width: 90%;
                                    height: 44vh;
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
            <div class="column is-half column-2">
                <h1 class="title is-3 has-text-centered has-text-black is-size-2-tablet">
                    Iniciar sesión
                </h1>
                <p class="subtitle is-6 has-text-centered has-text-grey-dark">
                    Ingresa los siguientes datos para iniciar sesión
                </p>
                <form class="form-auth">
                    <div class="field">
                        <label class="label has-text-left">Email</label>
                        <div class="control has-icons-left">
                            <input class="input" type="email" name="email" placeholder="e.g. mail@mail.com">
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
                            <input class="input" type="password" name="password" placeholder="**********">
                            <span class="icon is-small is-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                            </span>
                        </div>
                        <p class="help help-password is-danger has-text-left" style="visibility: hidden">
                            Este campo es necesario
                        </p>
                        </div>
                    <div class="columns column-signup is-flex is-flex-direction-row is-justify-content-center">
                        <style>
                            @media(min-width: 769px) {
                                .column-signup {
                                    gap: 6px;
                                }
                            }
                        </style>
                        <p class="subtitle is-align-self-flex-end sub-1 is-7 has-text-centered">
                            Aún no tienes cuenta?
                        </p>
                        <a class="subtitle sub-2 is-7 has-text-centered has-text-info" href="/sign-up">
                            Regístrate
                        </a>
                    </div>
                    <div class="field">
                        <p class="control has-text-centered">
                            <button class="button btn-auth is-success">
                                Acceder
                            </button>
                        </p>
                    </div>
                </form>
                <span class="icon-text auth_span-wait is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
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
    div.className = "root-auth";

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const startMenu = div.querySelector(".menu_start");
    startMenu.addEventListener("click", () => {
        params.goTo("/welcome");
    });

    const btnStartEl = div.querySelector(".btn-start");
    btnStartEl.addEventListener("click", () => {
        params.goTo("/welcome");
    });

    const formEl: any = div.querySelector(".form-auth");
    const spanWaitEl: any = div.querySelector(".auth_span-wait");
    const helpEmailEl: any = div.querySelector(".help-email");
    const helpPasswordEl: any = div.querySelector(".help-password");

    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        helpPasswordEl.style.visibility = "hidden";
        helpEmailEl.style.visibility = "hidden";
        const data = new FormData(e.target as any);
        const value = Object.fromEntries(data.entries()) as any;
        if (!value.email) {
            helpEmailEl.style.visibility = "visible";
        }
        if (!value.password) {
            helpPasswordEl.style.visibility = "visible";
        }
        if (value.email && value.password) {
            helpEmailEl.style.visibility = "hidden";
            helpPasswordEl.style.visibility = "hidden";
            spanWaitEl.style.display = "flex";
            spanWaitEl.classList.add("full-screen");
            formEl.style.pointerEvents = "none";
            const authUserResponse = await state.authUser(
                value.email,
                value.password
            );
            if (authUserResponse) {
                const getDataOfUserResponse = await state.getDataOfUserFromDB();
                if (getDataOfUserResponse) {
                    if (currentState.RouteFromWelcome === "mis-datos") {
                        setTimeout(() => {
                            params.goTo("/menu");
                        }, 1000);
                    }
                    if (currentState.RouteFromWelcome === "reportes") {
                        const getPetsResponse =
                            await state.getPetsOfUserFromDB();
                        if (getPetsResponse) {
                            setTimeout(() => {
                                params.goTo("/user-reports-full");
                            }, 1000);
                        } else {
                            setTimeout(() => {
                                params.goTo("/user-reports-empty");
                            }, 1000);
                        }
                    }
                    if (currentState.RouteFromWelcome === "reportar") {
                        setTimeout(() => {
                            params.goTo("/create-report");
                        }, 1000);
                    }
                } else {
                    spanWaitEl.style.display = "none";
                    formEl.style.pointerEvents = "auto";
                    helpEmailEl.innerHTML =
                        "Ha habido un error, por favor intente nuevamente";
                    helpEmailEl.style.visibility = "visible";
                }
            } else {
                spanWaitEl.style.display = "none";
                formEl.style.pointerEvents = "auto";
                helpEmailEl.innerHTML = "Email o contraseña incorrectos";
                helpEmailEl.style.visibility = "visible";
            }
        }
    });

    return div;
}
