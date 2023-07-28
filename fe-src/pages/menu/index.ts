import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");
const dataImage = require("url:../../assets/data.png");

export function initMenu(params) {
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
                        <a class="button is-danger btn_logout">
                            <strong>Cerrar sesión</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container_menu">
        <style>
            @media(min-width: 440px) {
                .container_menu {
                    padding: 40px 64px;
                }
            }
            @media(min-width: 480px) {
                .container_menu {
                    padding: 40px 84px;
                }
            }
            @media(min-width: 565px) {
                .container_menu {
                    padding: 40px 112px;
                }
            }
            @media(min-width: 635px) {
                .container_menu {
                    padding: 40px 142px;
                }
            }
            @media(min-width: 700px) {
                .container_menu {
                    padding: 40px 174px;
                }
            }
            @media(min-width: 769px) {
                .container_menu {
                    padding: 86px 36px 77px 0px;
                }
            }
            @media(min-width: 850px) {
                .container_menu {
                    padding: 86px 54px 77px 4px;
                }
            }
            @media(min-width: 970px) {
                .container_menu {
                    padding: 86px 64px 77px 6px;
                }
            }
            @media(min-width: 1024px) {
                .container_menu {
                    padding: 86px 85px 73px 6px;
                }
            }
            @media(min-width: 1110px) {
                .container_menu {
                    padding: 86px 140px 73px 18px;
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
                <div class="image-div is-align-self-center">
                    <img src="${dataImage}" alt="Pet-Finder-welcome" class="responsive-image">
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
            <div class="column is-half column-my-data">
                <h1 class="title is-3 has-text-centered has-text-black is-size-2-tablet">
                    Mis Datos
                </h1>
                <div class="buttons-container_menu is-flex is-flex-direction-column mb-6">
                    <div>
                        <button class="button btn-personal-data is-info has-text-centered">
                            Modificar datos personales
                        </button>    
                        <p class="help help-personal-data is-danger has-text-left" style="visibility: hidden">
                            No tienes los permisos necesarios para acceder
                        </p>
                    </div>
                    <div>
                        <button class="button btn-password is-info is-info has-text-centered">
                            Modificar contraseña
                        </button>
                        <p class="help help-password is-danger has-text-left" style="visibility: hidden">
                            No tienes los permisos necesarios para acceder
                        </p>    
                    </div>
                </div>
                <a class="subtitle subtitle-logout is-6 has-text-centered has-text-info">
                    Cerrar sesión
                </a>
                    <style>
                        @media(min-width: 769px) {
                            .sub-logout {
                                margin-top: 40px;
                            }
                        }
                    </style>
            </div>
        </div>
    </div>`;
    div.className = "root-menu";

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const reportesEl: any = div.querySelector(".menu_reportes");
    const reportesBtnEl: any = div.querySelector(".btn_reportes");
    const reportarEl: any = div.querySelector(".menu_reportar");
    const reportarBtnEl: any = div.querySelector(".btn_reportar");
    const logoutEl: any = div.querySelector(".menu_logout");
    const logoutBtnEl: any = div.querySelector(".btn_logout");

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

    const btnPersonalData = div.querySelector(".btn-personal-data");
    const btnPassword = div.querySelector(".btn-password");
    const logoutFinalBtn = div.querySelector(".subtitle-logout");

    const helpPersonalData: any = div.querySelector(".help-personal-data");
    const helpPersonalPassword: any = div.querySelector(".help-password");

    btnPersonalData.addEventListener("click", () => {
        if (!currentState.userToken) {
            helpPersonalData.style.visibility = "visible";
        } else {
            params.goTo("/edit-data");
        }
    });

    btnPassword.addEventListener("click", () => {
        if (!currentState.userToken) {
            helpPersonalPassword.style.visibility = "visible";
        } else {
            params.goTo("/edit-password");
        }
    });

    logoutFinalBtn.addEventListener("click", () => {
        state.removeStateFromLocalStorage();
        params.goTo("/welcome");
    });

    return div;
}
