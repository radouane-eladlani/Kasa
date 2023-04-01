import React from "react"
import "./Main.css"
/* j'utilise la function Main pour avoirs les marges dans toute les pages du site */
function Main(props) {
/*on utilise props.children pour pouvoir utiliser la function Main dans les
autres pages du site*/
    let children = props.children;
    if (!Array.isArray(children)) {
        children = [children];
    }
    return <div className="main">{children}</div>
}

export default Main