<style src="./style-guide.scss" lang="scss"></style>
<script src="./style-guide.js"></script>

<template>
  <div class="page style-guide">
    <header class="style-guide__header">
      <h1 class="display-1">Style Guide</h1>
    </header>
    <div class="style-guide__body">

      <section class="style-guide__section style-guide__section--buttons">
        <h2 class="style-guide__section__title display-3">Buttons</h2>
        <div class="style-guide__section__body">
          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType }}
            </button>
          </div>

          <h3 class="style-guide__section__subtitle display-4">Large buttons</h3>
          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn btn-lg"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType }}
            </button>
          </div>

          <h3 class="style-guide__section__subtitle display-4">Small buttons</h3>
          <div class="style-guide__button-row">
            <button type="button"
                    v-for="(buttonType, buttonIndex) in buttonTypes"
                    :key="buttonIndex"
                    class="btn btn-sm"
                    v-bind:class="`btn-${buttonType}`">{{ buttonType }}
            </button>
          </div>

          <h3 class="style-guide__section__subtitle display-4">Outline buttons</h3>

          <div class="style-guide__button-row">
            <div class="style-guide__button-row">
              <button type="button"
                      v-for="(buttonType, buttonIndex) in buttonTypes"
                      :key="buttonIndex"
                      class="btn"
                      v-bind:class="`btn-outline-${buttonType}`">{{ buttonType }}
              </button>
            </div>
          </div>

          <h3 class="style-guide__section__subtitle display-4">Disabled buttons</h3>

          <div class="style-guide__button-row">
            <div class="style-guide__button-row">
              <button type="button"
                      v-for="(buttonType, buttonIndex) in buttonTypes"
                      :key="buttonIndex"
                      class="btn"
                      disabled
                      v-bind:class="`btn-${buttonType}`">{{ buttonType }}
              </button>
            </div>
          </div>

          <h3 class="style-guide__section__subtitle display-4">Button Groups</h3>

          <div class="style-guide__button-row">
            <b-button-group
              v-for="(buttonType, buttonIndex) in buttonTypes"
              :key="buttonIndex">
              <b-button :variant="buttonType">{{ buttonType }}</b-button>
              <b-button :variant="buttonType">{{ buttonType }}</b-button>
              <b-button :variant="buttonType">{{ buttonType }}</b-button>
            </b-button-group>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>
