#### METHODS


* addMainFAIcon</br>
* addLink</br>
* addFAIcon</br>

<hr>



#### HOW TO USE?

**cs-navbar** component consist of three containers, one for _main icon_ (left corner), one for _navigation links_ (middle) 
and one for _other icons_ (right corner). If you are using icon containers, please make sure you have **Font Awesome** library loaded. 

1. Download the web component's .js file and add it to the HTML document. 

```
<script src="../../web-components/cs-navbar/cs-navbar.js"></script>
```

2. Add **cs-navbar** tag with custom class name or id.

```
<body>
   <cs-navbar id="mainNavbar"></cs-navbar>
</body>
```

3. Add icons and links from your custom .js file

```
let csNavbar = document.getElementById("mainNavbar");
csNavbar.addMainFAIcon("fas fa-square-root-alt");
csNavbar.addLink("Home", "https://localhost/home.html");
csNavbar.addLink("About us", "#");
csNavbar.addFAIcon("fas fab fa-linkedin");
```
                  

