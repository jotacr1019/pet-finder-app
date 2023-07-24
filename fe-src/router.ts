import { initWelcome } from "./pages/welcome/index";
import { initHome } from "./pages/home/index";
import { initAuth } from "./pages/auth/index";
import { initSignUp } from "./pages/sign-up/index";
import { initMenu } from "./pages/menu/index";
import { initEditData } from "./pages/edit-data/index";
import { initEditPassword } from "./pages/edit-password/index";
import { initCreateReport } from "./pages/create-report/index";
import { initEditReport } from "./pages/edit-report/index";
import { initUserReportsEmpty } from "./pages/user-reports-empty/index";
import { initFull } from "./pages/user-reports-full/index";

const BASE_PATH = "/project-ppt-online"; // ??????

function isGithubPages() {
    return location.host.includes("github.io");
}

function initRouter(container: Element | null) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        const routes = [
            {
                path: /\/welcome/,
                component: initWelcome,
            },
            {
                path: /\/home/,
                component: initHome,
            },
            {
                path: /\/sign-in/,
                component: initAuth,
            },
            {
                path: /\/sign-up/,
                component: initSignUp,
            },
            {
                path: /\/menu/,
                component: initMenu,
            },
            {
                path: /\/edit-data/,
                component: initEditData,
            },
            {
                path: /\/edit-password/,
                component: initEditPassword,
            },
            {
                path: /\/create-report/,
                component: initCreateReport,
            },
            {
                path: /\/edit-report/,
                component: initEditReport,
            },
            {
                path: /\/user-reports-empty/,
                component: initUserReportsEmpty,
            },
            {
                path: /\/user-reports-full/,
                component: initFull,
            },
        ];
        for (const r of routes) {
            if (r.path.test(newRoute)) {
                const el = r.component({ goTo: goTo });
                if (container?.firstChild) {
                    container.firstChild.remove();
                }
                container?.appendChild(el);
            }
        }
    }
    if (location.pathname === "/" || location.host.includes("github.io")) {
        goTo("/welcome");
    } else {
        handleRoute(location.pathname);
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    };
}

export { initRouter };
