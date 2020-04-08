#### WEB COMPONENTS

Sticky responsive navbar web component. 

<hr>




#### METHODS AND PROPERTIES


* addMainFAIcon (_fullFAIconName_) - Adds Font Awesome icon</br>
* addLink (_linkName_, _linkAddress_) - Adds navigation link </br>
* addFAIcon (_fullFAIconName_, _linkAddress_) - Adds Font Awesome icon and attaches link to the icon</br>

<hr>



#### INSTRUCTIONS

**cs-navbar** component consist of three containers, one for _main icon_ (left corner), one for _navigation links_ (middle) 
and one for _other icons_ (right corner). If you are using icon containers, please make sure you have **Font Awesome** library loaded. 

1. Download the web component's .js file and add it to the HTML document. 

   Example

   ```
   <script src="../../web-components/cs-navbar/cs-navbar.js"></script>
   ```

2. Add **cs-navbar** tag with custom class name or id.

   Example

   ```
      <cs-navbar id="mainNavbar"></cs-navbar>
   ```

3. Add icons and links from your custom .js file

   Example

   ```
   let csNavbar = document.getElementById("mainNavbar");
   csNavbar.addMainFAIcon("fas fa-square-root-alt");
   csNavbar.addLink("Home", "https://localhost/home.html");
   csNavbar.addLink("News", "https://localhost/news.html");
   csNavbar.addLink("Web components", "https://localhost/web-components.html");
   csNavbar.addLink("Intelligent agents", "#IntelligentAgents");
   csNavbar.addLink("Blogs", "https://localhost/blogs.html");
   csNavbar.addLink("About us", "https://localhost/about-us.html");
   csNavbar.addFAIcon("fas fab fa-linkedin", "https://www.linkedin.com/in/.....");
   csNavbar.addFAIcon("fab fa-github", "https://github.com/....");
   ```
   
Output

   Full size

   ![Image of cs-navbar](https://github.com/ferakp/web-components/blob/master/documentation/images/cs-navbar.png)

   
