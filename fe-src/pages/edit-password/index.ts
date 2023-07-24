import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");
const lockImage = require("url:../../assets/lock.png");

export function initEditPassword(params) {
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
                            <a class="has-text-primary menu_datos">Mis datos</a>
                        </div>
                        <hr class="dropdown-divider has-background-grey">
                        <div class="dropdown-item has-text-centered is-size-5 is-size-4-tablet">
                            <a class="has-text-primary menu_reportes">Mis mascotas reportadas</a>
                        </div>
                        <hr class="dropdown-divider has-background-grey">
                        <div class="dropdown-item has-text-centered is-size-5 is-size-4-tablet">
                            <a class="has-text-warning menu_reportar">Reportar mascota</a>
                        </div>
                        <hr class="dropdown-divider has-background-grey">
                        <div class="dropdown-item has-text-centered is-size-6 is-size-5-tablet">
                            <a class="has-text-link menu_logout">Cerrar sesión</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start"></div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons is-flex is-flex-wrap-nowrap">
                        <a class="button is-warning btn_reportar">
                            Reportar mascota
                        </a>
                        <a class="button is-primary btn_reportes">
                            Mis mascotas reportadas
                        </a>
                        <a class="button is-primary btn_mis-datos">
                            Mis datos
                        </a>
                        <a class="button is-danger btn_logout">
                            <strong>Cerrar sesión</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container_edit-password">
        <style>
            @media(min-width: 440px) {
                .container_edit-password {
                    padding: 30px 64px;
                }
            }
            @media(min-width: 480px) {
                .container_edit-password {
                    padding: 30px 74px;
                }
            }
            @media(min-width: 565px) {
                .container_edit-password {
                    padding: 30px 102px;
                }
            }
            @media(min-width: 635px) {
                .container_edit-password {
                    padding: 30px 132px;
                }
            }
            @media(min-width: 700px) {
                .container_edit-password {
                    padding: 30px 164px;
                }
            }
            @media(min-width: 769px) {
                .container_edit-password {
                    padding: 130px 36px 147px 0px;
                }
            }
            @media(min-width: 850px) {
                .container_edit-password {
                    padding: 130px 54px 147px 4px;
                }
            }
            @media(min-width: 970px) {
                .container_edit-password {
                    padding: 130px 64px 147px 6px;
                }
            }
            @media(min-width: 1024px) {
                .container_edit-password {
                    padding: 114px 85px 131px 6px;
                }
            }
            @media(min-width: 1110px) {
                .container_edit-password {
                    padding: 114px 140px 131px 18px;
                }
            }
        </style>
        <div class="columns columns_edit-password">
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
                <div class="image-div is-flex is-align-self-center is-justify-content-center">
                    <img src="${lockImage}" alt="Pet-Finder-welcome" class="responsive-image">
                        <style>
                            @media(min-width: 769px) {
                                .responsive-image {
                                    width: 90%;
                                    height: 36vh;
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
            <div class="column is-half column-data-password">
                <h1 class="title is-3 has-text-centered has-text-black is-size-2-tablet">
                    Contraseña
                </h1>
                <form class="form_edit-password">
                    <div class="field">
                        <label class="label has-text-left">Contraseña nueva</label>
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
                    <div class="field mt-5">
                        <p class="control container-button">
                            <button class="button is-success has-text-centered">
                                Guardar
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        <span class="icon-text edit-pass_span-password has-background-grey-dark is-flex-direction-column is-justify-content-space-between is-align-items-center has-text-success has-background-primary-dark px-6 pt-5 pb-6" style="display: none">
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
                    height: 46%;
                    z-index: 9999;
                    background-color: white;
                    overflow: auto;
                    gap: 12px;
                }
                @media (min-width: 520px) {
                    .full-screen {
                        min-width: 420px;
                        max-width: 420px;
                        height: 48%;
                        max-height: 600px;
                    }
                }
                @media (min-width: 769px) {
                    .full-screen {
                        min-width: 460px;
                        max-width: 460px;
                        height: 48%;
                        max-height: 600px;
                    }
                }
                @media (min-width: 1024px) {
                    .full-screen {
                        min-width: 480px;
                        max-width: 480px;
                        height: 48%;
                        max-height: 600px;
                    }
                }
            </style>
            <h1 class="title is-5 has-text-centered has-text-success-light is-size-4-tablet">
                Ingresa tu contraseña actual para continuar
            </h1>
            <form class="form_span-password">
                <div class="field">
                    <label class="label has-text-left has-text-success-light">Contraseña</label>
                    <div class="control has-icons-left">
                        <input class="input" name="password" type="password" placeholder="**********">
                        <span class="icon is-small is-left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                        </span>
                    </div>
                    <p class="help help-password_span is-danger has-text-centered" style="visibility: hidden">
                        Necesitas confirmar tu contraseña para continuar
                    </p>
                </div>
                <div class="field">
                    <p class="control has-text-centered">
                        <button class="button btn-auth is-success has-text-primary-light">
                            Continuar
                        </button>
                    </p>
                </div>
            </form>
        </span>
        <span class="icon-text edit-password_span-sucess is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
            <style>
                .hidden {
                    display: none;
                }
                .full-screen-sucess {
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
                    .full-screen-sucess {
                        width: 50%;
                        max-width: 800px;
                        height: 14%;
                        max-height: 600px;
                    }
                }
                @media (min-width: 1024px) {
                    .full-screen-sucess {
                        width: 40%;
                        max-width: 800px;
                        height: 14%;
                        max-height: 600px;
                    }
                }
            </style>
            <span class="icon is-large">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#6fc88a}</style><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                    <style>
                        .svg {
                            width: 5em;
                            height: 5em;
                        }
                    </style>
            </span>
            <span class="subtitle is-4 is-size-3-tablet has-text-primary-light">
                Contraseña actualizada
            </span>
        </span>
    </div>`;
    div.className = "root-profile-password";

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const datosEl: any = div.querySelector(".menu_datos");
    const datosBtnEl: any = div.querySelector(".btn_mis-datos");
    const reportesEl: any = div.querySelector(".menu_reportes");
    const reportesBtnEl: any = div.querySelector(".btn_reportes");
    const reportarEl: any = div.querySelector(".menu_reportar");
    const reportarBtnEl: any = div.querySelector(".btn_reportar");
    const logoutEl: any = div.querySelector(".menu_logout");
    const logoutBtnEl: any = div.querySelector(".btn_logout");

    function handleDatosClick() {
        if (!currentState.userToken) {
            state.setRouteFromWelcome("mis-datos");
            params.goTo("/sign-in");
        } else {
            params.goTo("/menu");
        }
    }
    datosEl.addEventListener("click", handleDatosClick);
    datosBtnEl.addEventListener("click", handleDatosClick);

    async function handleReportesClick() {
        if (!currentState.userToken) {
            state.setRouteFromWelcome("reportes");
            params.goTo("/sign-in");
        } else {
            const getPetsResponse = await state.getPetsOfUserFromDB();
            if (getPetsResponse) {
                params.goTo("/user-reports-full");
            } else {
                params.goTo("/user-reports-empty");
            }
        }
    }
    reportesEl.addEventListener("click", handleReportesClick);
    reportesBtnEl.addEventListener("click", handleReportesClick);

    function handleReportarClick() {
        if (!currentState.userToken) {
            state.setRouteFromWelcome("reportar");
            params.goTo("/sign-in");
        } else {
            params.goTo("/create-report");
        }
    }
    reportarEl.addEventListener("click", handleReportarClick);
    reportarBtnEl.addEventListener("click", handleReportarClick);

    function handleLogoutClick() {
        state.removeStateFromLocalStorage();
        params.goTo("/welcome");
    }
    logoutEl.addEventListener("click", handleLogoutClick);
    logoutBtnEl.addEventListener("click", handleLogoutClick);

    //

    const columnsEl: any = div.querySelector(".columns_edit-password");
    const formEl: any = div.querySelector(".form_edit-password");
    const helpPasswordEl: any = div.querySelector(".help-password");
    const helpConfirmPasswordEl: any = div.querySelector(
        ".help-confirm-password"
    );
    const spanSuccessEl: any = div.querySelector(".edit-password_span-sucess");

    const formSpanEl: any = div.querySelector(".form_span-password");
    const spanPasswordEl: any = div.querySelector(".edit-pass_span-password");
    const helpPasswordSpanEl: any = div.querySelector(".help-password_span");

    formEl.style.pointerEvents = "none";
    spanPasswordEl.style.display = "flex";
    spanPasswordEl.classList.add("full-screen");
    columnsEl.style.filter = "blur(2px)";

    formSpanEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(e.target as any);
        const value = Object.fromEntries(data.entries()) as any;
        const password = value.password;
        if (!password) {
            helpPasswordSpanEl.style.visibility = "visible";
        }
        if (password) {
            const validationResponse = await state.validatePasswordInDB(
                password
            );
            if (validationResponse) {
                spanPasswordEl.style.display = "none";
                formEl.style.pointerEvents = "auto";
                columnsEl.style.filter = "none";
            } else {
                helpPasswordSpanEl.innerHTML = "La contraseña es incorrecta";
                helpPasswordSpanEl.style.visibility = "visible";
            }
        }
    });

    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        helpPasswordEl.style.visibility = "hidden";
        helpConfirmPasswordEl.style.visibility = "hidden";
        const spanEl: any = div.querySelector(".span-edit");
        const data = new FormData(e.target as any);
        const value = Object.fromEntries(data.entries());
        const password = value.password;
        const confirmPassword = value.confirmPassword;
        if (!password) {
            helpPasswordEl.style.visibility = "visible";
        }
        if (!confirmPassword) {
            helpConfirmPasswordEl.style.visibility = "visible";
        }
        if (password && confirmPassword) {
            if (password != confirmPassword) {
                helpPasswordEl.innerHTML = "Las contraseñas no coinciden";
                helpPasswordEl.style.visibility = "visible";
            } else {
                helpPasswordEl.style.visibility = "hidden";
                helpConfirmPasswordEl.style.visibility = "hidden";
                const updateResponse = await state.updatePasswordInDb(password);
                if (updateResponse) {
                    spanSuccessEl.style.display = "flex";
                    spanSuccessEl.classList.add("full-screen-sucess");
                    formEl.style.pointerEvents = "none";
                    setTimeout(() => {
                        params.goTo("/menu");
                    }, 1500);
                }
            }
        }
    });

    return div;
}
