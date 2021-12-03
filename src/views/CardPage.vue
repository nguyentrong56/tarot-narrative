<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid v-bind:class="story">
        <v-row>
          <v-card
            class="mx-auto my-12"
            elevation="9"
            outlined
            shaped
            tile
            loading
            color="#385F73"
            dark
          >
            <v-card-title> {{ this.storyType }} </v-card-title>
          </v-card>
        </v-row>

        <v-row>
          <v-col align-self="align">
            <v-card
              class="mx-auto my-12"
              elevation="9"
              outlined
              shaped
              tile
              width="190"
              height="519"
            >
              <!-- <v-img @mouseover="getCardMeaning(0)" -->
              <v-img
                v-bind:class="{ reversed: this.cardSpread[0].reversed }"
                :src="require('../assets/cards/' + this.cardSpread[0].image)"
              >
              </v-img>

              <v-card-title class="font-weight-black">
                {{ this.cardSpread[0].name }}
              </v-card-title>
              <v-card-title
                class="font-weight-black"
                v-if="this.cardSpread[0].reversed"
              >
                Reversed</v-card-title
              >

              <v-btn depressed color="primary" @click="replaceCard(0)">
                New Card
              </v-btn>
            </v-card>
            <span v-if="hover"> This is a message </span>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto my-12"
              elevation="9"
              outlined
              shaped
              tile
              width="190"
              height="519"
            >
              <v-img
                v-bind:class="{ reversed: this.cardSpread[1].reversed }"
                :src="require('../assets/cards/' + this.cardSpread[1].image)"
              >
              </v-img>
              <v-card-title class="font-weight-black">
                {{ this.cardSpread[1].name }}</v-card-title
              >
              <v-card-title
                class="font-weight-black"
                v-if="this.cardSpread[1].reversed"
              >
                Reversed</v-card-title
              >

              <v-btn depressed color="primary" @click="replaceCard(1)">
                New Card
              </v-btn>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto my-12"
              elevation="9"
              outlined
              shaped
              tile
              width="190"
              height="519"
            >
              <v-img
                v-bind:class="{ reversed: this.cardSpread[2].reversed }"
                :src="require('../assets/cards/' + this.cardSpread[2].image)"
              >
              </v-img>
              <v-card-title class="font-weight-black">
                {{ this.cardSpread[2].name }}
              </v-card-title>
              <v-card-title
                class="font-weight-black"
                v-if="this.cardSpread[2].reversed"
              >
                Reversed</v-card-title
              >

              <v-btn depressed @click="replaceCard(2)" color="primary">
                New Card
              </v-btn>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto my-12"
              elevation="9"
              outlined
              shaped
              tile
              width="190"
              height="519"
            >
              <v-img
                v-bind:class="{ reversed: this.cardSpread[3].reversed }"
                :src="require('../assets/cards/' + this.cardSpread[3].image)"
              >
              </v-img>
              <v-card-title class="font-weight-black" size="">
                {{ this.cardSpread[3].name }}</v-card-title
              >
              <v-card-title
                class="font-weight-black"
                v-if="this.cardSpread[3].reversed"
              >
                Reversed</v-card-title
              >

              <v-btn depressed @click="replaceCard(3)" color="primary">
                New Card
              </v-btn>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              class="mx-auto my-12"
              elevation="9"
              outlined
              shaped
              tile
              width="190"
              height="519"
            >
              <v-img
                v-bind:class="{ reversed: this.cardSpread[4].reversed }"
                :src="require('../assets/cards/' + this.cardSpread[4].image)"
              >
              </v-img>
              <v-card-title class="font-weight-black">
                {{ this.cardSpread[4].name }}
              </v-card-title>
              <v-card-title
                class="font-weight-black"
                v-if="this.cardSpread[4].reversed"
              >
                Reversed</v-card-title
              >

              <v-btn depressed color="primary" @click="replaceCard(4)">
                New Card
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>

        <v-row>
          <v-col offset-md="4">
            <v-btn x large depressed color="error" @click="goAdventure">
              Try Adventure Mode
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-card
            class="mx-auto my-12"
            elevation="9"
            outlined
            shaped
            tile
            color="#385F73"
            dark
          >
            <v-card-title> {{ this.tagline }} </v-card-title>
            <v-card-text v-html="this.storyTelling"> </v-card-text>
          </v-card>
        </v-row>

        <v-row>
          <v-col offset-md="4">
            <v-btn x large depressed color="success" @click="makeSpread">
              Make Spread
            </v-btn>
          </v-col>
        </v-row>

        <v-dialog v-model="hover" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              {{ cardMeaning.name }}
            </v-card-title>

            <v-card-text>
              <v-card-title> Light Meaning </v-card-title>
              {{ cardMeaning.meaning_up }}

              <v-card-title> Shadow Meaning </v-card-title>
              {{ cardMeaning.meaning_up }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import tarot from "../assets/tarot.json";
export default {
  name: "CardPage",
  data: function () {
    return {
      storyTemplates: {
        comedy: [
          "Jack is the best in the world at one thing: ",
          "But when Jack ",
          "they ",
          "Now it's up to their best friend Jill to ",
          "and in doing so help Jack ",
        ],

        tragedy: [
          "Jack wants most of all to ",
          "and all they need to do to get there is ",
          "Things are looking up in response, and Jack finds themselves ",
          "But then the tide turns and Jack ",
          "In the end, Jack loses the battle and is remembered only for ",
        ],
      },
      // upright = light
      // reversed = shadow
      storySpreads: {
        comedy: ["light", "shadow", "shadow", "light", "light"],
        tragedy: ["light", "shadow", "light", "shadow", "shadow"],
      },
      // punctuation to be added after each card meaning for template
      punctuation: {
        comedy: [".<br>", ", ", ".<br>", ", ", ".<br>"],
        tragedy: [", ", ".<br>", ".<br>", ".<br>", ".<br>"],
      },
      // tenses to use for each card meaning within the template depending
      // on position of the cards
      // TODO: Clean up the data representation, this is a mess

      tenses: {
        comedy: [
          "present_participle",
          "present",
          "infinitive",
          "infinitive",
          "infinitive",
        ],
        tragedy: [
          "infinitive",
          "infinitive",
          "present_participle",
          "present",
          "present_participle",
        ],
      },
      // Drama arc - each card is associated with each spot in the arc
      arc: [
        "Inciting Incident",
        "Complication",
        "Crisis",
        "Climax",
        "Resolution",
      ],

      // list of seasons for the tag line generation
      seasons: ["SPRING", "SUMMER", "FALL", "WINTER"],

      // list of story templates available
      storyTypes: ["comedy", "tragedy"],

      deck: {},
      cardSpread: [],
      storyType: "",
      story: "",
      storyTelling: "",
      tagline: "",

      tarot: "",

      tarotData: tarot,

      dialog: false,
      hover: false,
      cardMeaning: "",
      dialogCardName: "",
    };
  },
  created() {
    this.makeSpread();
  },

  methods: {
    goAdventure() {
      this.$router.push("Adventure");
    },

  //Function to replace individual card 
    replaceCard(i) {
      var card = this.newCard(i);
      this.cardSpread[i].name = card.name;
      this.cardSpread[i].image = card.image;
      this.cardSpread[i].reversed = card.reversed;
      this.cardSpread[i].story = card.story;
      this.updateStory();
    },

 // Function to draw random card 
    newCard(i) {
      console.log("Click new card");
      var reversed = this.storySpreads[this.story][i] == "shadow";
      console.log("card reversed: ");
      console.log(reversed);

      var index = Math.floor(Math.random() * this.deck.length);
      var card = this.deck[index];
      console.log(card);
      this.deck.splice(index, 1);

      if (reversed)
        //flip = "reversed";
        card.reversed = reversed;
      // set up the URL for the image
      var rank = card.rank;
      switch (rank) {
        case "page":
          rank = "p";
          break;
        case "knight":
          rank = "n";
          break;
        case "queen":
          rank = "q";
          break;
        case "king":
          rank = "k";
          break;
      }
      var cardURL = "";
      if (card.suit == "coins") cardURL = rank + "p" + ".jpg";
      else cardURL = rank + card.suit[0] + ".jpg";
      console.log(cardURL);

      card.image = cardURL;
      //this.cardSpread[loc].image = flip + cardURL;

      return card;

      //this.updateStory();
    },

    //Function to update story when cards are changed 
    updateStory() {
      this.storyTelling = "";

      for (var i = 0; i < this.arc.length; i++) {
        var card = this.cardSpread[i];
        var reversed = this.storySpreads[this.story][i] == "shadow";
        this.storyTelling += this.storyTemplates[this.story][i];
        console.log("story log: " + this.story + " " + i);
        var tense = this.tenses[this.story][i];
        console.log(tense);
        console.log("Card" + i);
        console.log(card);

        if (reversed) {
          this.storyTelling +=
            card.story.shadow[tense] + this.punctuation[this.story][i];
        } else {
          this.storyTelling +=
            card.story.light[tense] + this.punctuation[this.story][i];
        }

        console.log("Story telling : ");
        console.log(this.storyTelling);
      }

      this.tagline =
        "THIS " +
        this.seasons[Math.floor(Math.random() * this.seasons.length)] +
        ", " +
        this.cardSpread[0].fortune_telling[
          Math.floor(Math.random() * this.cardSpread[0].fortune_telling.length)
        ].toUpperCase();
    },

    // Make new card spread by replacing all card 
    makeSpread() {
      this.cardSpread = [];
      console.log("Click MakeSpread");
      this.deck = JSON.parse(
        JSON.stringify(this.tarotData.tarot_interpretations)
      );

      // pick a story type
      this.story =
        this.storyTypes[Math.floor(Math.random() * this.storyTypes.length)];
      this.storyType = "A story of " + this.story;
      for (var i = 0; i < this.arc.length; i++) {
        //var reversed = (this.storySpreads[this.story][i] == "shadow");
        var card = this.newCard(i);
        this.cardSpread.push(card);
      }
      this.updateStory();
      console.log(this.deck);
    },


  },
};
</script>

<style scoped>
.comedy {
  background: url("../assets/backgrounds/comedybackground.png");
  background-size: cover;
}

.tragedy {
  background: url("../assets/backgrounds/tragedybackground.png");
  background-size: cover;
}

.reversed {
  transform: rotate(180deg);
}
</style>

