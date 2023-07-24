import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");
const emptyImage = require("url:../../assets/undraw_post.png");

export function initUserReportsEmpty(params) {
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
                        <a class="button btn_reportar is-warning">
                            Reportar mascota
                        </a>
                        <a class="button btn_mis-datos is-primary">
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
    <div class="container_reports-empty">
        <style>
            @media(min-width: 395px) {
                .container_reports-empty {
                    padding: 20px 64px;
                }
            }
            @media(min-width: 425px) {
                .container_reports-empty {
                    padding: 20px 84px;
                }
            }
            @media(min-width: 480px) {
                .container_reports-empty {
                    padding: 32px 64px
                }
            }
            @media(min-width: 568px) {
                .container_reports-empty {
                    padding: 40px 112px;
                }
            }
            @media(min-width: 635px) {
                .container_reports-empty {
                    padding: 40px 142px;
                }
            }
            @media(min-width: 700px) {
                .container_reports-empty {
                    padding: 40px 174px;
                }
            }
            @media(min-width: 769px) {
                .container_reports-empty {
                    padding: 154px 70px 122px 70px;
                }
            }
            @media(min-width: 850px) {
                .container_reports-empty {
                    padding: 154px 108px 122px 108px;
                }
            }
            @media(min-width: 970px) {
                .container_reports-empty {
                    padding: 154px 140px 122px 140px;
                }
            }
            @media(min-width: 1024px) {
                .container_reports-empty {
                    padding: 154px 200px 128px 200px;
                    height: 91vh;
                }
            }
            @media(min-width: 1110px) {
                .container_reports-empty {
                    padding: 154px 250px 128px 250px;
                }
            }
        </style>
        <div class="columns">
            <style>
                @media(min-width: 769px) {
                    .columns {
                        gap: 20px;
                    }
                }
                @media(min-width: 850px) {
                    .columns {
                        gap: 40px;
                    }
                }
                @media(min-width: 1024px) {
                    .columns {
                        gap: 50px;
                    }
                }
                @media(min-width: 1110px) {
                    .columns {
                        gap: 75px;
                    }
                }
            </style>
            <div class="column is-half is-flex is-align-items-center">
                <div class="image-container is-flex is-justify-content-center is-hidden-mobile">
                    <img src="${emptyImage}" alt="map-image">
                </div>
            </div>
            <div class="column is-half column-reports-empty">
                <style>
                    @media(min-width: 375px) {
                        .column-reports-empty {
                            margin-bottom: 90px;
                        }
                    }
                </style>
                <h1 class="title is-3 has-text-centered has-text-black mb-4 is-size-2-tablet">
                    Mascotas Reportadas
                </h1>
                <p class="subtitle is-6 mt-1 mb-6 has-text-centered">
                    Aún no has hecho reportes de mascotas perdidas
                </p>
                <div class="image-container is-flex is-justify-content-center is-hidden-tablet mt-6">
                    <img class="" src="${emptyImage}" alt="map-image">
                </div>
                <div class="buttons-container-create-report is-flex is-flex-direction-column">
                    <button class="button btn-report is-info mt-6 is-justify-content-center">
                        Publicar reporte
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    div.className = "root-reports-empty";

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const menuDataEl = div.querySelector(".menu_datos");
    const btnDataEl = div.querySelector(".btn_mis-datos");
    const menuReportEl = div.querySelector(".menu_reportar");
    const btnReportEl = div.querySelector(".btn_reportar");
    const logoutEl = div.querySelector(".menu_logout");
    const logoutBtnEl = div.querySelector(".btn_logout");

    function handleDatosClick() {
        if (!currentState.userToken) {
            state.setRouteFromWelcome("mis-datos");
            params.goTo("/sign-in");
        } else {
            params.goTo("/menu");
        }
    }
    menuDataEl.addEventListener("click", handleDatosClick);
    btnDataEl.addEventListener("click", handleDatosClick);

    function handleReportarClick() {
        if (!currentState.userToken) {
            state.setRouteFromWelcome("reportar");
            params.goTo("/sign-in");
        } else {
            params.goTo("/create-report");
        }
    }
    menuReportEl.addEventListener("click", handleReportarClick);
    btnReportEl.addEventListener("click", handleReportarClick);

    function handleLogoutClick() {
        state.removeStateFromLocalStorage();
        params.goTo("/welcome");
    }
    logoutEl.addEventListener("click", handleLogoutClick);
    logoutBtnEl.addEventListener("click", handleLogoutClick);

    //

    const btnEl = div.querySelector(".btn-report");
    btnEl.addEventListener("click", () => {
        params.goTo("/create-report");
    });

    return div;
}
