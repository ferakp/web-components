

class CustomBoxContainer extends HTMLElement {

    constructor() {
        super();

        // Attaches shadow to itself
        this._shadowRoot = this.attachShadow({ mode: "open" });

        // Creates middle (inner) container 
        let middleContainer = document.createElement("div");
        middleContainer.className = "middle-container";

        // Creates a container for title element
        let containerTitleArea = document.createElement("div");
        containerTitleArea.className = "container-title-area";

        // Creates a container for containers
        let containersArea = document.createElement("div");
        containersArea.className = "containers-area";

        // Inserts elements into containers
        middleContainer.appendChild(containerTitleArea);
        middleContainer.appendChild(containersArea);
        this._shadowRoot.appendChild(middleContainer);

        // Initializes the style
        this._style = document.createElement("style");
        this.initializeStyle(this._style);

    }


    /*
    * Adds title for the box container
    * @param {string} title - the title
    */
    addTitle = (title) => {
        let titleArea = this._shadowRoot.querySelector(".container-title-area");
        let titleElement = document.createElement("h1");
        titleElement.className = "container-title-area-title";
        titleElement.innerHTML = title;
        titleArea.appendChild(titleElement);

        let hr = document.createElement("hr");
        hr.className = "container-title-area-hr";
        titleArea.appendChild(hr);
    };


    /*
    * Adds a box (container)
    * @param {string} title - the title
    * @param {string} text - the text 
    * @param {string} imageSource - the src of the img tag
    * @param {string} buttonName - the name of the button
    * @param {string} buttonAddress - the address of the link attached to the button
    */
    addContainer = (title, text, imageSource, buttonName, buttonAddress) => {
        let containerItem = document.createElement("div");
        containerItem.className = "container-item";

        if (title) {
            let titleElement = document.createElement("h1");
            titleElement.innerHTML = title;
            titleElement.className = "container-item-title";
            containerItem.appendChild(titleElement);
        } else {
            let span = document.createElement("span");
            containerItem.appendChild(span);
        }

        if (text) {
            let textElement = document.createElement("p");
            textElement.className = "container-item-text";
            textElement.innerHTML = text;
            containerItem.appendChild(textElement);
        } else {
            let span = document.createElement("span");
            containerItem.appendChild(span);
        }

        if (imageSource) {
            let imageElement = document.createElement("img");
            imageElement.src = imageSource;
            imageElement.className = "container-item-image";
            containerItem.appendChild(imageElement);
        } else {
            let span = document.createElement("span");
            containerItem.appendChild(span);
        }

        let hr = document.createElement("hr");
        hr.className = "container-item-hr";
        containerItem.appendChild(hr);

        if (buttonName && buttonAddress) {
            let button = document.createElement("button");
            button.className = "container-item-button";
            button.innerHTML = buttonName;
            button.setAttribute("onclick", "window.open('" + buttonAddress + "')");
            containerItem.appendChild(button);
        } else {
            let span = document.createElement("span");
            containerItem.appendChild(span);
        }

        this._shadowRoot.querySelector(".containers-area").appendChild(containerItem);
    };





    // Initializes style 
    initializeStyle = (style) => {

        style.innerText = `
                            * {
                                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
                                box-sizing: border-box;
                            }


                            :host {
                                padding: 3rem 0 3rem 0;
                                display: grid;
                                grid-template-rows: auto;
                                background-color: rgba(214, 230, 245, 0.19);
                            }

                            .middle-container {
                                display: grid;
                                grid-template-rows: auto;
                                padding-left: 3rem;
                                width: 100%;
                                overflow: hidden;
                            }

                            .container-title-area {
                                width: 100%;
                                overflow: hidden;
                            }

                            .container-title-area-title {
                                color: black;
                                text-overflow: allipsis;
                                margin-bottom: 1px;
                            }

                            .container-title-area-hr {
                                width: 450px;
                                margin-left: 0;
                            }

                            .containers-area {
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                margin-top: 25px;
                                width: 100%;
                            }

                            .container-item {
                                padding: 1rem;
                                background-color: rgba(82, 165, 241, 0.09);
                                width: 100%;
                                min-width: 250px;
                                max-width: 350px;
                                height: 500px;
                                overflow: hidden;
                                display: grid;
                                grid-auto-rows: 1fr 3fr 4fr 1fr 1fr;
                                margin-right: 8px;
                                margin-bottom: 15px;
                            }

                            .container-item-text {
                                margin-top: 15px;
                                line-height: 1.50;
                                text-overflow: ellipsis;
                            }

                            .container-item-title {
                                color: blue;
                                text-overflow: ellipsis;
                            }
                                
                            .container-item-image {
                                width: 100%;
                                height: auto;
                            }

                            .container-item-hr {
                                align-self: center;
                                width: 100%;
                            }

                            .container-item-button {
                                background-color: transparent;
                                border: 1px solid grey;
                                font-weight: bold;
                                width: 120px;
                                height: 30px;
                                border-radius: 5px;
                                align-self: center;
                            }

                            .container-item-button:hover {
                                cursor: pointer;
                            }        
                            
                            @media screen and (max-width: 750px) {
                                
                                :host {
                                    padding: 0px;
                                    overflow: hidden;
                                }

                                .middle-container {
                                    margin: 0px;
                                    padding: 0px;
                                    width: 100%;
                                    overflow: hidden;
                                }

                                .container-item {
                                    margin-bottom: 8px;
                                }
                            }
        `;

        this._shadowRoot.appendChild(style);

    };


}


customElements.define("cs-box-container", CustomBoxContainer);