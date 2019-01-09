# ↕️ fixedScrollNav

ES6 fixed scroll navigation that allows users to navigate between sections with simple and intuitive arrow buttons.
Oh and it will work in all browsers 😉💻
(Chrome, Safari, Edge, Firefox and IE11)

➡️ [Demo](https://maximilianue.github.io/fixedScrollNav/) ⬅️

![Demovideo](https://imgur.com/32LQQr4.gif)

## ✨ Feature List

* Vanilla ES6
* simple and intuitive usage
* flexable (can be used everywhere)
* smooth scrolling automatically gets polyfilled **only if needed**
* lightweight: ~3kb (minified version + 4kb polyfill if needed)
* can be controled via keyboard (A11y ready)

## 🏗️ Setup

Manager | Command
--- | ---
yarn (recommended) | `yarn add fixedScrollNav`
npm | `npm install fixedScrollNav`

### Module Development (Contribution)

clone this repository `git clone https://github.com/MaximilianUE/fixedScrollNav.git`

`cd ./fixedScrollNav`

#### install modules

Manager | Command
--- | ---
yarn | `yarn`
npm | `npm install`

#### start

Manager | Command
--- | ---
yarn | `yarn start`
npm | `npm start`


for further reference see [SimplePlate](https://github.com/MaximilianUE/SimplePlate)

## 👩‍💻 usage

### HTML / Markup

use `data-fixedScrollNav-section` to indicate which sections to scroll to.

```html
<section data-fixedScrollNav-section>
 [...]
</section>
<section data-fixedScrollNav-section>
 [...]
</section>
```

add the fixed navigation to your document (best at top/end)

```html
<div class="fixedScrollNav__container">
 <div class="fixedScrollNav__button fixedScrollNav__button--previous" title="go to previous section"></div>
 <div class="fixedScrollNav__button fixedScrollNav__button--next" title="go to next section"></div>
</div>
```

### JS (ES6 Module)

#### Import

`import fixedScrollNav from '~fixedScrollNav';`  
or  
`import fixedScrollNav from '~fixedScrollNav.min';`

#### Initialize

`fixedScrollNav.init();`  
(This will first test if the markup even exist otherways it won´t do anything)  

### Styles

#### Import

`@import '~/fixedScrollNav/lib/css/fixedScrollNav';`  
or  
`@import '~fixedScrollNav/lib/css/fixedScrollNav.min';`

#### Classes

used classes  
feel free to adjust to your needs

```css
//container with buttons
//declares the fixed position
.fixedScrollNav__container 

 //button classes
 .fixedScrollNav__button

  //arrow up
  .fixedScrollNav__button--previous

  //arrow down
  .fixedScrollNav__button--next
```

made with ♥️ by [Diverent2](https://twitter.com/diverent2)
