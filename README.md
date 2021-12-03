# ex-tarot

This is a project that extend tarot-narrative projct of annetropy from GitHub.

The application replicates the original Tarot card-based narrative generation. However, I add a touch of AI using the DeepAI framework. The adventure mode will send initial sentences to the DeepAI server using REST API and then receive more narrative sentences to build a more coherent narrative. The UI uses the reactive mechanism of VueJS to display the data in real-time. Every change in the data will be reflected immediately in the UI via an MVC similar pattern. Users will be able to refresh the whole story or individual story stage. 

The app also includes some light animation and dynamic backgrounds from the Vuetify library to give the application a fresher material design. 

Project demo can be viewed using the link : https://tarotnarrative.quest/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
