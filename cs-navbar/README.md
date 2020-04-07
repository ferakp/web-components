### METHODS


addMainFAIcon(iconClassName)</br>
addLink(linkName, linkAddress)</br>
addFAIcon = (iconClassName, address)</br>
<hr>



### HOW TO USE THE WEB COMPONENT?

<cs-navbar> component consist of three containers, one for main icon (left corner), one for navigation links (middle) 
and one for other icons (right corner). If you are using icon containers, please make sure you have Font Awesome library
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
                  
