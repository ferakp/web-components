

/*
* Class for <cs-main-container> element 
*/
class CustomMainContainer extends HTMLElement {

    constructor() {
        super();

        // Attaches the shadow to itself
        this._shadowRoot = this.attachShadow({ mode: "open" });

        // Creates a container
        let container = document.createElement("div");
        container.className = "middle-container";

        // Creates a container of the left side
        let innerContainerLeft = document.createElement("div");
        innerContainerLeft.className = "inner-container-left";

        // Creates a text area inside the container
        let innerContainerLeftTextArea = document.createElement("div");
        innerContainerLeftTextArea.className = "inner-container-left-text-area";
        innerContainerLeft.appendChild(innerContainerLeftTextArea);

        // Creates a box area inside the container
        let innerContainerLeftBoxArea = document.createElement("div");
        innerContainerLeftBoxArea.className = "inner-container-left-box-area";
        innerContainerLeft.appendChild(innerContainerLeftBoxArea);

        // Inserts the container of the left side into the middle-container
        container.appendChild(innerContainerLeft);

        // Creates a container for the right side
        let innerContainerRight = document.createElement("div");
        innerContainerRight.className = "inner-container-right";
        innerContainerRight.style.display = "none";

        // Inserts the container of the right side into the middle-container
        container.appendChild(innerContainerRight);

        // Inserts the middle-container into this element
        this._shadowRoot.appendChild(container);

        // Initializes the style
        this._style = document.createElement("style");
        this.initializeStyle(this._style);

    }



    /*
    * Add title to the left container
    * @param {string} title - the text content of the title (h1) tag
    * @param {boolean} override - if true the content of the title will be overrided 
    */
    addTitle = (title, override = false) => {
        let titleTag = this._shadowRoot.querySelector(".inner-container-left-title");
        let innerContainerLeftTextArea = this._shadowRoot.querySelector(".inner-container-left-text-area");
        if (titleTag && override) {
            if (override) {
                titleTag.innerHTML = title;
            }
        } else if ((titleTag && !override) || (!titleTag)) {
            let newTitleTag = document.createElement("h1");
            newTitleTag.className = "inner-container-left-title";
            newTitleTag.innerHTML = title;

            if (this._shadowRoot.querySelector(".inner-container-left-text-content"))
                innerContainerLeftTextArea.insertBefore(newTitleTag, this._shadowRoot.querySelector(".inner-container-left-text-content"));
            else innerContainerLeftTextArea.appendChild(newTitleTag);
        }
    };


    /*
    * Add paragraph to the left container
    * @param {string} text - text content of the paragraph
    */
    addText = (text) => {
        let paragraph = document.createElement("p");
        paragraph.className = "inner-container-left-text-content";
        paragraph.innerHTML = text;
        this._shadowRoot.querySelector(".inner-container-left-text-area").appendChild(paragraph);
    };


    /*
    * Add buttons to the left container
    * @param {string} iconClassName - the full Font Awesome class name of the icon 
    * @param {string} boxName - the text content of the box (usually the name)
    * @param {string} address - the URL address of the box
    */
    addClickableBox = (iconClassName, boxName, address) => {
        let boxArea = this._shadowRoot.querySelector(".inner-container-left-box-area");

        let button = document.createElement("button");
        button.className = "inner-container-left-box";
        if(address) button.setAttribute("onclick", "window.open('"+address+"')");

        let slot = document.createElement("slot");
        let slotName = "inner-container-left-box-icon"+this._shadowRoot.querySelectorAll(".inner-container-left-box").length;
        slot.setAttribute("name", slotName);

        let icon = document.createElement("i");
        icon.className = iconClassName + " inner-container-left-box-icon";
        icon.setAttribute("slot", slotName);

        let paragraph = document.createElement("p");
        paragraph.className = "inner-container-left-box-text";
        paragraph.innerHTML = boxName;

        button.appendChild(slot);
        button.appendChild(paragraph);
        boxArea.appendChild(button);
        this.appendChild(icon);
    };



    /*
    * Add image to the right container and displays the .inner-container-right named container
    * @oaram {string} imageSrc - the src of the img tag
    */
    addImage = (imageSrc) => {
        let containerRight = this._shadowRoot.querySelector(".inner-container-right");
        containerRight.style.display = "flex";
        let img = document.createElement("img");
        img.className = "inner-container-right-image";
        img.src = imageSrc;
        containerRight.appendChild(img);
    };


    // Adds style
    initializeStyle = (style) => {

        style.innerText = `
                            * {
                                box-sizing: border-box;
                                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
                            }
                            
                            :host {
                                padding: 3rem;
                                background-color: rgba(180, 228, 223, 0.082);
                                display: grid;
                                grid-template-rows: auto;
                            }
                            
                            .middle-container {
                                width: 100%;
                                display: grid;
                                grid-template-columns: 6fr 4fr;
                                
                            }
                            
                            .inner-container-left {
                                max-width: 640px;
                                display: flex;
                                flex-direction: column;
                            }
                            
                            
                            .inner-container-left * {
                                display: inline-block;
                            }
                            
                            .inner-container-left-title {
                                color: rgb(30, 139, 195);
                                font-size: 2rem;
                            }
                            
                            .inner-container-left-text-content {
                                line-height: 1.5;
                                font-size: 1.25rem;
                                font-weight: 300;
                            }
                            
                            .inner-container-left-box-area {
                                display: flex;
                                flex-direction: row;
                            }
                            
                            .inner-container-left-box {
                                width: 150px;
                                height: 50px;
                                display: flex;
                                flex-direction: row;
                                text-align: center;
                                justify-content: center;
                                align-content: center;                  
                                border: 0px;
                                background-color: rgb(30, 139, 195);
                                border-radius: 5px;
                            
                                
                            }
                            
                            .inner-container-left-box:hover {
                                cursor: pointer;
                            }


                            .inner-container-left-box:not(:nth-child(1)) {
                                margin-left: 1rem;
                            }
                            

                            ::slotted(.inner-container-left-box-icon) {
                                font-size: 3rem !important;
                                margin-right: 1rem;
                                color: white;
                            }
                            
                            .inner-container-left-box-text {
                                font-size: 1rem;
                                font-weight: bold;
                                color: white;
                            }
                            
                            .inner-container-right {
                                max-width: 630px;
                                max-height: 50vh;
                                overflow: hidden;
                                text-align: center;
                                display: flex;
                                flex-direction: column;
                            }
                            
                            .inner-container-right-image {
                                display: block;
                                max-width: 100%;
                                max-height: 35vh;
                                margin-left: auto;
                                margin-right: auto;
                                box-shadow: 0 8px 8px -12px rgba(0, 0, 0, 0.3);
                            }
                            
                            @media screen and (max-width: 820px) {

                                :host {
                                    padding: 0;
                                }
                            
                                .inner-container-right {
                                    max-width: 630px;
                                    max-height: 200px;
                                }
                            
                                .inner-container-right-image {
                                    max-width: 630px;
                                    max-height: 200px;
                                }
                            
                                .middle-container {
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column-reverse;
                                    padding-left: 5px;
                                }



                                .inner-container-left-text-content {
                                    font-size: 1rem;
                                }
                            }

                            `;
                            this._shadowRoot.appendChild(style);
    };

}

// Registers as the custom element cs-main-container 
customElements.define("cs-main-container", CustomMainContainer);