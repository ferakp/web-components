METHODS

/*
 * Adds main icon | example -> addMainFAIcon("fas fa-square-root-alt")
 * @param{string} iconClassName the Font Awesome icon's name 
 * return void
 */
addMainFAIcon(iconClassName)

 /*
  * Adds nav (menu) item | example -> addLink("Home", "https://localhost/home")
  * @param{string} linkName the name of the given link
  * @param{string} linkAddress the href of the given address
  * return void 
  */
 addLink(linkName, linkAddress)
 
 
  /*
   * Adds nav (menu) item | example -> addFAIcon("fas fab fa-linkedin")
   * @param{string} linkName the name of the given link
   * @param{string} linkAddress the href of the given address
   * return void
   */
 addFAIcon = (iconClassName, address)


-----------------------------------------------------------------------------------------------------------------


HOW TO USE THE WEB COMPONENT?

<cs-navbar> component consist of three containers, one for main icon (left corner), one for navigation links (middle) 
and one for other icons (right corner). If you are using icon containers, please make sure you have font awesome library
loaded. 

1. Download the web component's .js file and add it to the HTML document. 

Example ------ > <script src="../../web-components/cs-navbar/cs-navbar.js"></script>

2. Add <cs-navbar> tag to your document and give it a class name or id.

Example -------> <body>
                        <cs-navbar id="mainNavbar"></cs-navbar>
                </body>

3. Add icons and links from your custom .js file

example --------> let csNavbar = document.getElementById("mainNavbar");
                  csNavbar.addMainFAIcon("fas fa-square-root-alt");
                  csNavbar.addLink("Home", "https://localhost/home.html");
                  csNavbar.addLink("About us", "#");
                  csNavbar.addFAIcon("fas fab fa-linkedin");
