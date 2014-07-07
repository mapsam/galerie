GALERIE
=======

Galerie is a lightweight image slider enabled for quick usage for those who are developing on a deadline. It is currently jQuery dependent, but the plan is to remove the dependency.

##Setup

Include the `galerie.min.js` file after the jQuery source.

```HTML
<script src="//code.jquery.com/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="galerie.min.js" type="text/javascript"></script>
```

Structure your HTML as such:

```HTML
<div class="galerie">
  <div class="item on">
    <!-- anything you want in here -->
  </div>
  <div class="item">
    <!-- anything you want in here -->
  </div>
  ...
</div>
```

Initialize the gallery in your site's javascript file:

```JS
$(document).ready(function(){
  galerie.init();
});
```

##API

**Initialize slider**   
`galerie.init()` will set the gallery

**Next**   
`galerie.next()` will advance the gallery to the next image

**Previous**   
`galerie.prev()` will navigate the gallery to the previous image

##DIY

The point of this slider is to really give people access to the `galerie.js` library to expand upon themselves, rather than having to dig through a huge file. The size of `galerie.min.js` is just **4KB** - allowing you to add whatever you desire to the library. 

The future of Galerie is modularized, meaning the core library should be quite small. When one requires functionality, they will be able to add plugins to the library, which will add more avaialable functions to the API. *This is all in theory currently*

##TODO

All of the above and more

##History

**0.0.1**   
* Initial launch with `init`, `next`, and `prev` as part of the API.
* No CSS currently, which is ideal for the future. Thinking about adding it inline via `galerie.js` instead of having a separate CSS sheet.