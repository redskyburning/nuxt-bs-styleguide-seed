<style src="./style-guide.scss" lang="scss"></style>
<script src="./style-guide.js"></script>

<template>
  <div class="page style-guide">
    <header class="style-guide__header">
      <h1 class="display-1">Style Guide</h1>
    </header>
    <div class="style-guide__body">

      <section class="style-guide__section style-guide__section--alerts">
        <h2 class="style-guide__section__title display-4" v-b-toggle.alert-body>Alerts</h2>
        <b-collapse id="alert-body"
                    class="style-guide__section__body">
          <b-alert show>Default Alert</b-alert>

          <b-alert v-for="(type, typeIndex) in alertTypes"
                   :key="typeIndex"
                   :variant="type"
                   show>{{type | capitalize}} Alert
          </b-alert>

          <h3 class="style-guide__section__subtitle">Dismissable Alerts</h3>

          <b-alert variant="danger"
                   dismissible
                   show
                   @dismissed="showDismissibleAlert=false">
            Dismissible Alert!
          </b-alert>

          <b-alert :show="dismissCountDown"
                   dismissible
                   variant="warning"
                   @dismissed="dismissCountDown=0"
                   @dismiss-count-down="countDownChanged">
            <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
            <b-progress variant="warning"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px">
            </b-progress>
          </b-alert>

          <div class="style-guide__button-row">
            <b-btn @click="showAlert" variant="info">
              Show auto-dismissing alert
            </b-btn>
          </div>

          <h3 class="style-guide__section__subtitle">Alerts with content</h3>

          <b-alert show variant="success">
            <h4 class="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message.
              This example text is going to run a bit longer so that you can see
              how spacing within an alert works with this kind of content.
            </p>
            <hr>
            <p class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </b-alert>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--buttons">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.buttons-body>Buttons</h2>
        <b-collapse id="buttons-body"
                    class="style-guide__section__body">
          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType|capitalize }}
            </button>
          </div>

          <h3 class="style-guide__section__subtitle">Large buttons</h3>
          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn btn-lg"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType|capitalize }}
            </button>
          </div>

          <h3 class="style-guide__section__subtitle">Small buttons</h3>
          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn btn-sm"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType|capitalize }}
            </button>
          </div>

          <h3 class="style-guide__section__subtitle">Outline buttons</h3>

          <div class="style-guide__button-row">
            <div class="style-guide__button-row">
              <button type="button"
                      v-for="(buttonType, buttonIndex) in buttonTypes"
                      :key="buttonIndex"
                      class="btn"
                      v-bind:class="`btn-outline-${buttonType}`">{{ buttonType|capitalize }}
              </button>
            </div>
          </div>

          <h3 class="style-guide__section__subtitle">Disabled buttons</h3>

          <div class="style-guide__button-row">
            <div class="style-guide__button-row">
              <button type="button"
                      v-for="(buttonType, buttonIndex) in buttonTypes"
                      :key="buttonIndex"
                      class="btn"
                      disabled
                      v-bind:class="`btn-${buttonType}`">{{ buttonType|capitalize }}
              </button>
            </div>
          </div>

          <h3 class="style-guide__section__subtitle">Buttons with badges</h3>

          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType|capitalize }}
              <b-badge variant="light">{{buttonIndex + 1}}</b-badge>
            </button>
          </div>

          <h3 class="style-guide__section__subtitle">Button Groups</h3>

          <div class="style-guide__button-row">
            <b-button-group
              v-for="(buttonType, buttonIndex) in buttonTypes"
              :key="buttonIndex">
              <b-button :variant="buttonType">{{ buttonType|capitalize }}</b-button>
              <b-button :variant="buttonType">{{ buttonType|capitalize }}</b-button>
              <b-button :variant="buttonType">{{ buttonType|capitalize }}</b-button>
            </b-button-group>
          </div>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--breadcrumbs">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.breadcrumb-body>Breadcrumbs</h2>
        <b-collapse id="breadcrumb-body" class="style-guide__section__body">
          <b-breadcrumb :items="breadcrumbItems"/>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--cards">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.cards-body>Cards</h2>
        <b-collapse id="cards-body"
                    class="style-guide__section__body">
          <b-card-group deck>
            <b-card title="Image Top"
                    sub-title="Subtitle"
                    img-src="https://picsum.photos/600/300?random&image=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            <b-card title="Image Bottom"
                    sub-title="Subtitle"
                    img-src="https://picsum.photos/600/300?random&image=2"
                    img-alt="Image"
                    img-bottom
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>

            <b-card bg-variant="dark"
                    text-variant="white"
                    title="Dark Variant"
                    sub-title="Subtitle">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>

            <b-card title="Header/Footer"
                    sub-title="Subtitle"
                    header-tag="header"
                    footer-tag="footer">
              <h6 slot="header"
                  class="mb-0">Header Slot</h6>
              <em slot="footer">Footer Slot</em>
              <p class="card-text">Header and footers using slots.</p>
              <b-button href="#"
                        variant="primary">Go somewhere
              </b-button>
            </b-card>
          </b-card-group>

          <h3 class="style-guide__section__subtitle">Image Overlay</h3>

          <b-card-group deck>

            <b-card overlay
                    v-for="cardIndex in [1,2,3]"
                    :key="cardIndex"
                    v-bind:img-src="`https://picsum.photos/600/600?random&image=${cardIndex}`"
                    img-alt="Card Image"
                    text-variant="white"
                    title="Image Overlay"
                    sub-title="Subtitle">
              <p class="card-text">
                Some quick example text to build on the card and make
                up the bulk of the card's content.
              </p>
            </b-card>

          </b-card-group>

          <h3 class="style-guide__section__subtitle">Masonry-Style Columns</h3>

          <b-card-group columns>
            <b-card title="Card title that wraps to a new line"
                    img-src="https://placekitten.com/g/400/450"
                    img-fluid
                    img-alt="image"
                    img-top>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                longer.
              </p>
            </b-card>
            <b-card header="Quote">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </b-card>
            <b-card title="Title"
                    img-src="https://placekitten.com/500/350"
                    img-fluid
                    img-alt="image"
                    img-top>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <small class="text-muted">Last updated 3 mins ago</small>
            </b-card>
            <b-card bg-variant="primary"
                    text-variant="white">
              <blockquote class="card-blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <footer>
                  <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </footer>
              </blockquote>
            </b-card>
            <b-card title="Title">
              <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </b-card>
            <b-card img-src="https://lorempixel.com/400/400/"
                    img-fluid
                    img-alt="image"
                    overlay>
            </b-card>
            <b-card img-src="https://lorempixel.com/400/200/"
                    img-fluid
                    img-alt="image"
                    img-top>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content
                than the first.
              </p>
              <div slot="footer">
                <small class="text-muted">Footer Text</small>
              </div>
            </b-card>
          </b-card-group>

          <h3 class="style-guide__section__subtitle">Semantic Cards</h3>

          <b-card-group deck
                        class="mb-3">
            <b-card bg-variant="primary"
                    text-variant="white"
                    header="Primary"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="secondary"
                    text-variant="white"
                    header="Secondary"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="success"
                    text-variant="white"
                    header="Success"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
          </b-card-group>
          <b-card-group deck
                        class="mb-3">
            <b-card bg-variant="info"
                    text-variant="white"
                    header="Info"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="warning"
                    text-variant="white"
                    header="Warning"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="danger"
                    text-variant="white"
                    header="Danger"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
          </b-card-group>
          <b-card-group deck
                        class="mb-3">
            <b-card bg-variant="light"
                    header="Light"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="dark"
                    header="Dark"
                    text-variant="white"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card header="Default"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
          </b-card-group>

          <h3 class="style-guide__section__subtitle">Outlined Semantic Cards</h3>

          <b-card-group deck class="mb-3">
            <b-card border-variant="primary"
                    header="Primary"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card border-variant="secondary"
                    header="Secondary"
                    header-border-variant="secondary"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card border-variant="success"
                    header="Success"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
          </b-card-group>
          <b-card-group deck class="mb-3">
            <b-card border-variant="info"
                    header="Info"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card border-variant="warning"
                    header="Warning"
                    header-bg-variant="transparent"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card border-variant="danger"
                    header="Danger"
                    header-border-variant="danger"
                    header-text-variant="danger"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
          </b-card-group>
          <b-card-group deck class="mb-3">
            <b-card border-variant="light"
                    header="Light"
                    class="text-center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card border-variant="dark"
                    header="Dark"
                    align="center">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
          </b-card-group>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--carousels">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.carousels-body>Carousels</h2>
        <b-collapse id="carousels-body"
                    class="style-guide__section__body">
          <b-carousel id="carousel1"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="4000"
                      img-width="1024"
                      img-height="480"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide"
                              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                              img-src="https://lorempixel.com/1024/480/technics/2/"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                   src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </b-carousel-slide>

          </b-carousel>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--dropdowns">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.dropdowns-body>Dropdowns</h2>
        <b-collapse id="dropdowns-body"
                    class="style-guide__section__body">
          <div class="style-guide__button-row">
            <b-dropdown id="ddown1"
                        v-for="(buttonType, buttonIndex) in buttonTypes"
                        :key="buttonIndex"
                        :variant="buttonType"
                        :text="`${buttonType} Dropdown`">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>

          <h3 class="style-guide__section__subtitle">Large Dropdowns</h3>

          <div class="style-guide__button-row">
            <b-dropdown id="ddown1"
                        v-for="(buttonType, buttonIndex) in buttonTypes"
                        :key="buttonIndex"
                        :variant="buttonType"
                        size="lg"
                        :text="`${buttonType} Dropdown`">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>

          <h3 class="style-guide__section__subtitle">Small Dropdowns</h3>

          <div class="style-guide__button-row">
            <b-dropdown id="ddown1"
                        v-for="(buttonType, buttonIndex) in buttonTypes"
                        :key="buttonIndex"
                        :variant="buttonType"
                        size="sm"
                        :text="`${buttonType} Dropdown`">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--embeds">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.embeds-body>Embeds</h2>
        <b-collapse id="embeds-body"
                    class="style-guide__section__body">
          <b-embed type="iframe"
                   aspect="16by9"
                   src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                   allowfullscreen
          ></b-embed>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--forms">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.forms-body>Forms</h2>
        <b-collapse id="forms-body"
                    class="style-guide__section__body">
          Coming soon. Ugh. Forms.
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--jumbotron">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.Jumbotron-body>Jumbotron</h2>
        <b-collapse id="Jumbotron-body"
                    class="style-guide__section__body">
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--list-groups">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.list-group-body>List Groups</h2>
        <b-collapse id="list-group-body"
                    class="style-guide__section__body">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item active>Active! Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item disabled>Disabled! Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item href="#">Linked!</b-list-group-item>
            <b-list-group-item v-for="(type, index) in alertTypes"
                               :key="index"
                               :variant="type">
              {{ type | capitalize }} Item
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              With badge
              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--media">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.media-body>Media Objects</h2>
        <b-collapse id="media-body"
                    class="style-guide__section__body">
          <b-card>
            <b-media>
              <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"/>
              <h5>Media Title</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                in faucibus.
              </p>
              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <b-media>
                <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"/>
                <h5>Nested Media</h5>
                <p>
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </b-media>
            </b-media>
          </b-card>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--modals">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.modal-body>Modals</h2>
        <b-collapse id="modal-body"
                    class="style-guide__section__body">
          <div class="style-guide__button-row">
            <b-btn v-b-modal.modal-default>Default Modal</b-btn>
            <b-btn v-b-modal.modal-sm>Small Modal</b-btn>
            <b-btn v-b-modal.modal-lg>Large Modal</b-btn>
            <b-btn v-b-modal.modal-centered>Vertically Centered Modal</b-btn>
          </div>

          <b-modal id="modal-default"
                   title="Default Modal">
            <p>Hello from modal!</p>
          </b-modal>

          <b-modal id="modal-centered"
                   centered
                   title="Centered Modal">
            <p>Vertical centering FTW!</p>
          </b-modal>

          <b-modal id="modal-sm"
                   size="sm"
                   title="Small Modal">
            <p>Hello from modal!</p>
          </b-modal>

          <b-modal id="modal-lg"
                   size="lg"
                   title="Large Modal">
            <p>Hello from modal!</p>
          </b-modal>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--navs">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.navs-body>Navs</h2>
        <b-collapse id="navs-body"
                    class="style-guide__section__body">
          <b-nav>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>

          <h3 class="style-guide__section__subtitle">Tab Style</h3>

          <b-nav tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>

          <h3 class="style-guide__section__subtitle">Pill Style</h3>

          <b-nav pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>

          <h3 class="style-guide__section__subtitle">Navbar</h3>

          <b-navbar toggleable="md" type="dark" variant="dark">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

              <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">

                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                  <!-- Using button-content slot -->
                  <template slot="button-content">
                    <em>User</em>
                  </template>
                  <b-dropdown-item href="#">Profile</b-dropdown-item>
                  <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>

            </b-collapse>
          </b-navbar>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--pagination">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.pagination-body>Pagination</h2>
        <b-collapse id="pagination-body"
                    class="style-guide__section__body">
          <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>

          <h3 class="style-guide__section__subtitle">Large Pagination</h3>

          <b-pagination size="lg" :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>

          <h3 class="style-guide__section__subtitle">Small Pagination</h3>

          <b-pagination size="sm" :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>

        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--popovers">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.popovers-body>Popovers</h2>
        <b-collapse id="popovers-body"
                    class="style-guide__section__body">
          <div class="style-guide__button-row">
            <span v-for="placement in placements" :key="placement">
              <b-btn :id="'exPopover1-'+placement"
                     class="mb-3"
                     variant="primary">
                {{ placement }}
              </b-btn>
              <b-popover :target="'exPopover1-'+placement"
                         :placement="placement"
                         title="Popover!"
                         triggers="hover focus"
                         :content="`Placement ${placement}`">
              </b-popover>
            </span>
          </div>
        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--tables">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.tables-body>Tables</h2>
        <b-collapse id="tables-body"
                    class="style-guide__section__body">
          <b-table responsive :items="tableData.items" :fields="tableData.fields"></b-table>

          <h3 class="style-guide__section__subtitle">Striped/Hover Table</h3>

          <b-table striped responsive :items="tableData.items" :fields="tableData.fields"></b-table>

          <h3 class="style-guide__section__subtitle">MOAR OPTIONS!</h3>

            <div class="my-4">
              <b-form-checkbox v-model="striped">Striped</b-form-checkbox>
              <b-form-checkbox v-model="bordered">Bordered</b-form-checkbox>
              <b-form-checkbox v-model="outlined">Outlined</b-form-checkbox>
              <b-form-checkbox v-model="small">Small</b-form-checkbox>
              <b-form-checkbox v-model="hover">Hover</b-form-checkbox>
              <b-form-checkbox v-model="dark">Dark</b-form-checkbox>
              <b-form-checkbox v-model="fixed">Fixed</b-form-checkbox>
              <b-form-checkbox v-model="footClone">Foot Clone</b-form-checkbox>
            </div>

            <b-table :striped="striped"
                     :bordered="bordered"
                     :outlined="outlined"
                     :small="small"
                     :hover="hover"
                     :dark="dark"
                     :fixed="fixed"
                     :foot-clone="footClone"
                     :items="tableData.items"
                     :fields="tableData.fields"
                     responsive>
            </b-table>

        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--tabs">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.tabs-body>Tabs</h2>
        <b-collapse id="tabs-body"
                    class="style-guide__section__body">
          <b-tabs>
            <b-tab title="first" active>
              <br>I'm the first fading tab
            </b-tab>
            <b-tab title="second" >
              <br>I'm the second tab content
            </b-tab>
            <b-tab title="disabled" disabled>
              <br>Disabled tab!
            </b-tab>
          </b-tabs>

          <h3 class="style-guide__section__subtitle">Tab Cards</h3>

          <b-card no-body>
            <b-tabs card>
              <b-tab title="Tab 1" active>
                Tab Contents 1
              </b-tab>
              <b-tab title="Tab 2">
                Tab Contents 2
              </b-tab>
            </b-tabs>
          </b-card>

          <h3 class="style-guide__section__subtitle">Pill Style</h3>

          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="Tab 1" active>
                Tab Contents 1
              </b-tab>
              <b-tab title="Tab 2">
                Tab Contents 2
              </b-tab>
            </b-tabs>
          </b-card>

        </b-collapse>
      </section>

      <section class="style-guide__section style-guide__section--tooltips">
        <h2 class="style-guide__section__title display-4"
            v-b-toggle.tooltips-body>Tooltips</h2>
        <b-collapse id="tooltips-body"
                    class="style-guide__section__body">
          <div class="style-guide__button-row">
            <b-btn v-for="placement in placements"
                   :key="placement"
                   :id="`tooltip-${placement}`"
                   variant="primary">{{ placement }}</b-btn>
            <b-tooltip v-for="placement in placements"
                       :key="placement"
                       :target="`tooltip-${placement}`"
                       :placement="placement">
              Hello <strong>World!</strong>
            </b-tooltip>
          </div>
        </b-collapse>
      </section>
    </div>
  </div>
</template>
