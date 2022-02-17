import React from "react";

//children é todo conteúdo que o component recebeu dentro das tags. ex: <HEADER> oi mundo (isso é um children) </HEADER>

function Header({title, children}){
    return(
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    )
}

export default Header;