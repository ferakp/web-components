


/**
 * Class for sidebar
 */

class CustomSidebar extends HTMLElement {


    /*
    * defaultLinkEvent enables/disables default event 
    */
    properties = {
        defaultLinkEvent: false
    };

    constructor() {
        super();

        // Add shadowRoot
        this._shadowRoot = this.attachShadow({ mode: "open" });
        // Add style
        this._style = document.createElement("style");
        // Add an array for callbacks that need to be called when any link is pressed
        this._linkEventHandlers = [];

        let mainDiv = document.createElement("div");
        mainDiv.className = "custom-sidebar__container";
        let list = document.createElement("ul");
        list.className = "custom-sidebar__container__list";
        let listItem = document.createElement("li");
        listItem.className = "custom-sidebar__container__list__item";
        let link = document.createElement("a");
        link.className = "custom-sidebar__container__list__item__title";
        link.innerHTML = "Experience";
        let hr = document.createElement("hr");
        hr.className = "custom-sidebar__container__list__item__hr";

        listItem.appendChild(link);
        listItem.appendChild(hr);
        list.appendChild(listItem);
        mainDiv.appendChild(list);
        this._shadowRoot.appendChild(mainDiv);

        this._shadowRoot.appendChild(this.initializeStyle(this._style));
    }



    connectedCallback() {
        // Sets an ID for the element
        if (this._id === undefined || this._id === null) {
            if (this.getAttribute("id")) this._id = this.getAttribute("id");
            else {
                let id = "juiaxasdiueia" + (Math.random() * Math.random() * Math.random() * Math.random()).toString(24).substring(3);
                this.setAttribute("id", id);
                this._id = id;
            }
        }

        try {
            for (let listItem of this._shadowRoot.querySelector(".custom-sidebar__container__list").children) {
                listItem.children[0].setAttribute("onclick", "document.getElementById('"+ this._id +"').linkClicked(this);");
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    disableLinkDefaultEvent = () => {
        this.properties.defaultLinkEvent = false;
    };


    addSidebarItem = (obj) => {

        if (!this.validateSidebarObject(obj)) return;

        // For links
        for (let link of obj.links) {
            let linkElement = document.createElement("a");
            linkElement.innerHTML = link.name;
            linkElement.href = link.href;

            // Prevents the page being changed
            if (!this.properties.defaultLinkEvent) linkElement.addEventListener("click", function (event) {
                event.preventDefault();
            });

            let listItem = document.createElement("li");
            listItem.className = "custom-sidebar__container__list__item";
            // Adds a element into li element
            listItem.appendChild(linkElement);
            this._shadowRoot.querySelectorAll(".custom-sidebar__container__list")[0].appendChild(listItem);
        }

    };


    /*
   * Registers event handler for links
   * param{function} callback - the callback which will be called when link is clicked
   */
    registerEventHandlerForLinks = (callback) => {
        this._linkEventHandlers.push(callback);
    };



    /*
    * Each time when nav link is clicked this function is called
    * @param{HTMLElement} element - the element clicked
    */
    linkClicked = (element) => {
        console.log("link clicked, link name : "+element.href);
        for (let callback of this._linkEventHandlers) {
            try {
                callback(element);
            } catch (err) {
                console.log("Error occured while calling callbacks: " + err);
            }

        }
    };



    initializeStyle = (style) => {

        style.innerText = `

        * {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        }
        
        :host {
            display: block;
            width: 220px;
            height: 85vh;
            left: 0;
            z-index: 1;
            overflow-x: hidden;

            background-color: rgb(251, 248, 248);
        }

        .custom-sidebar__container {
            width: 100%;
            height: 100%;
            padding-top: 10px;
        }

        .custom-sidebar__container__list {
            padding: 0;
        }

        .custom-sidebar__container__list__item {
            list-style: none;
            text-align: center;

        }

        .custom-sidebar__container__list__item:not(:first-child):hover {
            background-color: rgb(222, 221, 221);

        }
        
        .custom-sidebar__container__list__item a {
            text-decoration: none;
            display: inline-flex;
            line-height: 3;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .custom-sidebar__container__list__item__title {
            color: black !important;
        }

        .custom-sidebar__container__list__item__hr {
            width: 60%;
        }
        
        `;

        return style;
    };




    /************************************************
     *                   UTILITY FUNCTIONS (START)
     *************************************************/


    /*
    * Assures that sidebar object has necessary values for creating sidebar
    * Could be called in strict mode if creating sidebar without links is not allowed
    */
    validateSidebarObject = (obj) => {
        try {
            if (obj) {
                if (obj.links) {
                    if (obj.links.length > 0) {
                        for (let i = 0; i < obj.links.length; i++) {
                            let link = obj.links[i];
                            if (!(link.name.length > 0) || !(link.href.length > 0)) return false;
                        }
                    } else return false;
                } else return false;
            } else return false;

            return true;
        } catch (err) {
            console.log(err);
        }
    };




    /************************************************
     *                   UTILITY FUNCTIONS (END)
     *************************************************/



}

customElements.define("cs-sidebar", CustomSidebar);