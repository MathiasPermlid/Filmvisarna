<template>
  <div>
    <div id="modal" v-if="showFail">
      <div id="div" v-on:click="close">
        <p id="fail">{{ message }}</p>
        <div>
          <img
            class="wondering"
            src="http://www.freepngclipart.com/thumb/thinking/32424-kids-thinking-images-hd-photo-thumb.png"
          >
        </div>
        <div>
          <img id="exitt" src="http://cdn.onlinewebfonts.com/svg/img_517388.png">
        </div>
      </div>
    </div>
    <div id="modal" v-if="showModal">
      <div id="div" v-on:click="close">
        <h3 id="thanks">Tack!</h3>
        <div
          id="message"
        >Din åsikt betyder jättemycket, och vi vill, att du ska vära nöjd. Vi återkommer strax, när vi har läst ditt meddelande.</div>
        <div>
          <img
            class="signature"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Celentano_signature.png"
          >
        </div>
        <div id="Walter">Walter Christmas, direktør</div>
        <div>
          <img id="exit" src="http://cdn.onlinewebfonts.com/svg/img_517388.png">
        </div>
      </div>
    </div>
    <div id="all">
      <h1>Kontakt</h1>
      <div id="main">
        <table>
          <tr>
            <th id="info">Öppettider</th>
          </tr>
          <tr>
            <td>Måndag: 10:00-23:00</td>
          </tr>
          <tr>
            <td>Lördag: 10:00-23:30</td>
          </tr>
          <tr>
            <td>Söndag: 10:00-18:00</td>
          </tr>
        </table>
        <table>
          <tr>
            <th id="info">Telefon</th>
          </tr>
          <tr>
            <td>+1112228888</td>
          </tr>
        </table>
        <table>
          <tr>
            <th id="info">E-post</th>
          </tr>
          <tr>
            <td>filmvisarna@gmail.se</td>
          </tr>
        </table>
        <table>
          <tr>
            <th id="info">Adress</th>
          </tr>
          <tr>
            <td>Fina gatan 8, 214 63 Malmö</td>
          </tr>
        </table>
      </div>
      <h3 id="opinion">Åsikter? Kontakt oss!</h3>
    </div>
    <div>
      <div class="form-group">
        <label for="mail">E-post</label>
        <input
          v-model="mail"
          type="email"
          class="form-control"
          id="mail"
          aria-describedby="emailHelp"
          placeholder="Din e-post..."
        >
      </div>
      <div class="form-group">
        <label for="opinion">Din åsikt</label>
        <textarea
          type="text"
          class="form-control"
          id="opinion"
          v-model="opinion"
          placeholder="Din åsikt..."
        ></textarea>
      </div>
      <div class="form-check"></div>
      <button id="submit" v-on:click="submitModal" type="button" class="btn btn-primary">Skicka</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      name: null,
      mail: "",
      opinion: "",
      showModal: false,
      showFail: false,
      message: ""
    };
  },
  methods: {
    isEmailValid: function(mail) {
      return this.mail.match(
        /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
      );
    },
    submitModal: function(event) {
      if (
        this.mail.length > 4 &&
        this.opinion.length > 4 &&
        this.isEmailValid()
      ) {
        this.showModal = true;
      } else if (this.mail.length < 5 || !this.isEmailValid()) {
        this.showFail = true;
        this.message =
          "Vänta lite! Någonting är inte bra! Har du skrivit din e-post korrekt?";
      } else if (this.opinion.length < 5) {
        this.showFail = true;
        this.message =
          "Du måste skriva lite mer, så vi förstår dig bättre. Försök igen";
      }
    },
    close: function(event) {
      this.showModal = false;
      this.showFail = false;
    }
  }
};
</script>
<style>
h3 {
  float: left;
}
#all {
  display: flex;
  flex-direction: column;
}
#main {
  display: flex;
  flex-direction: column;
  float: left;
}
table {
  float: left;
  margin-top: 2vh;
}
#info {
  margin-top: 1vh;
  font-size: 3vh;
}
.form {
  text-align: center;
}
#opinion {
  margin-top: 2vh;
}
#div {
  justify-content: center;
  display: flex;
  background: rgb(255, 255, 255);
  width: 50vw;
  height: 40vh;
  position: fixed;
  z-index: 9;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}
#modal {
  justify-content: center;
  display: flex;
  align-self: center;
}

#thanks {
  font-weight: bold;
  position: absolute;
  color: #36454f;
  margin-top: 1vh;
  margin-bottom: 1vh;
  text-decoration: underline;
  text-decoration-color: #b08a43;
}
.wondering {
  height: 27vh;
  width: 13vw;
  position: absolute;
  top: 12vh;
  left: 5vw;
  object-fit: cover;
}
#submit {
  background: #b08a43;
  border: #b08a43;
}
#message {
  position: absolute;
  top: 60px;
}
.signature {
  height: 9vh;
    width: 8vw;
    position: absolute;
    top: 24vh;
    left: 4vw;
    -o-object-fit: cover;
    object-fit: cover;
}
#Walter {
  position: absolute;
  top: 35vh;
  left: 1vw;
}
#fail {
  font-size: 3vh;
  font-weight: bold;
  margin-top: 2vh;
}
#exitt {
  height: 4vh;
  width: 2vw;
  position: relative;
  bottom: 0.5vh;
}
#exit {
  height: 4vh;
  width: 2vw;
  position: relative;
  left: 24vw;
  bottom: 0.5vh;
}
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

@media only screen and (max-width: 700px) {
  .signature {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  #div {
    width: 100%;
    left: 0;
  }
  #modal {
    justify-content: center;
    max-width: 50vw;
  }
  .wondering {
    height: 25vh;
    width: 32vw;
    left: 0vw;
    top: 13vh;
  }
  #exitt {
    height: 2vh;
    width: 3vw;
  }
  #exit {
    height: 2vh;
    width: 3vw;
    left: 48vw;
  }
}
@media only screen and (min-width: 500px) and (max-width: 1030px) {
  .wondering {
    display: none;
  }
  .signature {
    display: none;
  }
}
</style>
