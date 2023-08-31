import { openAndCloseNavbar } from "../welcome/index";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");

export function initFull(params) {
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
                        <a class="button is-warning btn_reportar">
                            Reportar mascota
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
    <div class="container_title-report-full mt-6">
        <h1 class="title is-3 has-text-centered has-text-black mb-4 is-size-2-tablet">
            Mascotas Reportadas
        </h1>
    </div>
    <div class="container-reports-full">
        <style>
            @media(min-width: 430px) {
                .container-reports-full {
                    padding: 40px 42px 171px;
                }
            }
            @media(min-width: 468px) {
                .container-reports-full {
                    padding: 40px 50px 171px;
                }
            }
            @media(min-width: 510px) {
                .container-reports-full {
                    padding: 40px 60px 171px;
                }
            }
            @media(min-width: 550px) {
                .container-reports-full {
                    padding: 40px 70px 158px;
                }
            }
            @media(min-width: 605px) {
                .container-reports-full {
                    padding: 40px 80px 158px;
                }
            }
            @media(min-width: 640px) {
                .container-reports-full {
                    padding: 40px 90px 158px;
                }
            }
            @media(min-width: 665px) {
                .container-reports-full {
                    padding: 40px 105px 158px;
                }
            }
            @media(min-width: 702px) {
                .container-reports-full {
                    padding: 40px 120px 158px;
                }
            }
            @media(min-width: 742px) {
                .container-reports-full {
                    padding: 40px 135px 158px;
                }
            }
            @media(min-width: 769px) {
                .container-reports-full {
                    padding: 80px 40px;
                }
            }
            @media(min-width: 850px) {
                .container-reports-full {
                    padding: 80px 40px;
                }
            }
            @media(min-width: 970px) {
                .container-reports-full {
                    padding: 90px 40px;
                }
            }
            @media(min-width: 1024px) {
                .container-reports-full {
                    padding: 90px 40px;
                }
            }
            @media(min-width: 1110px) {
                .container-reports-full {
                    padding: 122px 60px;
                }
            }
        </style>
        <div class="container_cards-reports-full">
            <style>
                @media(min-width: 768px) {
                    .container_cards-reports-full {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        gap: 40px;
                    }
                }
                @media(min-width: 1024px) {
                    .container_cards-reports-full {
                        gap: 52px;
                    }
                }
            </style>
        </div>
    </div>`;
    div.className = "root-reports-full";

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const datosEl = div.querySelector(".menu_datos");
    const datosBtnEl = div.querySelector(".btn_mis-datos");
    const reportarEl = div.querySelector(".menu_reportar");
    const reportarBtnEl = div.querySelector(".btn_reportar");
    const logoutEl = div.querySelector(".menu_logout");
    const logoutBtnEl = div.querySelector(".btn_logout");

    async function handleDatosClick() {
        if (!currentState.userToken) {
            state.setRouteFromWelcome("mis-datos");
            params.goTo("/sign-in");
        } else {
            params.goTo("/menu");
        }
    }
    datosEl.addEventListener("click", handleDatosClick);
    datosBtnEl.addEventListener("click", handleDatosClick);

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

    const containerCardsEl = div.querySelector(".container_cards-reports-full");
    state.getPetsOfUserFromDB().then((pets) => {
        pets.forEach((pet) => {
            containerCardsEl.innerHTML += createCard(pet);
            const editButtons = div.querySelectorAll(".btn-reports-full");
            editButtons.forEach((button) => {
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const id = parseInt(
                        button.getAttribute("id").split("-")[1]
                    );
                    const arrayOfPets = currentState.petsOfUser;
                    arrayOfPets.forEach((pet) => {
                        if (pet.id === id) {
                            state.setDataOfPet(pet);
                            params.goTo("/edit-report");
                        }
                    });
                });
            });
        });
    });

    return div;
}

function createCard(pet) {
    return `
    <div class="card card_reports-full has-background-black-ter" id="${pet.id}">
        <style>
            @media(min-width: 430px) {
                .card_home {
                    min-width: 340px;
                    max-width: 340px;
                }
            }
            @media(min-width: 550px) {
                .card_reports-full {
                    min-width: 380px;
                    max-width: 380px;
                }
            }
            @media(min-width: 769px) {
                .card_reports-full {
                    min-width: 398px;
                    max-width: 398px;
                }
            }
            @media(min-width: 1024px) {
                .card_reports-full {
                    min-width: 438px;
                    max-width: 438px;
                }
            }
        </style>
        <header class="card-header is-flex is-justify-content-center">
            <div class="container_img-reports-full is-flex is-justify-content-center is-align-self-center m-2">
                <img src="${pet.imageUrl[0]}" alt="Pet-Finder-welcome" class="responsive-img_reports-full">
                    <style>
                        @media(min-width: 550px) {
                            .responsive-img_reports-full {
                                width: 100%;
                                height: 28vh;
                            }
                        }
                        @media(min-width: 769px) {
                            .responsive-img_reports-full {
                                width: 100%;
                                height: 34vh;
                            }
                        }
                        @media(min-width: 930px) {
                            .responsive-img_reports-full {
                                width: 100%;
                                height: 34vh;
                            }
                        }
                        @media(min-width: 1024px) {
                            .responsive-img_reports-full {
                                width: 100%;
                                height: 42vh;
                            }
                        }
                </style>
            </div>
        </header>
        <div class="card-content columns columns-reports-full is-2 is-vcentered mx-0 py-2 px-5 is-mobile">
            <style>
                @media(min-width: 550px) {
                    .columns-reports-full {
                        min-width: 380px;
                        max-width: 380px;
                    }
                }
                @media(min-width: 769px) {
                    .columns-reports-full {
                        min-width: 398px;
                        max-width: 398px;
                    }
                }
                @media(min-width: 1024px) {
                    .columns-reports-full {
                        min-width: 438px;
                        max-width: 438px;
                    }
                }
            </style>
            <div class="content column is-half mb-0 px-0">
                <h2 class="title is-3 is-size-2-tablet mb-0 has-text-danger-light">
                    ${pet.name}
                </h2>
                <hr class="dropdown-divider has-background-grey">
                <br>
                <h3 class="subtitle is-6 is-size-5-tablet mt-1 mb-0 has-text-info-light">
                    ${pet.location}
                </h3>
            </div>
            <div class="column is-half is-flex is-justify-content-center px-0 mx-3">
                <button class="button btn-reports-full is-medium is-primary has-background-link is-rounded" id="editButton-${pet.id}">
                    <style>
                        @media(min-width: 430px) {
                            .btn-reports-full {
                                width: 85%;
                                gap: 6px;
                            }
                        }
                        @media(min-width: 769px) {
                            .btn-reports-full {
                                width: 85%;
                                gap: 6px;
                            }
                        }
                    </style>
                    Editar
                    <span class="icon is-small is-right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ededed}</style><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
    `;
}
