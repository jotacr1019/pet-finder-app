import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");
const userDataImage = require("url:../../assets/user.png");

export function initEditData(params) {
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
    <div class="container_edit-data">
        <style>
            @media(min-width: 440px) {
                .container_edit-data {
                    padding: 30px 64px;
                }
            }
            @media(min-width: 480px) {
                .container_edit-data {
                    padding: 30px 74px;
                }
            }
            @media(min-width: 565px) {
                .container_edit-data {
                    padding: 30px 102px;
                }
            }
            @media(min-width: 635px) {
                .container_edit-data {
                    padding: 30px 132px;
                }
            }
            @media(min-width: 700px) {
                .container_edit-data {
                    padding: 30px 164px;
                }
            }
            @media(min-width: 769px) {
                .container_edit-data {
                    padding: 114px 36px 149px 0px;
                }
            }
            @media(min-width: 850px) {
                .container_edit-data {
                    padding: 114px 54px 149px 4px;
                }
            }
            @media(min-width: 970px) {
                .container_edit-data {
                    padding: 114px 64px 149px 6px;
                }
            }
            @media(min-width: 1024px) {
                .container_edit-data {
                    padding: 114px 85px 131px 6px;
                }
            }
            @media(min-width: 1110px) {
                .container_edit-data {
                    padding: 114px 150px 131px 18px;
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
                <div class="image-div is-flex is-align-self-center is-justify-content-center">
                    <img src="${userDataImage}" alt="Pet-Finder-welcome" class="responsive-image">
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
            <div class="column is-half column-edit-data">
                <style>
                    @media(min-width: 769px) {
                        .column-edit-data {
                            gap: 20px;
                        }
                    }
                </style>
                <h1 class="title is-3 has-text-centered has-text-black is-size-2-tablet">
                    Datos Personales
                </h1>
                <form class="form">
                    <div class="field">
                        <label class="label has-text-left">Nombre</label>
                        <div class="control has-icons-left">
                            <input class="input input-name" name="name" type="text" placeholder="Ingresa un nombre">
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
                            <input class="input input-email" name="email" type="email" placeholder="e.g. mail@mail.com">
                            <span class="icon is-small is-left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            </span>
                        </div>
                        <p class="help help-email is-danger has-text-left" style="visibility: hidden">
                            Este campo es necesario
                        </p>
                    </div>
                    <div class="field mt-5">
                        <p class="control">
                            <button class="button is-success has-text-centered">
                                Guardar
                            </button>
                        </p>
                    </div>
                </form>
                <span class="icon-text edit-data_span-sucess is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
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
                        <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#6fc88a}</style><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                            <style>
                                .svg {
                                    width: 5em;
                                    height: 5em;
                                }
                            </style>
                    </span>
                    <span class="subtitle is-4 is-size-3-tablet has-text-primary-light">
                        Datos actualizados
                    </span>
                </span>
            </div>
        </div>
    </div>`;
    div.className = "root-edit-data";

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

    (async function () {
        pullProfile(div);

        const formEl: any = div.querySelector(".form");
        const helpNameEl: any = div.querySelector(".help-name");
        const helpEmailEl: any = div.querySelector(".help-email");
        const spanSucessEl: any = div.querySelector(".edit-data_span-sucess");

        formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            helpEmailEl.style.visibility = "hidden";
            helpNameEl.style.visibility = "hidden";
            const data = new FormData(e.target as any);
            const value = Object.fromEntries(data.entries());
            const full_name = value.name;
            const email = value.email;
            if (!full_name) {
                helpNameEl.style.visibility = "visible";
            }
            if (!email) {
                helpEmailEl.style.visibility = "visible";
            }
            if (full_name && email) {
                state
                    .updateUserInDB({
                        full_name,
                        email,
                    })
                    .then((data) => {
                        console.log(data);
                    });
                spanSucessEl.style.display = "flex";
                spanSucessEl.classList.add("full-screen");
                formEl.style.pointerEvents = "none";
                setTimeout(() => {
                    params.goTo("/menu");
                }, 2000);
            }
        });
    })();

    return div;
}

async function pullProfile(div) {
    const form: any = div.querySelector(".form");
    const getDataRes = await state.getDataOfUserFromDB();
    const data = await getDataRes;
    if (data) {
        form.name.value = data.full_name;
        form.email.value = data.email;
    }
}
