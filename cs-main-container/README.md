#### WEB COMPONENTS

Custom responsive container for home pages. 

<hr>




#### METHODS AND PROPERTIES


* addTitle (_title_) - Adds title to the title area</br>
* addText (_text_) - Adds text to the text area</br>
* addClickableBox (_iconClassName_, _name_ _linkAddress_) - Adds clickable box (button) with icon (full Font Awesome class name), name and attach link to the box</br>
* addImage (_imgSource_) - Adds image to the right container</br>

<hr>



#### INSTRUCTIONS

**cs-main-container** component consist of two containers, one for title, text, boxes and one for image. If you are using icons, please make sure you have **Font Awesome** library loaded. 

1. Download the web component's .js file and add it to the HTML document. 

   Example

   ```
   <script src="../../web-components/cs-main-container/cs-main-container.js"></script>
   ```

2. Add **cs-main-container** tag with custom class name or id, or create a new **cs-main-container** element.

   Example

   ```
     let csMainContainer = document.createElement("cs-main-container");
     csMainContainer.addTitle("Title");
     csMainContainer.addText("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.");
     csMainContainer.addText("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
     csMainContainer.addClickableBox("fab fa-github", "Github", "https://github.com/.....");
     csMainContainer.addImage("http://localhost:8080/static/data/stree.png");
     document.getElementsByTagName("body")[0].appendChild(csMainContainer);
   ```
   

   Full size<br>
   ![Image of cs-main-container](https://github.com/ferakp/web-components/blob/master/documentation/images/cs-main-container.png)
   
   Mobile version<br>
   ![Image of cs-main-container (mobile)](https://github.com/ferakp/web-components/blob/master/documentation/images/cs-main-container-mobile.png)   
   
