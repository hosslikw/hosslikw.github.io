# Webpage Template - README

This is a static website that displays artwork and links to usable tools for makers. The repository can be used as a template for those who similarly want to display their content online.

## Installation

I use certain applications to create this site that are not dependencies but may also be useful to you. The following are some of the applications I use.

- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub Desktop](https://desktop.github.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Pug](https://pugjs.org/)
- [Sass](https://sass-lang.com/)
- [Gulp](https://gulpjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [#region folding](https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder)


## Usage

Examples of how to use your project.

## Contributing

Contribution guidelines.

## License

License information.

## Contact

Your contact information.



<p> Hi, I am a sculptor and adjunct professor, that uses this repository as a personal website (www.kylehossli.com).It also serves as a place for me to test out different techniques related to web development. Clone the site to start building with it as a template. At that point it you can toss what you don't need, add your own conten, and change the style of the site as you please.
</p>
<p>I hold the copyright for the artworks and the images of those artworks, but aside from using them as representations of your own artwork you can do whatever you want with them. To remove the images, first, clone the repository, then identify the name of the html page you would like to change and find the folder inside "media_assets" with the same name. Delete the image files for a neautral page. To remove all the photos from the website at once delete the media_assets folder. Since each html page uses the name of the folder, its sub folder and the image to create a link between where the image is stored and what is showing online you will want to make a new media_assets folder and each subdirectory in it. The links in the html files look like
<code>
	<img src="media_assets/U/web1u.jpg>
</code>
<p>
make a new folder with the same name, "media_assets." This will preserve the link in each html page to the content you will eventually include on the site.
</p>

<p>
As the plant springs from, and could not be without, the seed, so
every act of a man springs from the hidden seeds of thought, and
could not have appeared without them. This applies equally to those
acts called "spontaneous" and "unpremeditated" as to those, which
are deliberately executed.
</p>

<p>
Act is the blossom of thought, and joy and suffering are its fruits;
thus does a man garner in the sweet and bitter fruitage of his own
husbandry.
</p>

<p class="poem">
  "Thought in the mind hath made us, What we are<br>
  By thought was wrought and built. If a man's mind<br>
  Hath evil thoughts, pain comes on him as comes<br>
  The wheel the ox behind....<br>
</p>



</body>
</html>
<html lang="en"><head><script type="text/javascript">
    (function() {
      var container = document.querySelector('#_tcx-rqz8noac9i');
      if (!container) {
        return;
      }

      function addToContainer(url, text) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-tcx-url', url);
        wrapper.innerText = text;
        container.appendChild(wrapper);
      }

      const fetch = window.fetch
      window.fetch = function() {
        return Promise.resolve(fetch.apply(window, arguments))
            .then(async response => {
              if (response.ok) {
                try {
                  const clone = response.clone();
                  const json = await clone.json();
                  addToContainer(clone.url, JSON.stringify(json));
                } catch (err) {}
              }
              return response;
            });
      };

      var XHR = XMLHttpRequest.prototype;
      var send = XHR.send;
      var open = XHR.open;
      XHR.open = function(method, url) {
        this.url = url;
        return open.apply(this, arguments);
      };
      XHR.send = function() {
        this.addEventListener('load', function() {
          try {
            const response = this.response;
            if (response && response.length) {
              const firstChar = response[0];
              if (firstChar === '[' || firstChar === '{') {
                addToContainer(this.url, response);
              }
            }
          } catch (err) {
            // No-op.
          }
        });
        return send.apply(this, arguments);
      };
    })();
  </script>

<meta charset="utf-8">


<link rel="schema.dc" href="http://purl.org/dc/elements/1.1/">
<link rel="schema.dcterms" href="http://purl.org/dc/terms/">
<meta name="dc.title" content="Kyle Hossli">
<meta name="dc.language" content="en">
<!-- <meta name="dcterms.source" content="" uncomment line and add url to reference if one exists> -->
<meta name="dcterms.modified" content="2023-11-02T15:01:01.113088+00:00">
<meta name="dc.rights" content="Public domain in the USA.">
<link rel="dcterms.isFormatOf" href="http://www.gutenberg.org/ebooks/4507">
<meta name="dc.creator" content="Allen, James, 1864-1912">
<meta name="dc.subject" content="New Thought">
<meta name="dcterms.created" content="2003-10-01">
<meta name="generator" content="Ebookmaker 0.12.36 by Project Gutenberg">
<meta property="og:title" content="As a Man Thinketh">
<meta property="og:type" content="Text">
<meta property="og:url" content="https://www.gutenberg.org/ebooks/4507/pg4507-images.html">
<meta property="og:image" content="https://www.gutenberg.org/ebooks/4507/pg4507.cover.medium.jpg">
</head>
