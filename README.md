# develUp

This was the final project at Craft Academy, for which we had 2 weeks. We use Expo and React Native for the front-end and Ruby on Rails for the backend [develup_api](https://github.com/FacundoOs/develUp_api). For the tests we used Detox and RSpec
<p float="left" align="center">
<img src="https://user-images.githubusercontent.com/68663401/102624186-f8570980-4143-11eb-8032-ee26bcfb4daf.png" width="220" height="420">
<img src="https://user-images.githubusercontent.com/68663401/102624328-21779a00-4144-11eb-8c0f-b63c9b667f78.png" width="220" height="420">
<img src="https://user-images.githubusercontent.com/68663401/102624741-bb3f4700-4144-11eb-96ca-667458198474.png" width="220" height="420">
<img src="https://user-images.githubusercontent.com/68663401/102624893-f2adf380-4144-11eb-9b12-a0a1c825d733.png" width="220" height="420"> 
<img src="https://user-images.githubusercontent.com/68663401/102624902-f6417a80-4144-11eb-8f87-4e43b45db65f.png" width="220" height="420">
<img src="https://user-images.githubusercontent.com/68663401/102624925-03f70000-4145-11eb-8428-2391c570b0ff.png" width="220" height="420">
<img src="https://user-images.githubusercontent.com/68663401/102624979-140edf80-4145-11eb-98ad-0339a20a4f76.png" width="220" height="420">
<img src="https://user-images.githubusercontent.com/68663401/102625015-1ec97480-4145-11eb-9648-a594f8f9f8b2.png" width="220" height="420">  
</p>

### How do we achieve our goal?
The idea is as follows: companies (clients), will publish a task that they need to perform. On the other side, the 'develUpers' will be able to see the tasks and apply to them if they are interested.
The companies, in turn, will be able to see in each of the tasks they have published, the number of developers who have applied and choose one of them.
And this is where the most important part of the application comes in: our system of scores and levels.
Each task that companies publish will have a number of points that will be the result of two parameters: the chosen programming languages and the estimated timeframe for the project. The more skills needed and the longer the estimated time, the higher the score.
This amount of points will be obtained by the chosen develUper, once the task is delivered and the client is satisfied.

### What will happen next with these points?
DevelUpers will be able to scale levels based on the amount of points they have, and by doing so, we want to obtain a system where the levels of the develUpers represent their skills. Companies can trust in them and in our system.

## Install & Build
First, make sure you have Expo CLI installed: 
```
npm install -g expo-cli
```

Install: 
```
yarn or yarn install
```

Run Project Locally: 
```
expo start
```

## To run the tests
With the simulator open run:
```
detox test
```

### Mocking API

We use [`mockserver`](https://www.npmjs.com/package/mockserver) to mock the server responses.

##### Usage

in CLI

```
$  mockserver -p 3000 -m './e2e/mocks'
```

in test configuration: the mockServer is located in `e2e/mockServer.js`

```js
// start server
let server = mockServer.open(<port number>)
```

```js
// close server
mockServer.close(server);
```

## Authors:
- [Facundo Osores](https://github.com/FacundoOs)
- [Sara Lundkvist](https://github.com/Saralundkvist86/)
- [Mauro Avellaneda](https://github.com/mauroavellaneda)
- [Emiliano Mainero](https://github.com/emiliano-ma)


## Fixes
### To fix this problem:

`currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput `

- We follow this [Solution](https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/440#issuecomment-699637083)

`Select the file: node_modules/react-native-keyboard-aware-scroll-view/lib/KeyboardAwareHOC.js Line 372 & replace: const currentlyFocusedField = TextInput.State.currentlyFocusedInput ? findNodeHandle(TextInput.State.currentlyFocusedInput()) : TextInput.State.currentlyFocusedField();`

