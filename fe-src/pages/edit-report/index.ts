import { Dropzone } from "dropzone";
import { mapboxClient } from "../../map-box.js";
import { openAndCloseNavbar } from "../welcome";
import { state } from "../../state";
import { imgToURLCloudinary } from "../create-report/index";
const dogImage = require("url:../../assets/dog2.png");
const mapImage = require("url:../../assets/imageMap.png");
const pictureImage = require("url:../../assets/picture.png");

let imgDataURL;

export function initEditReport(params) {
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
    <div class="container_title-edit mt-6">
        <h1 class="title is-3 has-text-centered has-text-black mb-4 is-size-2-tablet">
            Editar reporte de mascota
        </h1>
    </div>
    <div class="container_edit-report">
        <style>
            @media(min-width: 440px) {
                .container_edit-report {
                    padding: 40px 64px;
                }
            }
            @media(min-width: 480px) {
                .container_edit-report {
                    padding: 40px 84px;
                }
            }
            @media(min-width: 565px) {
                .container_edit-report {
                    padding: 40px 112px;
                }
            }
            @media(min-width: 635px) {
                .container_edit-report {
                    padding: 40px 142px;
                }
            }
            @media(min-width: 700px) {
                .container_edit-report {
                    padding: 40px 174px;
                }
            }
            @media(min-width: 769px) {
                .container_edit-report {
                    padding: 114px 170px 102px 170px;
                }
            }
            @media(min-width: 850px) {
                .container_edit-report {
                    padding: 114px 184px 102px 184px;
                }
            }
            @media(min-width: 970px) {
                .container_edit-report {
                    padding: 114px 195px 100px 195px;
                }
            }
            @media(min-width: 1024px) {
                .container_edit-report {
                    padding: 114px 240px 100px 240px;
                }
            }
            @media(min-width: 1110px) {
                .container_edit-report {
                    padding: 114px 280px 131px 280px;
                }
            }
        </style>
        <form class="form_edit">
            <div class="field">
                <label class="label has-text-left">Nombre</label>
                <div class="control has-icons-left">
                    <input class="input" name="name" type="text" placeholder="Ingresa nombre de la mascota">
                    <span class="icon is-small is-left">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    </span>
                </div>
                <p class="help help-name is-danger has-text-left" style="visibility: hidden">
                    Este campo es necesario
                </p>
            </div>
            <div class="field">
                <div class="box mb-1">
                    <div class="media is-justify-content-center">
                        <img  class="img_edit-report" src="${pictureImage}" alt="Image">
                            <style>
                                @media(min-width: 375px) {
                                    .img_edit-report {
                                        width: 220px;
                                        height: 220px;
                                    }
                                }
                                @media(min-width: 530px) {
                                    .img_edit-report {
                                        width: 240px;
                                        height: 240px;
                                    }
                                }
                                @media(min-width: 660px) {
                                    .img_edit-report {
                                        width: 260px;
                                        height: 260px;
                                    }
                                }
                                @media(min-width: 769px) {
                                    .img_edit-report {
                                        width: 290px;
                                        height: 280px;
                                    }
                                }
                                @media(min-width: 860px) {
                                    .img_edit-report {
                                        width: 320px;
                                        height: 310px;
                                    }
                                }
                                @media(min-width: 950px) {
                                    .img_edit-report {
                                        width: 360px;
                                        height: 350px;
                                    }
                                }
                                @media(min-width: 1110px) {
                                    .img_edit-report {
                                        width: 420px;
                                        height: 400px;
                                    }
                                }
                            </style>
                    </div>
                </div>
                <p class="help help-image is-danger has-text-centered" style="visibility: hidden">
                    Se requiere una foto
                </p>
            </div>
            <div class="file is-info is-flex is-flex-direction-column is-centered mb-6">
                <label class="file-label file-foto_edit is-align-self-stretch">
                    <input class="file-input" type="file" name="image">
                    <span class="file-cta is-justify-content-center">
                        <span class="file-label-2 span-foto_edit has-text-centered">
                            Agregar foto
                        </span>
                        <style>
                            @media(min-width: 365px) {
                                .file-label {
                                    min-width: 100%;
                                }
                            }
                            @media(min-width: 365px) {
                                .file-cta {
                                    min-width: 100%;
                                }
                            }
                        </style>
                    </span>
                </label>
                <label class="file-label file-delete_edit is-align-self-stretch" style="display: none;">
                    <input class="file-input" type="file" name="image">
                    <span class="file-cta is-justify-content-center has-background-danger-dark">
                        <span class="file-label-2 span-eliminar_edit has-text-centered">
                            Eliminar foto 
                        </span>
                        <style>
                            @media(min-width: 365px) {
                                .file-label {
                                    min-width: 100%;
                                }
                            }
                            @media(min-width: 365px) {
                                .file-cta {
                                    min-width: 100%;
                                }
                            }
                        </style>
                    </span>
                </label>
            </div>
            <div class="image-container is-flex mt-5">
                <img src="${mapImage}" alt="map-image">
            </div>
            <p class="subtitle is-6 has-text-centered">
                Buscá un punto de referencia para reportar la mascota. Por ejemplo, la ubicación donde lo viste por última vez.
            </p>
            <div class="field mb-6">
                <label class="label has-text-left">Ubicación</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" name="location" placeholder="Ingresa la ubicación">
                    <span class="icon is-small is-left">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e0e0e1}</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    </span>
                </div>
                <p class="help help-location is-danger has-text-left" style="visibility: hidden">
                    Este campo es necesario
                </p>
            </div>
            <div class="buttons-container_edit-report is-flex is-flex-direction-column mt-5">
                <p class="help help-error is-danger has-text-centered" style="visibility: hidden">
                    Ha surgido un error, por favor intenta de nuevo
                </p>
                <div class="control">
                    <button class="button is-info">
                        Guardar
                    </button>
                </div>
            </div>
        </form>
        <button class="button btn-found_edit is-success mt-4">
            Reportar como encontrado
        </button>
        <button class="button btn-delete_edit is-danger mt-4">
            Eliminar reporte
        </button>
        <span class="icon-text span_edit-report-success is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
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
            <span class="subtitle span-text is-4 is-size-3-tablet has-text-primary-light">
                Reporte editado
            </span>
        </span>
        <span class="icon-text span_edit-report-wait is-justify-content-center is-align-items-center has-text-success has-background-primary-dark" style="display: none">
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
    </div>`;
    div.className = "root-edit-report";

    const currentState: any = state.loadStateFromLocalStorage();

    pullProfile(div);

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

    const formEl: any = div.querySelector(".form_edit");
    const imageEl: any = div.querySelector(".img_edit-report");
    const spanPhotoel = div.querySelector(".span-foto_edit");
    const spanPhotoDeleteEl = div.querySelector(".span-eliminar_edit");
    const fileFotoEl: any = div.querySelector(".file-foto_edit");
    const fileDeleteEl: any = div.querySelector(".file-delete_edit");
    const helpNameEl: any = div.querySelector(".help-name");
    const helpImageEl: any = div.querySelector(".help-image");
    const helpLocationEl: any = div.querySelector(".help-location");
    const helpErrorEl: any = div.querySelector(".help-error");
    const btnFoundEl = div.querySelector(".btn-found_edit");
    const btnDeleteEl = div.querySelector(".btn-delete_edit");
    const spanInfo: any = div.querySelector(".span_edit-report-success");
    const spanWait: any = div.querySelector(".span_edit-report-wait");

    const myDropzone = new Dropzone(spanPhotoel, {
        url: "/falsa",
        autoProcessQueue: false,
    });

    function initSearchForm(callback, locationData: string) {
        mapboxClient.geocodeForward(
            locationData,
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
    }

    async function getLocation(locationData) {
        try {
            const coordinates = await new Promise((resolve) => {
                initSearchForm(function (results) {
                    const firstResult = results[0];
                    const [lng, lat] = firstResult.geometry.coordinates;
                    resolve({
                        lng: lng,
                        lat: lat,
                    });
                }, locationData);
            });
            return coordinates;
        } catch (error) {
            console.log(error);
        }
    }

    (async function () {
        spanPhotoel.addEventListener("click", (e) => {
            e.preventDefault();
        });

        myDropzone.on("thumbnail", function (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                imageEl.src = file.dataURL;
                imgDataURL = file.dataURL;
            };
            reader.readAsDataURL(file);
            fileFotoEl.style.display = "none";
            fileDeleteEl.style.display = "flex";
        });

        spanPhotoDeleteEl.addEventListener("click", (e) => {
            e.preventDefault();
            myDropzone.removeAllFiles();
            imageEl.src = pictureImage;
            imgDataURL = "";
            fileFotoEl.style.display = "flex";
            fileDeleteEl.style.display = "none";
        });

        formEl.addEventListener("submit", async (e) => {
            e.preventDefault();
            helpNameEl.style.visibility = "hidden";
            helpLocationEl.style.visibility = "hidden";
            helpImageEl.style.visibility = "hidden";
            const data = new FormData(e.target as any);
            const value = Object.fromEntries(data.entries());
            const name = value.name;
            const location = value.location;
            if (!name) {
                helpNameEl.style.visibility = "visible";
            }
            if (!location) {
                helpLocationEl.style.visibility = "visible";
            }
            if (!imgDataURL) {
                helpImageEl.style.visibility = "visible";
            }
            if (imgDataURL && location && name) {
                spanWait.style.display = "flex";
                spanWait.classList.add("full-screen");
                getLocation(location).then((locationResponse: any) => {
                    const lat = locationResponse.lat;
                    const lng = locationResponse.lng;
                    imgToURLCloudinary(imgDataURL).then(
                        async (CloudinaryResponse: any) => {
                            const UpdateResponse = await state.updatePetInDB({
                                name,
                                location,
                                imageUrl: CloudinaryResponse,
                                status: "missing",
                                last_lat: lat,
                                last_lng: lng,
                                id: currentState.pet.id,
                            });
                            if (UpdateResponse) {
                                spanWait.style.display = "none";
                                spanInfo.style.display = "flex";
                                spanInfo.classList.add("full-screen");
                                setTimeout(() => {
                                    params.goTo("/user-reports-full");
                                }, 2000);
                            } else {
                                spanWait.style.display = "none";
                                helpErrorEl.style.visibility = "visible";
                                console.log("error al editar el reporte");
                            }
                        }
                    );
                });
            }
        });
    })();

    btnFoundEl.addEventListener("click", async (e) => {
        e.preventDefault();
        spanWait.style.display = "flex";
        spanWait.classList.add("full-screen");
        const updateResponse = await state.updatePetInDB({
            id: currentState.pet.id,
            status: "found",
        });
        if (updateResponse) {
            spanWait.style.display = "none";
            spanInfo.style.display = "flex";
            spanInfo.classList.add("full-screen");
            const getPetsResponse = await state.getPetsOfUserFromDB();
            if (getPetsResponse) {
                setTimeout(() => {
                    params.goTo("/user-reports-full");
                }, 1000);
            } else {
                setTimeout(() => {
                    params.goTo("/user-reports-empty");
                }, 1000);
            }
        } else {
            spanWait.style.display = "none";
            helpErrorEl.style.visibility = "visible";
            console.log("error al editar el reporte");
        }
    });

    btnDeleteEl.addEventListener("click", async (e) => {
        e.preventDefault();
        const spanTextEl = div.querySelector(".span-text");
        spanWait.style.display = "flex";
        spanWait.classList.add("full-screen");
        const deleteResponse = await state.deletePetFromDB(currentState.pet.id);
        if (deleteResponse) {
            spanWait.style.display = "none";
            spanTextEl.innerHTML = "Reporte borrado";
            spanInfo.style.display = "flex";
            spanInfo.classList.add("full-screen");

            const getPetsResponse = await state.getPetsOfUserFromDB();
            if (getPetsResponse) {
                setTimeout(() => {
                    params.goTo("/user-reports-full");
                }, 1000);
            } else {
                setTimeout(() => {
                    params.goTo("/user-reports-empty");
                }, 1000);
            }
        } else {
            spanWait.style.display = "none";
            helpErrorEl.style.visibility = "visible";
            console.log("error al borrar el reporte");
        }
    });

    return div;
}

async function pullProfile(div) {
    const form: any = div.querySelector(".form_edit");
    const img: any = div.querySelector(".img_edit-report");
    const currentState: any = state.loadStateFromLocalStorage();
    form.name.value = currentState.pet.name;
    form.location.value = currentState.pet.location;
    img.src = currentState.pet.imageUrl;
    imgDataURL = currentState.pet.imageUrl[0];
}
