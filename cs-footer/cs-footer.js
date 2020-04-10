


class CustomFooter extends HTMLElement {

    constructor() {
        super();


        this._shadowRoot = this.attachShadow({ mode: "open" });

        let footer = document.createElement("footer");
        footer.className = "footer";

        let footerLinkArea = document.createElement("div");
        footerLinkArea.className = "footer-link-area";

        let footerTextArea = document.createElement("div");
        footerTextArea.className = "footer-text-area";

        footer.appendChild(footerLinkArea);
        footer.appendChild(footerTextArea);
        this._shadowRoot.appendChild(footer);

        this._style = document.createElement("style");
        this.initializeStyle(this._style);

    }



    /*
    * Adds link
    * param{string} linkName - the name of the link
    * @param{string} linkAddress - the address of the link
    */
    addLink = (linkName, linkAddress) => {
        let link = document.createElement("a");
        link.className = "footer-link-area-link";
        if (linkAddress) link.href = linkAddress;
        if (linkName) {
            link.innerHTML = linkName;
            this._shadowRoot.querySelector(".footer-link-area").appendChild(link);
        }
    };


    /*
    * Adds text
    * param{string} text - the text 
    */
    addText = (text) => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = text;
        paragraph.className = "footer-text-area-text";
        this._shadowRoot.querySelector(".footer-text-area").appendChild(paragraph);
    };


    // Initializes the style
    initializeStyle = (style) => {
        style.innerText = `

                            * {
                                box-sizing: border-box;
                                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
                                font-size: 14px;
                            }

                            :host {
                                display: flex;
                                flex-direction: row;
                                width: 100%;
                                height: 100px;
                                background-color: rgb(30, 139, 195);
                            }

                            .footer {
                                display: grid;
                                grid-template-rows: auto;
                                padding-top: 2rem;
                                padding-right: 3rem;
                                padding-left: 3rem;
                                padding-bottom: 1rem;
                                width: 100%;
                            }

                            .footer-text-area {
                                
                            }

                            .footer-link-area {
                                display: 
                            }

                            .footer-link-area-link {
                                color: white;
                                text-decoration: none;
                                margin-right: 2rem;
                            }

                            .footer-text-area-text {
                                color: white;
                                text-decoration: none;
                            }


        
        
        `;
        this._shadowRoot.appendChild(style);
    };

}

customElements.define("cs-footer", CustomFooter);