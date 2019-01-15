# ↕️ fixedScrollNav

ES6 fixed scroll navigation that allows users to navigate between sections with simple and intuitive arrow buttons.
Oh and it will work in all browsers 😉💻
(Chrome, Safari, Edge, Firefox and IE11*)

➡️ [Demo](https://diverent2.github.io/fixedScrollNav/) ⬅️

![Demovideo](https://imgur.com/32LQQr4.gif)

## ✨ Feature List

* Vanilla ES6 🍦
* simple and intuitive usage
* flexible (can be used everywhere)
* supports nested containers
* smooth scrolling automatically gets polyfilled **only if needed**
* lightweight: ~3kb (minified version + 4kb polyfill if needed)
* can be controlled via keyboard (A11y ready)

## 🏗️ Setup

Manager | Command
--- | ---
yarn (recommended) | `yarn add fixedScrollNav`
npm | `npm install fixedScrollNav`

### Module Development (Contribution)

clone this repository `git clone https://github.com/diverent2/fixedScrollNav.git`

`cd ./fixedScrollNav`

#### install modules

Manager | Command
--- | ---
yarn | `yarn`
npm | `npm install`

#### start

change source files, adjust the demo and module behavior. 

Manager | Command
--- | ---
yarn | `yarn start`
npm | `npm start`

#### build

Manager | demo (./docs) | module (./lib)
--- | --- | ---
yarn | `yarn build-demo` | `yarn build-module`
npm | `npm run build-demo` | `npm run build-module`

for further reference see [⛳SimplePlate](https://github.com/diverent2/SimplePlate)

## 👩‍💻 usage

### HTML / Markup

use `data-fixedScrollNav-section` (this marks the beginning of a section) to indicate which sections to scroll to.

```html
<section data-fixedScrollNav-section>
 [...]
</section>
<section data-fixedScrollNav-section>
 [...]
</section>
```

AND 

add the basic navigation markup to html body (best at top/end)  

```html
<div class="fixedScrollNav__container">
 <div class="fixedScrollNav__button fixedScrollNav__button--previous" title="go to previous section"></div>
 <div class="fixedScrollNav__button fixedScrollNav__button--next" title="go to next section"></div>
</div>
```

Use `title` to adjust the text that is displayed on hover

### JS (ES6 Module)

#### Import*

`import fixedScrollNav from '~fixedScrollNav';`  

##### or minified

`import fixedScrollNav from '~fixedScrollNav.min';`

#### Initialize

`new fixedScrollNav();`

(This will first test if the markup for the navigation even exist. If not, it won´t initialize.) 

<small>*Note: for IE11 support you will also need to use [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill). </small>

#### Available Functions/Vars

give your fixedScrollNav a name like 

`const awesomeNav = new fixedScrollNav();`

to use these features.

name | function
--- | ---
`currentSection_index` | returns an index number (starting with 0) of the currently active section
--- | ---
`scrollToPreviousSection()` | if available scrolls to previous (above) section
`scrollToNextSection()` | if available scrolls to next  (below) section

functions starting with an underscore (_) are meant to be private.(not be called)

You can find a listing of all functions inside **DiverentTools**:

in your console `window.DiverentTools.fixedScrollNav`

### Styles

#### Import

`@import '~/fixedScrollNav/lib/css/fixedScrollNav';`  
or  
`@import '~fixedScrollNav/lib/css/fixedScrollNav.min';`

#### Classes

used classes (default)
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
