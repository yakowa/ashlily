![JacobEM](https://jacobem.com/assets/media/JacobEM.png)

# Ashlily

Ashlily is a CSS library with contains a load of different commonly used premade-elements (accordion, modals, tree-views, buttons, etc) as well as lots of helpful utility classes (display flex, image grid, positioning, overflows, etc).

Ashlily was originally developed for JacobEM.com and then was further developed into a CSS library!

## Documentation

### How to install

#### Download

Go to the [GitHub Page](https://github.com/yakowa/Ashlily) and click the green `Code` button, then navigate to the `Download ZIP` button. This will download the application in a compressed folder. Simply right-click this folder and select `Extract All`.

#### ...or Clone The Repository

If you have [Git](https://git-scm.com/) you may use Git Bash to clone the repository.

Simply run:
```bash
git clone https://github.com/yakowa/Ashlily
```

#### Dependecies

**Important Note:** Ashlily requires [JQuery](https://jquery.com/) to handle certain elements. This is due to Ashlily.js requiring JQuery.

### How to install

Simply add the stylesheet link and the script tag to your HTML head element.

**Note:** JQuery must be loaded before the Ashlily.js file.

**Copy this into your document head, once Ashlily & JQuery are downloaded:**
```html
<!-- JQuery -->
<script src="jquery.min.js" defer></script>
<!-- Ashlily CSS Library - Made by JacobEM.com -->
<link rel="stylesheet" href="ashlily.css">
<script src="ashlily.js" defer></script>
```

### Usage

All classes in Ashlily use the `al-` prefix.

For example, the Ashlily container class looks like `al-container`.

**Important Note:** Ashlily requires [JQuery](https://jquery.com/) to handle certain elements. This is due to Ashlily.js requiring JQuery.

### Themes

To install themes, add a theme class to the body.
Note: theme-snow is used by default if no theme class is applied to the body.

#### Pre-installed Themes
- theme-snow
- theme-dark

#### CSS Variables

Ashlily uses [Document Colour System (DCS)](https://jacobem.com/software?q=document-colour-system) v2.0 by JacobEM.

All variables are formatted `--theme-{parameter}`.

| Parameter | Example Usage |
| :-------- | :------------------------- |
| `background-primary` | Document Background |
| `background-secondary` | Headers, Footers, Containers |
| `background-tertiary` | Sidenavs, Dropdowns, Modals |
| `border` | Border / Divider Colours |
| `code` | Background Colour For Code / Pre |
| `code-text` | Text on `code` |
| `text-normal` | Normal Text |
| `text-emphasis` | Important Text, Headers |
| `text-link` | Links / Call-To-Action Text |
| `text-muted` | Not important text |
| `text-positive` | Positive colour |
| `text-negitive` | Negitive colour |
| `primary` | Primary Colour |
| `secondary` | Secondary Colour |
| `primary-text` | Text On `primary` Backgrounds |
| `secondary-text` | Text On `secondary` Backgrounds |

### Breakpoints

| Parameter: breakpoint | Breakpoint |
| :-------- | :------------------------- |
| `xsm` | 400px |
| `sm` | 570px |
| `mdsm` | 570px |
| `md` | 770px |
| `lg` | 990px |
| `xl` | 1200px |
| `xxl` | 1400px |
| `xxxl` | 2000px |
| `voidless` | Always spans the 100% width. **Note:** Voidless is only available on certain elements. |

### Containers

Containers will span the full width of the screen until the screen width exceeds their breakpoint.

Class:
```
al-container
```

At different breakpoints:
```
al-container-{breakpoint}
```

Example Usage:
```html
<div class="al-container">Container</div>
<div class="al-container-xsm">Container XSM</div>
<div class="al-container-sm">Container SM</div>
<div class="al-container-mdsm">Container MDSM</div>
<div class="al-container-md">Container MD</div>
<div class="al-container-lg">Container LG</div>
<div class="al-container-xl">Container XL</div>
<div class="al-container-xxl">Container XXL</div>
<div class="al-container-xxxl">Container XXXL</div>
<div class="al-container-voidless">Container Voidless</div>
```

### Columns

Each row contains `12` columns.

Rows are just normal flex rows.
You can initialize a row by using the class `al-row` or see the [flex](#flex) section.

Class:
```
al-col-{columns}
```

At different breakpoints:
```
al-col-{breakpoint}-{columns}
```

| Parameter: columns | Breakpoint |
| :-------- | :------------------------- |
| `1` | Spans 1 row |
| `2` | Spans 2 rows |
| `3` | Spans 3 rows |
| `4` | Spans 4 rows |
| `5` | Spans 5 rows |
| `6` | Spans 6 rows |
| `7` | Spans 7 rows |
| `8` | Spans 8 rows |
| `9` | Spans 9 rows |
| `10` | Spans 10 rows |
| `11` | Spans 11 rows |
| `12` | Spans 12 rows |

Example Usage:
```html
<div class="al-row">
    <div class="al-col-2">I span 2 columns!</div>
    <div class="al-col-2">I span 6 columns!</div>
    <div class="al-col-2">I span 4 columns!</div>
</div>
```

### Flex

Class:
```
al-flex-{direction}
```

With flex-wrap:
```
al-flex-{direction}-wrap
```

At different breakpoints:
```
al-flex-{breakpoint}-{direction}
```

or both;

```
al-flex-{breakpoint}-{direction}-wrap
```

| Parameter: direction | Description |
| :-------- | :------------------------- |
| `column` | Sets the flex-direction to column |
| `row` | Sets the flex-direction to column |
| `column-reverse` | Sets the flex-direction to column-reverse |
| `row-reverse` | Sets the flex-direction to row-reverse |
| `center` | Centers content |

Align items classes:
```
al-align-items-{align-items-spacing}
```

Justify content classes:
```
al-justify-content-{justify-content-spacing}
```

| Parameter: align-items-spacing | Description |
| :-------- | :------------------------- |
| `center` | Alings items to center |
| `start` | Alings items to flex-start |
| `end` | Alings items to flex-end |
| `stretch` | Alings items to stretch |

| Parameter: justify-content-spacing | Description |
| :-------- | :------------------------- |
| `center` | Sets justify content to center |
| `end` | Sets justify content to flex-end |
| `start` | Sets justify content to flex-start |
| `around` | Sets justify content to space-around |
| `between` | Sets justify content to space-between |
| `evenly` | Sets justify content to space-evenly |

### Padding & Margin

Class:
```
al-{type}-{value}
```

Directional Class:
```
al-{type}{direction}-{value}
```

At different breakpoints:
```
al-{type}{direction}-{breakpoint}-{value}
```

| Parameter: type | Description |
| :-------- | :------------------------- |
| `p` | Padding |
| `m` | Margin |


| Parameter: direction | Description |
| :-------- | :------------------------- |
| `t` | Padding / Margin Top |
| `b` | Padding / Margin Bottom |
| `l` | Padding / Margin Left |
| `r` | Padding / Margin Right |

| Parameter: value | Value |
| :-------- | :------------------------- |
| `0` | 0 |
| `1` | .25rem |
| `2` | .5rem |
| `35` | .75rem |
| `3` | 1rem |
| `4` | 1.5rem |
| `45` | 2rem |
| `50` | 2.5rem |
| `5` | 3rem |
| `auto` | auto |

### Displays

Class:
```
al-d-{value}
```

At different breakpoints:
```
al-d-{breakpoint}-{value}
```

| Parameter:value | Description |
| :-------- | :------------------------- |
| `block` | Sets to display block |
| `inline` | Sets to display inline |
| `none` | Sets to display none |
| `flex` | Sets to display flex |
| `flexbox` | Sets to display flexbox |
| `grid` | Sets to display grid |
| `inline-block` | Sets to display inline-block |
| `inline-flex` | Sets to display inline-flex |
| `inline-flexbox` | Sets to display inline-flexbox |
| `inline-table` | Sets to display inline-table |
| `table` | Sets to display table |
| `list-item` | Sets to display list-item |
| `inherit` | Sets to display inherit |
| `initial` | Sets to display initial |
| `unset` | Sets to display unset |

### Width & Height

Width & Height: min / max / value classes

Class:
```
al-{direction}-{value}
```

For min-width:
```
al-min-{direction}-{value}
```

For max-width:
```
al-max-{direction}-{value}
```

At different breakpoints (This also applies for min / max):
```
al-{direction}-{breakpoint}-{value}
```


| Parameter: direction | Description |
| :-------- | :------------------------- |
| `w` | Affects width |
| `h` | Affects height |


**Parameter: value:** Can be any number from 0-100, which is set as a percent. Can also be auto.

### Border Radius

Class:
```
al-br-{value}
```

At different breakpoints:
```
al-br-{breakpoint}-{value}
```


| Parameter:value | Description |
| :-------- | :------------------------- |
| `025` | Sets the border-radius to 0.25rem |
| `050` | Sets the border-radius to 0.5rem |
| `075` | Sets the border-radius to 0.75rem |
| `1` | Sets the border-radius to 1rem |
| `15` | Sets the border-radius to 1.5rem |
| `2` | Sets the border-radius to 2rem |
| `25` | Sets the border-radius to 2.5rem |
| `3` | Sets the border-radius to 3rem |
| `50` | Sets the border-radius to 50% |

### Box Shadows

#### Box-shadow One

Class:
```
al-bxs-1
```

At different breakpoints:
```
al-bxs-{breakpoint}-1
```

Effect: 0 8px 15px rgba(0, 0, 0, 0.2)

#### Box-shadow Two

Class:
```
al-bxs-2
```

At different breakpoints:
```
al-bxs-{breakpoint}-2
```

Effect: 0 8px 50px rgba(0, 0, 0, 0.2)

### Opacity

Class:
```
al-opacity-{value}
```

At different breakpoints:
```
al-opacity-{breakpoint}-{value}
```

| Parameter:value | Description |
| :-------- | :------------------------- |
| `100` | Sets the opacity to 1 |
| `1` | Sets the opacity to 1 |
| `75` | Sets the opacity to 0.75 |
| `50` | Sets the opacity to 0.50 |
| `25` | Sets the opacity to 0.25 |
| `0` | Sets the opacity to 0 |

### Content Overflow

Class:
```
al-overflow-{value}
```

In different axis:
```
al-overflow-{direction}-{value}
```

At different breakpoints:
```
al-overflow-{breakpoint}-{value}
```

or

```
al-overflow-{direction}-{breakpoint}-{value}
```

| Parameter: value | Description |
| :-------- | :------------------------- |
| `hidden` | Sets overflow to hidden |
| `auto` | Sets overflow to auto |
| `visible` | Sets overflow to visible |
| `scroll` | Sets overflow to scroll |

| Parameter: direction | Description |
| :-------- | :------------------------- |
| `x` | Sets overflow in the x-axes |
| `y` | Sets overflow in the y-axes |

### Text Align

Class:
```
al-text-{value}
```

At different breakpoints:
```
al-text-{breakpoint}-{value}
```

| Parameter: direction | Description |
| :-------- | :------------------------- |
| `center` | Sets text align to center |
| `right` | Sets text align to right |
| `left` | Sets text align to left |

### Positioning

Class:
```
al-p-{value}
```

At different breakpoints:
```
al-p-{breakpoint}-{value}
```

| Parameter: value | Description |
| :-------- | :------------------------- |
| `relative` | Sets position to relative |
| `absolute` | Sets position to absolute |
| `fixed` | Sets position to fixed |

### Clearfix

Clearfix helps fix issues where floating content overflows from its container.
Simply add either of these classes to the container to fix this problem!

Clearfix one sets overflow to auto
```
al-clearfix
```

Clearfix two sets the containers' ::before to display: table, clear: both and content: ""
```
al-clearfix-2
```

### Glass Effects

For a nice blurry glass-like background.

Class:
```
al-glass
```

### Headings

As well as H1-H6 being styled, the classes; `.H1`-`.H6` are styled identically respectively but do not affect SEO.

### Links

Normal links are styled with a dotted underline and the current theme's link colour.

To remove text-decoration add the `al-clean` class.

Also, try out:

To have an underline only on hover:
```
al-hover-underline
```

and

To remove all text-decoration styling
```
al-no-underline
```

### Link Focusing

For a stylish focus outline on interactive elements simply add:
```
al-link-focus
```

For styling other elements on elements focus:

Add to the element that gets focused:
```
al-link-focus-other-target
```

Add to the element you want to be styled on the other elements' focus:
```
al-link-focus-target
```

### Validity

For valid text add the `al-valid` class.
For invalid text add the `al-invalid` class.

### Text styling

- Paragraphs have a margin-bottom of 0.3rem.
- em, i, cite and time elements are italic.
- small, .small and .al-small have a font-size of 0.85rem.
- strong, b, ad figcaption's font-weight is bolder.
- muted, .muted, and .al-muted use the `theme-text-muted` CSS variable defined by the theme.
- blockquotes have padding and are italic.
- q, .q and .al-q are italic and have quotes around its content
- del, s have a strike-through.
- u, ins are underlined
- mark, .mark and .al-mark are styled using al-mark.
- sup, sub has a smaller font size.
- address, abbr, code, samp, pre, kbd, hr and lists are also styled.

### Fonts

Try changing the font around based on the current theme.

Class:
```
al-font-{value}
```

| Parameter: value | Description |
| :-------- | :------------------------- |
| `1` | Sets the font to al-font-1 |
| `2` | Sets the font to al-font-2 |
| `3` | Sets the font to al-font-3 |
| `4` | Sets the font to al-font-4 |
| `mono` | Sets the font to al-font-mono |

**Note:** Fonts are defined by the current theme.

### Text Blocks Max Characters

Class:
```
al-access-text-{value}
```

| Parameter: value | Description |
| :-------- | :------------------------- |
| `50` | Sets the max-width to 50 characters wide |
| `55` | Sets the max-width to 55 characters wide |
| `60` | Sets the max-width to 60 characters wide |
| `65` | Sets the max-width to 65 characters wide |
| `70` | Sets the max-width to 70 characters wide |

### Images

By default figure's, img's and svg's have dragging disabled.

`.al-img-voidless` class is super helpful for scaling images properly. An `.al-img-voidless` image takes up 100% of the avaible space.

### Images Captions

For a nice caption on images try the `al-img-text` class on a figcaption.

**Note:** Make sure the parent element has its position set to relative.

Example Usage:
```html
<figure class="al-p-relative">
    <img src="assets/media/software/RPS/RPS.png">
    <figcaption class="al-img-text">Lorem, ipsum 1 dolor.</figcaption>
</figure>
```

### Cards

Make the wrapping element have the class `al-card`.

Optionally, you may add the class `al-card-title` to a heading to remove the bottom margin.

Example Usage:
```html
<div class="al-card">
    <div class="al-card-title">This is my card title</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis?</p>
</div>
```

### Image Grid

The al image grid allows for a clear nice grid, for example for photography exhibits.

By default, all grid children have a height and width of 240px and the auto-fit repeat function. This can be overridden of course.

You can also have vertical images, by using the al-ig-tall class on a child.

We recommend you try the image grid out for yourself to get used to it!

Class:
```
al-ig-container
```

Example Usage:
```html
<div class="al-ig-container">
    <img src="image 41.jpg" loading="lazy" class="al-ig-tall">
    <img src="image 40.jpg" loading="lazy" class="">
    <img src="image 39.jpg" loading="lazy" class="al-ig-tall">
    <img src="image 38.jpg" loading="lazy" class="">
    <img src="image 37.jpg" loading="lazy" class="">
</div>
```

### Slider

The slider allows for a clean carousel for displaying images with captions!

Class:
```
.al-slider
```

Example Usage:
```html
<div class="al-p-relative">
    <div class="al-slider">
        <figure class="al-active">
            <img src="assets/media/software/jragonjem/jragonjem-1.png" alt="">
            <figcaption class="al-img-text">Main Hub</figcaption>
        </figure>
        <figure>
            <img src="assets/media/software/jragonjem/jragonjem-2.png" alt="">
            <figcaption class="al-img-text">Murder Mystery Map</figcaption>
        </figure>
        <figure>
            <img src="assets/media/software/jragonjem/jragonjem-3.png" alt="">
            <figcaption class="al-img-text">BattleGrounds Map</figcaption>
        </figure>
        <figure>
            <img src="assets/media/software/jragonjem/jragonjem-4.png" alt="">
            <figcaption class="al-img-text">Skywars Map</figcaption>
        </figure>
        <figure>
            <img src="assets/media/software/jragonjem/jragonjem-5.png" alt="">
            <figcaption class="al-img-text">Temple built by BG</figcaption>
        </figure>
    </div>
    <div class="al-prev"></div>
    <div class="al-next"></div>
</div>
```

### Sections, Header, Footer, etc

header's, footer's, `.al-header`'s, `.al-footer`'s are all styled with accordance to [DCS](#css-variables).

content's, `.al-section`'s, `.al-main`'s, `.al-content`'s are all styled with accordance to [DCS](#css-variables).

However, using the `.al-clean` class on one of these elements, will not style them using DCS's standards.

### Alerts

Alerts are helpful elements and we have lots for your to choose from.

Class:
```
.al-alert
```

You can also use `.al-alert-primary`, `.al-alert-secondary` to change the background colour to primary and secondary respectively.

`.al-alert-negitive` and `.al-alert-positive` are also avaible for negitive and positive background colours.

### Buttons

Buttons are a very important part of any website and we have them covered!

button's and `.al-btn`'s create a base ashlily button.

However, there are lots of classes to change a button's appearance, such as;

Use `.al-btn-{ANY-ASHLILY-COLOUR}` for colour changes.

For smaller and even bigger buttons, try `.al-sm` and `.al-lg`!

Adding `.al-outline` to your `.al-btn` or button will change the button mode to outline!
Adding `.al-invis` to your `.al-btn` or button will set the button mode to a non-in-your-face design!

You can also try `.al-btn-outline-{ANY-ASHLILY-COLOUR} as a combo of outlines and colours!

`.al-inline` to change the btn to display: inline-block.

### Colour Bar

The `.al-colourBar` class is a nice colourful divider which by default uses the `--al-current` css variable, which can be set to change the colour of your colour bar.

### Dropdowns

Class:
```
.al-dropdown-menu
```

Example Usage:
```html
<div class="al-dropdown">
    <div class="al-dropdown-toggle">Toggle Me</div>
    <div class="al-dropdown-menu">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
        <div class="al-dropdown-divider"></div>
        <div class="al-btn">CLick me</div>
    </div>
</div>
```

**Note:** Remember, JQuery is needed for Ashlily to handle dropdowns!

### Inputs

By default inputs are styled. For events such as; valid, invalid, hover, focus, and more!

See below for other different types of special inputs!

### Floating inputs

Inputs with a label, that floats up when the input field is selected.

**Note:** having a placeholder is needed, as the floating placeholder is based on the input's placeholder. You, however, can leave it blank.

```html
<div class="al-floating">
    <input class="al-clean" type="email" name="email" placeholder="">
    <label for="email">Email</label>
</div>
```

### Input Groups

Input groups create a clean and nice-looking label to input form!

You can try them out below by using the following example;
```html
<div class="al-input-group">
    <label for="email" class="al-input-group-label">Email</label>
    <input class="al-clean" type="email" name="email" placeholder="">
</div>
```

### Animated highlighted inputs

This special type of input has an animated coloured underbar.

Example Usage:
```html
<div class="al-highlight">
    <input type="email" name="email" placeholder="">
</div>
```

### List Groups

List groups are a more interesting way than a normal bullet list to display lists of information.

This is how to use Ashlily's list groups:
```html
<div class="al-list-group">
    <div class="al-list-group-item">One</div>
    <div class="al-list-group-item">Two</div>
    <div class="al-list-group-item">Three</div>
</div>
```

### Modals

Modals can be a useful tool and Ashlily now supports them!

Use the `.al-modal-button` class with the `data-al-for` attribute to set which modal to open!

And use the `.al-modal` class with an `.al-modal-content` inside, to define a new modal.

You can create a close button for the modal by using an `.al-close` class inside the `.al-modal-content`.

Example Usage:
```html
<button class="al-modal-button" data-al-for="themeChange" title="Open">Open Modal</button>

<div class="al-modal" data-al-timeout="true" id="themeChange">
    <div class="al-modal-content">
        <span class="al-close" title="Close">&times;</span>
        <div>
            <h4>Successfully changed the theme to <span style="color: #00ff66;" title="Change themes inside settings">dark mode</span>.</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolorem tempore commodi ipsum sed, itaque omnis obcaecati dolor eveniet quia consequatur aspernatur nostrum saepe suscipit.</p>
        </div>
    </div>
</div>
```

### Navbar (underline) Links

Use the `.al-nav-link` for a fancy curved underbar effect on any interactive element!

Example Usage:
```html
<ul class="al-flex-row al-justify-content-evenly">
    <div class="al-nav-link">Lorem, ipsum.</div>
    <div class="al-nav-link">Corrupti, pariatur.</div>
    <div class="al-nav-link">Reprehenderit, dolorum.</div>
</ul>
```

### Notification Badges

To add a handly notification badge you can simply place an `.al-notif-badge` inside any relatively positioned element.

We recommend adding a little padding to the parent element, however!

```html
<p class="al-p-relative al-d-inline-block al-p-2">
    Inbox
    <span class="al-notif-badge" style="padding: 1px 8px;">1</span>
</p>
```

### Panel Menus (Accordions)

Ashlily's panel menus are super helpful for categorising large amounts of information!

Simply click on the tab you want and watch as the panels slide up and down.

Here's an example you can try:
```html
<div class="al-panel-menu">
    <!-- Tabs -->
    <ul class="al-pl-1 al-tabs">
        <li class="al-d-inline-block al-mr-2 active" data-panel-id="panel1">Panel 1</li>
        <li class="al-d-inline-block al-mr-2" data-panel-id="panel2">Panel 2</li>
        <li class="al-d-inline-block al-mr-2" data-panel-id="panel3">Panel 3</li>
    </ul>

    <!-- Panels -->

    <div class="al-panel jem-panel active" id="panel1">
        <p>This is panel one!</p>
    </div>
    <div class="al-panel jem-panel" id="panel2">
        <p>This is panel two!</p>
    </div>
    <div class="al-panel jem-panel" id="panel3">
        <p>This is panel three!</p>
    </div>
</div>
```

### Snackbars

Snackbars are super helpful for displaying pop up information. Such as changing theme, or error messages and much more!

Simply define an `.al-snackbar-button` with the attribute `data-al-for` specifying which snackbar to open.

Then to define a snackbar, create an `.al-snackbar` element with a unique id.

You can also add `.al-left` to the `.al-snackbar` to make the snackbar pop up on the bottom left of the screen rather than the bottom middle!

Example Usage:
```html
<button class="al-snackbar-button" data-al-for="abc">Show Snackbar</button>

<div class="al-snackbar" id="abc">
    <strong>Successfully changed the theme to <span style="color: #00ff66;">dark mode</span>.</strong>
</div>
```

### Tables

Ashlily styles tables to be more readable and modern looking. There are also two styles of tables, Light and Dark.

To switch to a Dark table, simply add `.al-table-dark` to your table.

If your table is going to overflow in the x-direction and you would like a horizontal scrollbar, try wrapping your table in an `.al-overflowX`.

Example Usage:
```html
<table class="al-table-dark">
    <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Eye Colour</th>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>24</td>
            <td>Blue</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>27</td>
            <td>Brown</td>
        </tr>
        <tr>
            <td>Mira</td>
            <td>28</td>
            <td>Green</td>
        </tr>
    </tbody>
</table>
```

### Tooltips

Tooltips are great for extra pieces of information when you hover over an element. They also look much nicer than the build-in title attribute.

Tooltips are super quick and easy to use in Ashlily.

Here's an example:
```html
<div class="al-tooltip">
    <button class="btn btn-primary">This is a Gift.</button>
    <span class="al-tooltip-text">Gift your friends amazing features!</span>
</div>
```

### Tree Views

Tree views are super helpful for toggling different parts of a list and displaying nested information!

You can also add the `.al-clean` class to any of the lists to remove the bullet point styling.

For example, this is an example of different beverages, with a tea option. The tea option has nested information aka different types of tea!
This is how to create an example tree view:
```html
<ul>
    <span class="al-caret">Beverages</span>
    <ul class="al-nested al-clean">
        <li>Coffee</li>
        <li>
            <span class="al-caret">Tea</span>
            <ul class="al-nested">
                <li>Black Tea</li>
                <li>Green Tea</li>
                <li>Berry Tea</li>
            </ul>
        </li>
        <li>Wine</li>
    </ul>
</ul>
```

## Credit

Ashlily is created by [JacobEM](https://jacobem.com).

Inspiration taken from Bootstrap and TailwindCSS.