export function obtenerRutaDespuesDeAdmin(url: string) {
        const adminIndex = url.indexOf("/admin");
        if (adminIndex !== -1) {
            return url.substring(adminIndex);
        }
        return "";
}

export const preventReloadAnchor=(links:NodeListOf<HTMLAnchorElement>)=>{
    const currentUrl = obtenerRutaDespuesDeAdmin(window.location.href);

    links.forEach((e) => {
        if (currentUrl === e.pathname) {
            e.addEventListener("click", (event) => event.preventDefault());
        }
    });
}


export const ItsOnSameLink=(links:NodeListOf<HTMLLIElement>)=>{
    const currentUrl = obtenerRutaDespuesDeAdmin(window.location.href);

    links.forEach((e) => {

        const anchor = e.querySelector("a")
        if(anchor && currentUrl === anchor.pathname ){
            console.log(e)
            e.classList.add("bg-neutralBlue")

        }

    });
}