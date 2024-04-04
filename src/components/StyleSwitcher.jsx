import React from "react";


function StyleSwitcher() {

    let defaultStyles = false;

    const switchStyle = () => {

        if (!defaultStyles) {
            document.documentElement.style.setProperty('--Background-color', '#4E8397');
            document.documentElement.style.setProperty('--Primary-light-color', '#D5CABD');
            document.documentElement.style.setProperty('--Primary-font', 'var(--Secondary-font)');
            defaultStyles = true;
        } else {
            document.documentElement.style.removeProperty('--Background-color');
            document.documentElement.style.removeProperty('--Primary-light-color');
            document.documentElement.style.removeProperty('--Primary-font');
            defaultStyles = false;
        }
    }


    return (
        <>
            <div className="container" id="changeStyle">
                <div>
                    <h2 className="Title">Este estilo Cambia</h2>
                    <button id="btn-switch" className={"btn-switch"} onClick={switchStyle}>Switch</button>
                </div>
            </div>
        </>
    )
}


export default StyleSwitcher;