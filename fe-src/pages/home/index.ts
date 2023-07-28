import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
const dogImage = require("url:../../assets/dog2.png");

export function initHome(params) {
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
                        <hr class="dropdown-divider has-background-grey">
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
                        <a class="button is-success btn_start is-rounded">
                            <strong>Inicio</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container_title-home">
        <h1 class="title is-3 has-text-centered is-size-2-tablet mt-6">
            Mascotas perdidas cerca
        </h1>
    </div>
    <div class="container_home">
        <style>
            @media(min-width: 430px) {
                .container_home {
                    padding: 40px 42px;
                }
            }
            @media(min-width: 468px) {
                .container_home {
                    padding: 40px 50px;
                }
            }
            @media(min-width: 510px) {
                .container_home {
                    padding: 40px 60px;
                }
            }
            @media(min-width: 550px) {
                .container_home {
                    padding: 40px 70px;
                }
            }
            @media(min-width: 605px) {
                .container_home {
                    padding: 40px 80px;
                }
            }
            @media(min-width: 640px) {
                .container_home {
                    padding: 40px 90px;
                }
            }
            @media(min-width: 665px) {
                .container_home {
                    padding: 40px 105px;
                }
            }
            @media(min-width: 702px) {
                .container_home {
                    padding: 40px 120px;
                }
            }
            @media(min-width: 742px) {
                .container_home {
                    padding: 40px 135px;
                }
            }
            @media(min-width: 769px) {
                .container_home {
                    padding: 80px 40px;
                }
            }
            @media(min-width: 850px) {
                .container_home {
                    padding: 80px 40px;
                }
            }
            @media(min-width: 970px) {
                .container_home {
                    padding: 90px 40px;
                }
            }
            @media(min-width: 1024px) {
                .container_home {
                    padding: 90px 40px;
                }
            }
            @media(min-width: 1110px) {
                .container_home {
                    padding: 122px 60px;
                }
            }
        </style>
        <div class="container_cards-home">
            <style>
                @media(min-width: 768px) {
                    .container_cards-home {
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 40px;
                        justify-content: center;
                        align-items: flex-start;
                    }
                }
                @media(min-width: 1024px) {
                    .container_cards-home {
                        gap: 52px;
                    }
                }
            </style>
        </div>
        <span class="icon-text home_span-form has-background-grey-dark is-flex-direction-column is-align-items-center has-text-success has-background-primary-dark px-5 pt-3 pb-5" style="display: none">
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
                    min-height: 74%;
                    z-index: 9999;
                    background-color: white;
                    overflow: auto;
                    // gap: 8px;
                }
                @media (min-width: 550px) {
                    .full-screen {
                        min-width: 420px;
                        max-width: 420px;
                        height: 88%;
                        max-height: 600px;
                    }
                }
                @media (min-width: 769px) {
                    .full-screen {
                        min-width: 460px;
                        max-width: 460px;
                        height: 88%;
                        max-height: 600px;
                    }
                }
                @media (min-width: 1024px) {
                    .full-screen {
                        min-width: 420px;
                        max-width: 420px;
                        height: 88%;
                        max-height: 600px;
                    }
                }
            </style>
            <button class="button form_btn-close is-success has-text-primary-light btn-form_close is-rounded is-align-self-flex-end">
                X
            </button>
            <form class="form_home">
                <div class="field">
                    <label class="label has-text-left has-text-primary-light">Nombre</label>
                    <div class="control has-icons-left">
                        <input class="input has-background-grey has-text-primary-light" name="name" type="text" placeholder="Ingresa tu nombre">
                        <span class="icon is-small is-left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        </span>
                    </div>
                    <p class="help help-name is-danger has-text-left" style="visibility: hidden">
                        Este campo es necesario
                    </p>
                </div>
                <div class="field">
                    <label class="label has-text-left has-text-primary-light">Teléfono</label>
                    <div class="control has-icons-left">
                        <input class="input has-background-grey has-text-primary-light" name="phone" type="tel" placeholder="Ej: 8888-8888">
                        <span class="icon is-small is-left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </span>
                    </div>
                    <p class="help help-phone is-danger has-text-left" style="visibility: hidden">
                        Este campo es necesario
                    </p>
                </div>
                <div class="field">
                    <label class="label has-text-left has-text-primary-light">¿Dónde lo viste?</label>
                    <div class="control">
                        <textarea class="textarea has-background-grey has-text-primary-light" name="message"></textarea>
                    </div>
                    <p class="help help-message is-danger has-text-left" style="visibility: hidden">
                        Este campo es necesario
                    </p>
                </div>
                <div class="field">
                    <p class="control has-text-centered">
                        <button class="button btn-auth is-success has-text-primary-light">
                            Enviar reporte
                        </button>
                    </p>
                </div>
            </form>
        </span>
    </div>
    `;
    div.className = "root-home";

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const startEl: any = div.querySelector(".menu_start");
    const btnStartEl: any = div.querySelector(".btn_start");
    const datosEl: any = div.querySelector(".menu_datos");
    const datosBtnEl: any = div.querySelector(".btn_mis-datos");
    const reportesEl: any = div.querySelector(".menu_reportes");
    const reportesBtnEl: any = div.querySelector(".btn_reportes");
    const reportarEl: any = div.querySelector(".menu_reportar");
    const reportarBtnEl: any = div.querySelector(".btn_reportar");

    function handleStartClick() {
        params.goTo("/welcome");
    }
    startEl.addEventListener("click", handleStartClick);
    btnStartEl.addEventListener("click", handleStartClick);

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

    //

    const containerCardsEl: any = div.querySelector(".container_cards-home");
    const spanFormEl: any = div.querySelector(".home_span-form");
    const formEl: any = div.querySelector(".form_home");
    const btnCloseFormEl: any = div.querySelector(".form_btn-close");
    const helpNameEl: any = div.querySelector(".help-name");
    const helpPhoneEl: any = div.querySelector(".help-phone");
    const helpMessageEl: any = div.querySelector(".help-message");

    btnCloseFormEl.addEventListener("click", (e) => {
        e.preventDefault();
        containerCardsEl.style.filter = "none";
        spanFormEl.style.display = "none";
    });

    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        helpNameEl.style.visibility = "hidden";
        helpPhoneEl.style.visibility = "hidden";
        helpMessageEl.style.visibility = "hidden";
        const lastState = state.getState();
        const data = new FormData(e.target as any);
        const value = Object.fromEntries(data.entries()) as any;
        const reporter_name = value.name;
        const phone_number = parseInt(value.phone.split("-").join(""));
        const message = value.message;
        if (!reporter_name) {
            helpNameEl.style.visibility = "visible";
        }
        if (!phone_number) {
            helpPhoneEl.style.visibility = "visible";
        }
        if (!message) {
            helpMessageEl.style.visibility = "visible";
        }
        if (reporter_name && phone_number && message) {
            formEl.style.pointerEvents = "none";
            const createResponse = await state.createReportInDB({
                reporter_name,
                phone_number,
                message,
                petId: lastState.pet.id,
                pet_name: lastState.pet.name,
                userId: lastState.pet.userId,
            });
            if (createResponse) {
                formEl.name.value = "";
                formEl.phone.value = "";
                formEl.message.value = "";
                spanFormEl.style.display = "none";
                containerCardsEl.style.filter = "none";
            }
        }
    });

    //

    const petsAround = currentState.petsAroundUser;
    petsAround.forEach((pet) => {
        containerCardsEl.innerHTML += createCard(pet);
        const ReportButtons: any = div.querySelectorAll(".btn-card_home");
        ReportButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                spanFormEl.style.display = "flex";
                spanFormEl.classList.add("full-screen");
                containerCardsEl.style.filter = "blur(4px)";
                const id = parseInt(button.getAttribute("id").split("-")[1]);
                const arrayOfPets = currentState.petsAroundUser;
                arrayOfPets.forEach((pet) => {
                    if (pet.id === id) {
                        state.setDataOfPet(pet);
                    }
                });
            });
        });
    });

    return div;
}

function createCard(pet) {
    return `
    <div class="card card_home has-background-black-ter" id="${pet.id}">
        <style>
            @media(min-width: 430px) {
                .card_home {
                    min-width: 340px;
                    max-width: 340px;
                }
            }
            @media(min-width: 550px) {
                .card_home {
                    min-width: 380px;
                    max-width: 380px;
                }
            }
            @media(min-width: 769px) {
                .card_home {
                    min-width: 398px;
                    max-width: 398px;
                }
            }
            @media(min-width: 1024px) {
                .card_home {
                    min-width: 438px;
                    max-width: 438px;
                }
            }
        </style>
        <header class="card-header is-flex is-justify-content-center">
            <div class="container_img-home is-flex is-justify-content-center is-align-self-center m-2">
                <img src="${pet.imageUrl}" alt="Pet-Finder-welcome" class="responsive-img_home">
                    <style>
                        @media(min-width: 550px) {
                            .responsive-img_home {
                                width: 100%;
                                height: 28vh;
                            }
                        }
                        @media(min-width: 769px) {
                            .responsive-img_home {
                                width: 100%;
                                height: 34vh;
                            }
                        }
                        @media(min-width: 930px) {
                            .responsive-img_home {
                                width: 100%;
                                height: 34vh;
                            }
                        }
                        @media(min-width: 1024px) {
                            .responsive-img_home {
                                width: 100%;
                                height: 42vh;
                            }
                        }
                </style>
            </div>
        </header>
        <div class="card-content columns columns-home is-2 is-vcentered mx-0 py-2 px-5 is-mobile">
            <style>
                @media(min-width: 550px) {
                    .columns-home {
                        min-width: 380px;
                        max-width: 380px;
                    }
                }
                @media(min-width: 769px) {
                    .columns-home {
                        min-width: 398px;
                        max-width: 398px;
                    }
                }
                @media(min-width: 1024px) {
                    .columns-home {
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
                <button class="button btn-card_home is-medium is-primary has-background-danger is-rounded" id="editButton-${pet.id}">
                    <style>
                        @media(min-width: 430px) {
                            .btn-card_home {
                                width: 88%;
                                gap: 2px;
                            }
                        }
                        @media(min-width: 769px) {
                            .btn-card_home {
                                width: 85%;
                                gap: 6px;
                            }
                        }
                    </style>
                    Reportar
                    <span class="icon is-small is-right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ededed}</style><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
    `;
}
