<template>
  <div id="adventure">
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

        <v-row justify="center">
          <v-col offset-md="5" cols="1">
            <v-progress-circular
              :rotate="180"
              :size="100"
              :width="15"
              :value="progress"
              color="pink"
            >
              {{ progress }}
            </v-progress-circular>
          </v-col>
          <v-col>
            <v-btn
              :loading="loading"
              x
              large
              depressed
              color="success"
              @click="makeSpread"
            >
              Make Spread
            </v-btn>
          </v-col>

          <!-- <v-col>
            <v-btn
              x
              large
              depressed
              color="success"
              @click="comprehensiveStory"
            >
              Comprehensive Mode
            </v-btn>
          </v-col> -->
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
            <div v-for="(item, i) in deepaiResult" :key="i">
              <v-progress-linear
                v-if="item == ''"
                indeterminate
                color="yellow darken-2"
              ></v-progress-linear>

              <v-card-text v-if="item == ''">
                .............Loading new content for Card {{ i }}............
              </v-card-text>

              <v-card-text v-html="item"> </v-card-text>
            </div>
          </v-card>
        </v-row>

        <v-row> </v-row>

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
import axios from "axios"; // or CommonJS require syntax
import qs from "qs";
//const deepai = require('deepai');
export default {
  name: "Adventure",
  data: function () {
    return {
      fantastical_setting: [
        "In a fantasy land where human and sacred animals  ",
        "In a kingdom where the dragon and human  ",
        "In a fantasy land where god and human ",
      ],

      hero_quest: [
        "Jack is the hero who is good at ",
        "Jack has a destiny of  ",
        "Jack was born with a quest ",
      ],

      the_villian: [
        "Darkseid is a villian who ",
        "Darkseid is a bad guy who ",
        "Darkseid was born with an evil spirit who ",
      ],

      hero_decision: [
        "Jack decides to start his jouney by   ",
        "Jack decides to face his enemy by   ",
        "Jack decides to save the world by   ",
      ],

      hero_moment: [
        "Jack defeated darkseid by",
        "Jack won the battle by ",
        "Jack ended the conflict by ",
      ],

      lesson: [
        "Jack decided to go back his ordinary word and ",
        "Jack decided to stay in the new world and ",
      ],
      // upright = light
      // reversed = shadow
      storySpreads: {
        adventure: ["light", "shadow", "light", "light", "light"],
      },
      // punctuation to be added after each card meaning for template
      punctuation: {
        adventure: [".<br>", ".<br>", ".<br>", ".<br>", ".<br>", ".<br>"],
      },
      // tenses to use for each card meaning within the template depending
      // on position of the cards
      // TODO: Clean up the data representation, this is a mess

      tenses: {
        adventure: [
          "present_participle",
          "present",
          "present_participle",
          "present_participle",
          "infinitive",
          "infinitive",
        ],
      },
      storyTypes: ["adventure"],

      arc: [
        "Hero Quest",
        "Vilian",
        "Hero Journey Decision",
        "Hero Moment",
        "Hero Choice",
      ],
      seasons: ["SPRING", "SUMMER", "FALL", "WINTER"],

      deck: {},
      cardSpread: [],
      storyType: "",
      story: "",
      cardStory: [],
      storyTelling: "",
      tagline: "",

      tarot: "",

      tarotData: tarot,

      dialog: false,
      hover: false,
      cardMeaning: "",
      dialogCardName: "",
      deepaiResult: [
        {
          text: "",
          loading: false,
        },
      ],
      storyTemplate: [],
      loading: true,
      progress: 0,
    };
  },
  created() {
    this.makeSpread();
  },
  watch: {
    progress: {
      handler(val) {
        console.log(val);
        this.storyTelling =
          this.deepaiResult[0] +
          ".<br>" +
          this.deepaiResult[1] +
          ".<br>" +
          this.deepaiResult[2] +
          ".<br>" +
          this.deepaiResult[3] +
          ".<br>" +
          this.deepaiResult[4] +
          ".<br>" +
          this.deepaiResult[5] +
          ".<br>";
      },
    },
  },
  methods: {
    setTable() {
      var numSpots = this.arc.length;
      this.cardSpread = this.cardSpread[numSpots];
      for (var i = 0; i < numSpots; i++) {
        this.cardSpread[i].label = "";
        this.cardSpread[i].image = "";
      }
    },

    displayLabel(card, loc, reversed) {
      var labelText = this.arc[loc] + "<br><hr>";
      labelText += "<h2>" + card.name + "</h2>";
      if (reversed) labelText += "reversed";
      this.cardSpread[loc].label = labelText;
    },

    replaceCard(i) {
      var card = this.newCard(i);
      this.cardSpread[i].name = card.name;
      this.cardSpread[i].image = card.image;
      this.cardSpread[i].reversed = card.reversed;
      this.cardSpread[i].story = card.story;

      console.log("replace card");
      console.log(this.storyTemplate[i + 1]);
      this.progress -= 16;
      this.updateStory(i + 1);
    },

    newCard(i) {
      var reversed = this.storySpreads[this.story][i] == "shadow";

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

      card.image = cardURL;
      //this.cardSpread[loc].image = flip + cardURL;

      return card;

      //this.updateStory();
    },

    buildStoryTemplate() {
      this.storyTemplate = [];
      this.storyTemplate[0] =
        this.fantastical_setting[Math.floor(Math.random() * 3)];

      this.storyTemplate[1] = this.hero_quest[Math.floor(Math.random() * 3)];

      this.storyTemplate[2] = this.the_villian[Math.floor(Math.random() * 3)];

      this.storyTemplate[3] = this.hero_decision[Math.floor(Math.random() * 2)];

      this.storyTemplate[4] = this.hero_moment[Math.floor(Math.random() * 3)];

      this.storyTemplate[5] = this.lesson[Math.floor(Math.random() * 2)];

      for (var i = 0; i < 5; i++) {
        var card = this.cardSpread[i];
        var reversed = this.storySpreads[this.story][i] == "shadow";

        var tense = this.tenses[this.story][i];

        if (reversed) {
          this.storyTemplate[i + 1] +=
            card.story.shadow[tense] + this.punctuation[this.story][i];
        } else {
          this.storyTemplate[i + 1] +=
            card.story.light[tense] + this.punctuation[this.story][i];
        }
      }

      for (i = 0; i < 6; i++) {
        this.updateStory(i);
      }
    },

    async updateStory(i) {
      this.deepaiResult[i] = "";
      this.deepaiResult[i] = this.capitalizeFirstLetter(
        await this.getNextSentence(i)
      );

      if (i > 0) {
        this.deepaiResult[i] = "[Card " + i + "] " + this.deepaiResult[i];
      }

      if (this.deepaiResult[i] != "") {
        this.progress += 16;
        if (this.progress >= 96) this.progress = 100;
      }

      //}

      this.tagline =
        "THIS " +
        this.seasons[Math.floor(Math.random() * this.seasons.length)] +
        ", " +
        this.cardSpread[0].fortune_telling[
          Math.floor(Math.random() * this.cardSpread[0].fortune_telling.length)
        ].toUpperCase();
    },

    async comprehensiveStory() {
      this.deepaiResult = [];
      var story = "";
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < i; j++) {
          story += this.deepaiResult[j];
        }
        story += this.storyTemplate[i];
        console.log("comprehensive");
        console.log(story);

        this.deepaiResult[i] = await this.getNextSentenceWithText(story);
      }
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    makeSpread() {
      this.progress = 0;
      this.cardSpread = [];
      this.cardStory = [];
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
        // var index = Math.floor(Math.random()*this.deck.length);
        // var card = this.deck[index];
        // card.reversed = reversed;
        // card.image="qw.jpg";
        this.cardSpread.push(card);
        // this.deck.splice(index, 1);
        // console.log(card.image);
      }
      this.storyTelling = "";
      this.deepaiResult = [];

      this.buildStoryTemplate();
    },

    async getNextSentence(i) {
      this.loading = true;
      //const regex = /.*?(\.)(?=\s[A-Z])/;

      const url = "https://api.deepai.org/api/text-generator";

      let postData = {
        text: this.storyTemplate[i],
      };

      let axiosConfig = {
        method: "POST",
        headers: {
          "api-key": "541eacbc-3be0-41c9-a4e7-243a6cc1f17d",
        },

        data: qs.stringify(postData),
        url,
      };

      try {
        let response = await axios(axiosConfig);
        this.loading = false;
        //return response.data.output;
        let sentences = response.data.output.match(/[^.?!]+[.!?]+[\])'"`’”]*/g);
        return sentences[0] + "." + sentences[1];
      } catch (error) {
        console.log(error);
      }
    },

    async getNextSentenceWithText(string) {
      this.loading = true;
      //const regex = /.*?(\.)(?=\s[A-Z])/;

      const url = "https://api.deepai.org/api/text-generator";

      let postData = {
        text: string,
      };

      let axiosConfig = {
        method: "POST",
        headers: {
          "api-key": "541eacbc-3be0-41c9-a4e7-243a6cc1f17d",
        },

        data: qs.stringify(postData),
        url,
      };

      try {
        let response = await axios(axiosConfig);
        this.loading = false;
        //return response.data.output;
        let sentences = response.data.output.match(/[^.?!]+[.!?]+[\])'"`’”]*/g);
        return sentences[0] + "." + sentences[1];
      } catch (error) {
        console.log(error);
      }
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


<style scoped>
.adventure {
  background: url("../assets/backgrounds/adventure.jpg");
  background-size: cover;
}

.reversed {
  transform: rotate(180deg);
}
</style>