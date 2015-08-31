Galerie
=======

Galerie is a lightweight item rotator enabled for quick usage for those who are developing on a deadline. Here's an [example](http://mapsam.com/galerie/example/index.html)

##Setup

Include the `galerie.min.js` file in your page.

```HTML
<script src="galerie.min.js" type="text/javascript"></script>
```

Structure your HTML as such:

```HTML
<div class="galerie">
  <div class="galerie-item galerie-current">
    <!-- anything you want in here -->
  </div>
  <div class="galerie-item">
    <!-- anything you want in here -->
  </div>
  ...
</div>
```

Initialize the gallery in your site's javascript file:

```JS
window.onload = function() {
    galerie.init();
};
```

There is no CSS included, so things aren't going to look great. I recommend starting with the following:

```CSS
.galerie {}
.galerie .galerie-item {
    width: 100%;
    height:auto;
    display: none;
}
.galerie .galerie-item.galerie-current {
    display: block;
}
```

##API

**Initialize slider**   
`galerie.init()` will set the gallery

**Next**   
`galerie.nextItem()` will advance the gallery to the next image

**Previous**   
`galerie.previousItem()` will navigate the gallery to the previous image

**Galerie State**   
`galerie.state()` returns the current item DOM element, current item ID, and the total number of items.

**Rotate**   
`galerie.rotate(interval)` will start an automatic rotator based on specified time `interval` in milliseconds. You can stop the rotation using `galerie.stopRotation()`. Default is set to `5000`ms.

##DIY

The point of this slider is to really give people access to the `galerie.js` library to expand upon themselves, rather than having to dig through a huge file. The size of `galerie.min.js` is just **4KB** - allowing you to add whatever you desire to the library. 

The future of Galerie is modularized, meaning the core library should be quite small. When one requires functionality, they will be able to add plugins to the library, which will add more avaialable functions to the API. *This is all in theory currently*

##TODO

All of the above and more

##History

**0.0.1**   
* Initial launch with `init`, `next`, and `prev` as part of the API.
* No CSS currently, which is ideal for the future. Thinking about adding it inline via `galerie.js` instead of having a separate CSS sheet.