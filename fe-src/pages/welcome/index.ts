import { state } from "../../state";
import { mapboxClient } from "../../map-box.js";
const welcomeImage = require("url:../../assets/undraw_beach.png");
const dogImage = require("url:../../assets/dog2.png");

export function initWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand is-flex is-justify-content-space-between">
            <div class="navbar-item">
                <img src="${dogImage}" alt="dog-logo" width="72" height="50">
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
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="container-welcome">
        <style>
            @media(min-width: 430px) {
                .container-welcome {
                    padding: 35px 62px 34px 62px;
                }
            }
            @media(min-width: 468px) {
                .container-welcome {
                    padding: 35px 72px 34px 72px;
                }
            }
            @media(min-width: 502px) {
                .container-welcome {
                    padding: 35px 96px 34px 96px;
                }
            }
            @media(min-width: 550px) {
                .container-welcome {
                    padding: 35px 116px 34px 116px;
                }
            }
            @media(min-width: 585px) {
                .container-welcome {
                    padding: 35px 126px 34px 126px;
                }
            }
            @media(min-width: 605px) {
                .container-welcome {
                    padding: 35px 146px 34px 146px;
                }
            }
            @media(min-width: 648px) {
                .container-welcome {
                    padding: 35px 166px 34px 166px;
                }
            }
            @media(min-width: 685px) {
                .container-welcome {
                    padding: 35px 186px 34px 186px;
                }
            }
            @media(min-width: 728px) {
                .container-welcome {
                    padding: 35px 205px 34px 205px;
                }
            }
            @media(min-width: 769px) {
                .container-welcome {
                    padding: 124px 44px;
                }
            }
            @media(min-width: 850px) {
                .container-welcome {
                    padding: 124px 80px;
                }
            }
            @media(min-width: 970px) {
                .container-welcome {
                    padding: 124px 110px;
                }
            }
            @media(min-width: 1024px) {
                .container-welcome {
                    padding: 92px 130px;
                }
            }
            @media(min-width: 1110px) {
                .container-welcome {
                    padding: 110px 160px;
                }
            }
        </style>
        <div class="columns columns-welcome">
            <style>
                @media(min-width: 769px) {
                    .columns {
                        gap: 20px;
                    }
                }
                @media(min-width: 1024px) {
                    .columns {
                        gap: 60px;
                    }
                }
            </style>
            <div class="column is-half">
                <div class="is-flex is-justify-content-center">
                    <img src="${welcomeImage}" class="responsive-image" alt="Pet-Finder-welcome">
                        <style>
                            @media(min-width: 375px) {
                                .responsive-image {
                                    width: 66%;
                                    height: 32vh;
                                }
                            }
                            @media(min-width: 769px) {
                                .responsive-image {
                                    width: 90%;
                                    height: 46vh;
                                }
                            }
                            @media(min-width: 1024px) {
                                .responsive-image {
                                    width: 86%;
                                    height: 55vh;
                                }
                            }
                        </style>
                </div>
            </div>
            <div class="column is-half column-2">
                <style>
                    @media(min-width: 769px) {
                        .column-2 {
                            padding: 10px 40px;
                        }
                    }
                    @media(min-width: 1024px) {
                        .column-2 {
                            padding: 40px 45px;
                        }
                    }
                </style>
                <h1 class="title is-2 has-text-centered has-text-danger is-size-1-tablet">
                    Pet Finder App
                </h1>
                <p class="subtitle is-4 has-text-centered">
                    <strong>Encontrá y reportá mascotas perdidas cerca de tu ubicación</strong>
                </p>
                <div class="btn-location">
                    <button class="button is-primary">
                        Dar mi ubicación actual
                    </button>
                </div>
                <form class="welcome-form" style="display: none">
                    <div class="field has-addons mb-0" >
                        <div class="control div_input-location">
                            <input class="input" name="location" type="text" placeholder="Ingresa tu ubicación">
                        </div>
                        <div class="control div_btn-location">
                            <button class="button is-primary">
                                Buscar
                            </button>
                        </div>
                    </div>
                </form>
                <div class="btn-info">
                    <button class="button is-info has-text-centered">
                        ¿Cómo funciona Pet Finder?
                    </button>
                </div>
            </div>
            <span class="icon-text welcome_span-wait is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
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
            <span class="icon-text welcome_span-empty is-justify-content-center is-align-items-center has-text-success has-background-warning" style="display: none">
                <style>
                    .hidden {
                        display: none;
                    }
                    .full-screen-empty {
                        position: fixed;
                        min-width: 375px;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 45%;
                        max-width: 600px;
                        height: 22%;
                        padding: 8px 6px;
                        max-height: 400px;
                        z-index: 9999;
                        background-color: white;
                        overflow: auto;
                        gap: 12px;
                    }
                    @media (min-width: 769px) {
                        .full-screen-empty {
                            width: 50%;
                            max-width: 800px;
                            height: 24%;
                            max-height: 600px;
                            padding: 8px 8px;
                        }
                    }
                    @media (min-width: 1024px) {
                        .full-screen-empty {
                            width: 40%;
                            max-width: 800px;
                            height: 24%;
                            max-height: 600px;
                        }
                    }
                </style>
                <span class="subtitle is-5 is-size-4-tablet has-text-black-ter has-text-centered">
                    No se han encontrado mascotas reportadas cerca de su ubicación
                </span>
                <button class="button btn-empty has-background-warning-light is-focused">
                    <style>
                        .btn-empty {
                            width: 55%;
                        }
                    </style>
                    Aceptar
                </button>
            </span>
        </div>
        <article class="message message-article is-medium is-info is-flex-direction-column is-justify-content-center" style="display: none">
            <style>
                .hidden-article {
                    display: none;
                }
                .full-screen-article {
                    position: fixed;
                    min-width: 375px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 55%;
                    max-width: 600px;
                    min-height: 55%;
                    max-height: 400px;
                    z-index: 9999;
                    background-color: white;
                    overflow: auto;
                }
                @media (min-width: 769px) {
                    .full-screen-article {
                        width: 70%;
                        max-width: 800px;
                        height: 70%;
                        max-height: 600px;
                    }
                }
            </style>
            <div class="message-header">
                <p>
                    Pet Finder App
                </p>
                <button class="delete article_close-window is-medium" aria-label="delete">
                    X
                </button>
            </div>
            <div class="message-body has-text-centered is-align-items-center is-size-4-tablet">
                Una vez aceptes dar tu ubicación, "Pet Finder" iniciará una busqueda de mascotas reportadas como perdidas dentro de tu zona. O bien puedes iniciar sesión o registrarte para reportar una mascota como perdida.
                <style>
                    @media(min-width: 768px) {
                        .message-body {
                            padding: 0 95px;
                        }
                    }
                </style>
            </div>
        </article>
    </div>`;
    div.className = "root-welcome";
    console.log(state);

    const currentState: any = state.loadStateFromLocalStorage();

    openAndCloseNavbar(div);

    const datosEl: any = div.querySelector(".menu_datos");
    const datosBtnEl: any = div.querySelector(".btn_mis-datos");
    const reportesEl: any = div.querySelector(".menu_reportes");
    const reportesBtnEl: any = div.querySelector(".btn_reportes");
    const reportarEl: any = div.querySelector(".menu_reportar");
    const reportarBtnEl: any = div.querySelector(".btn_reportar");

    function handleDatosClick() {
        state.setRouteFromWelcome("mis-datos");
        params.goTo("/sign-in");
    }
    datosEl.addEventListener("click", handleDatosClick);
    datosBtnEl.addEventListener("click", handleDatosClick);

    function handleReportesClick() {
        state.setRouteFromWelcome("reportes");
        params.goTo("/sign-in");
    }
    reportesEl.addEventListener("click", handleReportesClick);
    reportesBtnEl.addEventListener("click", handleReportesClick);

    function handleReportarClick() {
        state.setRouteFromWelcome("reportar");
        params.goTo("/sign-in");
    }
    reportarEl.addEventListener("click", handleReportarClick);
    reportarBtnEl.addEventListener("click", handleReportarClick);

    //

    const articleEl: any = div.querySelector(".message-article");
    const articleBodyEl: any = div.querySelector(".message-body");
    const btnClose = div.querySelector(".article_close-window");
    const formEl: any = div.querySelector(".welcome-form");
    const btnLocation: any = div.querySelector(".btn-location");
    const btnInfo: any = div.querySelector(".btn-info");
    const spanWaitEl: any = div.querySelector(".welcome_span-wait");
    const spanEmptyEl: any = div.querySelector(".welcome_span-empty");
    const btnEmptyEl = div.querySelector(".btn-empty");
    const columnsEl: any = div.querySelector(".columns-welcome");

    btnInfo.addEventListener("click", (e) => {
        e.preventDefault();
        columnsEl.style.filter = "blur(4px)";
        articleEl.style.display = "block";
        articleBodyEl.style.height = "85%";
        articleBodyEl.style.display = "flex";
        articleEl.classList.add("full-screen-article");
        articleEl.style.opacity = "0.96";
        btnInfo.style.pointerEvents = "none";
        btnLocation.style.pointerEvents = "none";
    });

    btnClose.addEventListener("click", (e) => {
        e.preventDefault();
        articleEl.style.display = "none";
        columnsEl.style.filter = "none";
        btnInfo.style.pointerEvents = "auto";
        btnLocation.style.pointerEvents = "auto";
    });

    btnEmptyEl.addEventListener("click", (e) => {
        e.preventDefault();
        spanEmptyEl.style.display = "none";
    });

    btnLocation.addEventListener("click", async (e) => {
        e.preventDefault();
        (async function getCurrentLocation() {
            try {
                const currentLocation: any = await getLocationOfUser();
                state.setLocationOfUser(
                    currentLocation.lat,
                    currentLocation.lng
                );
                spanWaitEl.style.display = "flex";
                spanWaitEl.classList.add("full-screen");
                btnLocation.style.pointerEvents = "none";
                btnInfo.style.pointerEvents = "none";
                datosEl.style.pointerEvents = "none";
                datosBtnEl.style.pointerEvents = "none";
                reportesEl.style.pointerEvents = "none";
                reportesBtnEl.style.pointerEvents = "none";
                reportarEl.style.pointerEvents = "none";
                reportarBtnEl.style.pointerEvents = "none";

                const petsFound = await state.getPetsAroundZone(
                    currentLocation.lat,
                    currentLocation.lng
                );
                if (petsFound.length > 0) {
                    currentState.petsAroundUser = petsFound;
                    state.setState(currentState);
                    setTimeout(() => {
                        params.goTo("/home");
                    }, 1000);
                } else {
                    spanWaitEl.style.display = "none";
                    spanEmptyEl.style.display = "flex";
                    spanEmptyEl.classList.add("full-screen-empty");
                }
            } catch (error) {
                console.log(error);
                spanWaitEl.style.display = "none";
                btnLocation.style.display = "none";
                formEl.style.display = "flex";
                formEl.style.width = "100%";
            }
        })();
    });

    async function initSearchForm(callback) {
        formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            spanWaitEl.style.display = "flex";
            spanWaitEl.classList.add("full-screen");
            const data = new FormData(e.target as any);
            const value = Object.fromEntries(data.entries()) as any;
            mapboxClient.geocodeForward(
                value.location,
                {
                    country: "cr",
                    autocomplete: true,
                    language: "es",
                },
                function (err, data, res) {
                    console.log(data);
                    if (!err) callback(data.features);
                }
            );
        });
    }

    (async function getLocationResults() {
        try {
            initSearchForm(async function (results) {
                const firstResult = results[0];
                const [lng, lat] = firstResult.geometry.coordinates;
                state.setLocationOfUser(lat, lng);
                const petsFound = await state.getPetsAroundZone(lat, lng);
                if (petsFound.length > 0) {
                    currentState.petsAroundUser = petsFound;
                    state.setState(currentState);
                    setTimeout(() => {
                        params.goTo("/home");
                    }, 1000);
                } else {
                    console.log("No se encontraron mascotas");
                    spanWaitEl.style.display = "none";
                    spanEmptyEl.style.display = "flex";
                    spanEmptyEl.classList.add("full-screen-empty");
                }
            });
        } catch (error) {
            console.log(error);
        }
    })();

    return div;
}

export function openAndCloseNavbar(div) {
    const btn = div.querySelector(".dropdown");
    btn.addEventListener("click", () => {
        btn.classList.toggle("is-active");
    });
}

async function getLocationOfUser() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(false);
        }
        const onUbicacionConcedida = (location) => {
            const coords = location.coords;
            resolve({ lat: coords.latitude, lng: coords.longitude });
        };
        const onErrorDeUbicacion = (err) => {
            console.log("Error obteniendo ubicación: ", err);
            reject(false);
        };
        navigator.geolocation.getCurrentPosition(
            onUbicacionConcedida,
            onErrorDeUbicacion
        );
    });
}
