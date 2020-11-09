var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2a314f4c-0397-4630-ab80-80efcf28b187","f91df3f7-f244-43f6-b6d9-49d43108e2a9","b0d81f66-d16f-4c49-ac9e-a4018fe03152","872f5f83-6b5d-4135-bb1e-a6db255a25b4","98635845-2098-453b-a156-26f44b912c6f","5364fe5c-305b-417c-8089-1133a55b3f16","91cbc73a-be00-4800-8b19-8af888e1107f","50e9e93a-2579-425e-ad4e-f7f6263cc9ba","ed5da3f0-e727-42ed-b8a1-733b9572e989","04ae1309-7b9a-4672-a864-669b84218b3c","a8380452-a63e-4ba1-8c3d-abf4c661c3f1","187467cb-57a5-449a-9f95-23274876610b","0672f33f-e5e4-4673-9df5-c331445ed234","70539656-7432-472c-93e3-0e3c61650c0b","df6f51bd-2c55-4b86-a180-6e147114e970","1a37c763-01cf-466a-81e9-f5ba008d9b4b","c67202a5-a6e2-4dcb-97ba-479b767a522d","243e23b2-c275-49b5-874c-749056670e71","0437ed4b-2c8c-4b35-8a6c-967f23c886a0","c1a1611d-a7dc-4369-a9e2-9594f74780ae","1adea08b-4456-4b45-b531-45ffdf434051","50871118-127c-4ff7-a7f5-849bb05f7594","12373ba3-7bf3-4e03-b578-3cc79e26ce5c","fb3e0336-2550-47bd-ba2f-794ed09a09d4","ccf799f9-e2a2-4a12-835b-4f14fa7e7c93","e4ae0c4b-a2fa-4f26-abb2-85a5c9f1d69f","6d6f8657-28c3-488f-b4e9-4c565fdc5750","b5ff439a-594a-4487-a421-cf192a11d76b"],"propsByKey":{"2a314f4c-0397-4630-ab80-80efcf28b187":{"name":"underwater_1","sourceUrl":"assets/api/v1/animation-library/Uc3U0ENCf9gcYmAADOJ9wD9KMfxXbbic/category_backgrounds/background_underwater.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Uc3U0ENCf9gcYmAADOJ9wD9KMfxXbbic","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/Uc3U0ENCf9gcYmAADOJ9wD9KMfxXbbic/category_backgrounds/background_underwater.png"},"f91df3f7-f244-43f6-b6d9-49d43108e2a9":{"name":"coin","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"hVb0Bbze7g6GNFUMkpTr4Cxb3i7qYi8H","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/f91df3f7-f244-43f6-b6d9-49d43108e2a9.png"},"b0d81f66-d16f-4c49-ac9e-a4018fe03152":{"name":"wall","sourceUrl":null,"frameSize":{"x":26,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"LNSboLYLn_97RJKbpuuPz2zHSfYBaeQo","loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":3},"rootRelativePath":"assets/b0d81f66-d16f-4c49-ac9e-a4018fe03152.png"},"872f5f83-6b5d-4135-bb1e-a6db255a25b4":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"V3u71WAhUWtSVyfBi29TmHZT3rVBaMHP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":3},"rootRelativePath":"assets/872f5f83-6b5d-4135-bb1e-a6db255a25b4.png"},"98635845-2098-453b-a156-26f44b912c6f":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":23,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"E1YJAjpwmJQ3ZjRo.h2kUEKzCBIE88NI","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":23},"rootRelativePath":"assets/98635845-2098-453b-a156-26f44b912c6f.png"},"5364fe5c-305b-417c-8089-1133a55b3f16":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":13,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"M16qFXNCNelqUaASxmX97NbgVhEKpoyh","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":3},"rootRelativePath":"assets/5364fe5c-305b-417c-8089-1133a55b3f16.png"},"91cbc73a-be00-4800-8b19-8af888e1107f":{"name":"pacmanR","sourceUrl":null,"frameSize":{"x":11,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"09TS3ASMUPeNepbPSw557BXpLCmXI2hh","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":11},"rootRelativePath":"assets/91cbc73a-be00-4800-8b19-8af888e1107f.png"},"50e9e93a-2579-425e-ad4e-f7f6263cc9ba":{"name":"pacmanU","sourceUrl":null,"frameSize":{"x":11,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"w2xwGYM.a1KFGK9nyjXACZIQpc6lPkoE","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":11},"rootRelativePath":"assets/50e9e93a-2579-425e-ad4e-f7f6263cc9ba.png"},"ed5da3f0-e727-42ed-b8a1-733b9572e989":{"name":"pacmanL","sourceUrl":null,"frameSize":{"x":11,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"aDEJacfB9dwu8Oqlc1UXNmpGH5.PAtlK","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":11},"rootRelativePath":"assets/ed5da3f0-e727-42ed-b8a1-733b9572e989.png"},"04ae1309-7b9a-4672-a864-669b84218b3c":{"name":"ghost1","sourceUrl":null,"frameSize":{"x":191,"y":222},"frameCount":1,"looping":true,"frameDelay":12,"version":".ZefbBsPgDa4LJOo97s122CmBnqiT.Rc","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":222},"rootRelativePath":"assets/04ae1309-7b9a-4672-a864-669b84218b3c.png"},"a8380452-a63e-4ba1-8c3d-abf4c661c3f1":{"name":"ghost2","sourceUrl":null,"frameSize":{"x":208,"y":242},"frameCount":1,"looping":true,"frameDelay":12,"version":"HL7KV9NwmRb9psBnvD7xd3rR_QxaQHfO","loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":242},"rootRelativePath":"assets/a8380452-a63e-4ba1-8c3d-abf4c661c3f1.png"},"187467cb-57a5-449a-9f95-23274876610b":{"name":"ghost3","sourceUrl":null,"frameSize":{"x":187,"y":208},"frameCount":1,"looping":true,"frameDelay":12,"version":"QrqkYOg6WVNA5_J3K3gegYtNvnUeGep7","loadedFromSource":true,"saved":true,"sourceSize":{"x":187,"y":208},"rootRelativePath":"assets/187467cb-57a5-449a-9f95-23274876610b.png"},"0672f33f-e5e4-4673-9df5-c331445ed234":{"name":"ghost4","sourceUrl":null,"frameSize":{"x":177,"y":196},"frameCount":1,"looping":true,"frameDelay":12,"version":"Eyn.TX9l8Lo3nCumjXOcXIBVVjKJz4vP","loadedFromSource":true,"saved":true,"sourceSize":{"x":177,"y":196},"rootRelativePath":"assets/0672f33f-e5e4-4673-9df5-c331445ed234.png"},"70539656-7432-472c-93e3-0e3c61650c0b":{"name":"heart","sourceUrl":null,"frameSize":{"x":14,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"GT2NoA8Z6sMEVwcZWo8fyBDvHl3IHkye","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":14},"rootRelativePath":"assets/70539656-7432-472c-93e3-0e3c61650c0b.png"},"df6f51bd-2c55-4b86-a180-6e147114e970":{"name":"Winner","sourceUrl":null,"frameSize":{"x":32,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"T2nXpdhOdBuGXsvpfXxgqxM3vNCP5BD6","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":15},"rootRelativePath":"assets/df6f51bd-2c55-4b86-a180-6e147114e970.png"},"1a37c763-01cf-466a-81e9-f5ba008d9b4b":{"name":"Game Over","sourceUrl":null,"frameSize":{"x":32,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"0ggOyZWMa5wjWXHw5.5kTKne1jCM.4Y9","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":15},"rootRelativePath":"assets/1a37c763-01cf-466a-81e9-f5ba008d9b4b.png"},"c67202a5-a6e2-4dcb-97ba-479b767a522d":{"name":"pacman","sourceUrl":null,"frameSize":{"x":94,"y":95},"frameCount":1,"looping":true,"frameDelay":12,"version":"JxL0t1jo4YTUVRVEsdlm3ulFQNz5HYDS","loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":95},"rootRelativePath":"assets/c67202a5-a6e2-4dcb-97ba-479b767a522d.png"},"243e23b2-c275-49b5-874c-749056670e71":{"name":"gameover2","sourceUrl":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/243e23b2-c275-49b5-874c-749056670e71.png","frameSize":{"x":354,"y":316},"frameCount":1,"looping":true,"frameDelay":4,"version":"nFppQVxf1xxUIDPtiEVFaIp1gzCHFLge","loadedFromSource":true,"saved":true,"sourceSize":{"x":354,"y":316},"rootRelativePath":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/243e23b2-c275-49b5-874c-749056670e71.png"},"0437ed4b-2c8c-4b35-8a6c-967f23c886a0":{"name":"code","sourceUrl":null,"frameSize":{"x":276,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"Zpiocbh8vkqmUiwUg2VWzvLXKROBTwWn","loadedFromSource":true,"saved":true,"sourceSize":{"x":276,"y":128},"rootRelativePath":"assets/0437ed4b-2c8c-4b35-8a6c-967f23c886a0.png"},"c1a1611d-a7dc-4369-a9e2-9594f74780ae":{"name":"finish","sourceUrl":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/c1a1611d-a7dc-4369-a9e2-9594f74780ae.png","frameSize":{"x":717,"y":663},"frameCount":1,"looping":true,"frameDelay":4,"version":"tVeLp9y_6m0.MbyhqApSgkmNgDgcfrwO","loadedFromSource":true,"saved":true,"sourceSize":{"x":717,"y":663},"rootRelativePath":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/c1a1611d-a7dc-4369-a9e2-9594f74780ae.png"},"1adea08b-4456-4b45-b531-45ffdf434051":{"name":"title2","sourceUrl":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/1adea08b-4456-4b45-b531-45ffdf434051.png","frameSize":{"x":1129,"y":1029},"frameCount":1,"looping":true,"frameDelay":4,"version":"A1C4ZaD64FRRh6OQMClMOu_Mk9YgTmB7","loadedFromSource":true,"saved":true,"sourceSize":{"x":1129,"y":1029},"rootRelativePath":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/1adea08b-4456-4b45-b531-45ffdf434051.png"},"50871118-127c-4ff7-a7f5-849bb05f7594":{"name":"start1","sourceUrl":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/50871118-127c-4ff7-a7f5-849bb05f7594.png","frameSize":{"x":413,"y":232},"frameCount":1,"looping":true,"frameDelay":4,"version":"i.7qhj0hpUHkT9YtIU3BVq8vCXOGqOQT","loadedFromSource":true,"saved":true,"sourceSize":{"x":413,"y":232},"rootRelativePath":"assets/v3/animations/ZkcVAn5xI-LUBhJv1Ysj4_jsh1OS9J1how5eK-Y17H4/50871118-127c-4ff7-a7f5-849bb05f7594.png"},"12373ba3-7bf3-4e03-b578-3cc79e26ce5c":{"name":"bg","sourceUrl":null,"frameSize":{"x":260,"y":255},"frameCount":1,"looping":true,"frameDelay":12,"version":"m5MBfeDA5GFFAbEd8cyrATM.fariNK6v","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":255},"rootRelativePath":"assets/12373ba3-7bf3-4e03-b578-3cc79e26ce5c.png"},"fb3e0336-2550-47bd-ba2f-794ed09a09d4":{"name":"bg2","sourceUrl":null,"frameSize":{"x":260,"y":255},"frameCount":1,"looping":true,"frameDelay":12,"version":"URfMVZGOngIXK9qQ3pIjGr3EKLRuOA6P","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":255},"rootRelativePath":"assets/fb3e0336-2550-47bd-ba2f-794ed09a09d4.png"},"ccf799f9-e2a2-4a12-835b-4f14fa7e7c93":{"name":"restart","sourceUrl":null,"frameSize":{"x":602,"y":176},"frameCount":1,"looping":true,"frameDelay":12,"version":"_H2hnYHEJTn8p2h_lc3Rb5JbDcWX0BXB","loadedFromSource":true,"saved":true,"sourceSize":{"x":602,"y":176},"rootRelativePath":"assets/ccf799f9-e2a2-4a12-835b-4f14fa7e7c93.png"},"e4ae0c4b-a2fa-4f26-abb2-85a5c9f1d69f":{"name":"restart2","sourceUrl":null,"frameSize":{"x":602,"y":176},"frameCount":1,"looping":true,"frameDelay":12,"version":"88gJ0AgxkAF4m34OjTIRd4AuXdyJeJmT","loadedFromSource":true,"saved":true,"sourceSize":{"x":602,"y":176},"rootRelativePath":"assets/e4ae0c4b-a2fa-4f26-abb2-85a5c9f1d69f.png"},"6d6f8657-28c3-488f-b4e9-4c565fdc5750":{"name":"heart2","sourceUrl":null,"frameSize":{"x":511,"y":430},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gsy09m3NjxK8ICnuoL4osBLtYefIyq5M","loadedFromSource":true,"saved":true,"sourceSize":{"x":511,"y":430},"rootRelativePath":"assets/6d6f8657-28c3-488f-b4e9-4c565fdc5750.png"},"b5ff439a-594a-4487-a421-cf192a11d76b":{"name":"pacman2","sourceUrl":null,"frameSize":{"x":142,"y":165},"frameCount":1,"looping":true,"frameDelay":12,"version":"_qY6zhpWYihnungKesU8kunscJvKZsHu","loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":165},"rootRelativePath":"assets/b5ff439a-594a-4487-a421-cf192a11d76b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var score = 0;
var lives = 5;

// Create your sprites here
var pacman = createSprite(20, 122);
pacman.setAnimation("pacman");
pacman.velocityX = 0;
pacman.scale = 0.150;
pacman.visible=false;


var ghost1 = createSprite(49, 50);
ghost1.setAnimation("ghost1");
ghost1.scale = 0.1;
ghost1.velocityY = 5;
var ghost2 = createSprite(135, 43);
ghost2.setAnimation("ghost2");
ghost2.scale = 0.09;
ghost2.setCollider("circle");
ghost2.debug="true";
ghost2.velocityY = 5;
var ghost3 = createSprite(77, 73);
ghost3.setAnimation("ghost3");
ghost3.scale = 0.09;
ghost3.velocityY = 5;
// var ghost4 = createSprite(320, 193);
// ghost4.setAnimation("ghost4");
// ghost4.scale = 0.09;
// ghost4.velocityY = -5;

var heart1 = createSprite(115, 350);
heart1.setAnimation("heart2");
heart1.scale = 0.07;
var heart2 = createSprite(160, 350);
heart2.setAnimation("heart2");
heart2.scale = 0.07;
var heart3 = createSprite(205, 350);
heart3.setAnimation("heart2");
heart3.scale = 0.07;
var heart4 = createSprite(250, 350);
heart4.setAnimation("heart2");
heart4.scale = 0.07;
var heart5 = createSprite(300, 350);
heart5.setAnimation("heart2");
heart5.scale = 0.07;


//Walls
var wall = createSprite(0, 110);
wall.setAnimation("wall");
wall.scale = 3;
var wall2 = createSprite(400, 110);
wall2.setAnimation("wall");
wall2.scale = 3;
var wall3 = createSprite(0, 135);
wall3.setAnimation("wall");
wall3.scale = 3;
var wall4 = createSprite(400, 135);
wall4.setAnimation("wall");
wall4.scale = 3;
var wall5 = createSprite(35, 67);
wall5.setAnimation("wall");
wall5.scale = 3;
wall5.rotation = 90;
var wall6 = createSprite(366, 67);
wall6.setAnimation("wall");
wall6.scale = 3;
wall6.rotation = 90;
var wall7 = createSprite(200, 20);
wall7.setAnimation("animation_1");
wall7.scale = 3.4;
var wall8 = createSprite(65, 82);
wall8.setAnimation("wall");
wall8.scale = 2.7;
wall8.rotation = 90;
var wall9 = createSprite(340, 82);
wall9.setAnimation("wall");
wall9.scale = 2.7;
wall9.rotation = 90;
var wall10 = createSprite(200, 50);
wall10.setAnimation("wall");
wall10.scale = 3;
var wall11 = createSprite(237, 79);
wall11.setAnimation("wall");
wall11.scale = 2.5;
wall11.rotation = 90;
var wall12 = createSprite(193, 135);
wall12.setAnimation("wall");
wall12.scale = 3;
var wall13 = createSprite(205, 135);
wall13.setAnimation("wall");
wall13.scale = 3;
var wall14 = createSprite(200, 100);
wall14.setAnimation("animation_2");
wall14.scale = 4.5;
wall14.rotation = 90;
var wall15 = createSprite(100, 135);
wall15.setAnimation("wall");
wall15.scale = 4;
wall15.rotation = 90;
var wall16 = createSprite(77, 138);
wall16.setAnimation("animation_2");
wall16.scale = 3;
var wall17 = createSprite(300, 135);
wall17.setAnimation("wall");
wall17.scale = 4;
wall17.rotation = 90;
var wall18 = createSprite(325, 137);
wall18.setAnimation("animation_2");
wall18.scale = 3;
var wall19 = createSprite(200, 180);
wall19.setAnimation("wall");
wall19.scale = 3;
var wall20 = createSprite(237, 210);
wall20.setAnimation("wall");
wall20.scale = 2.5;
wall20.rotation = 90;
var wall21 = createSprite(63, 210);
wall21.setAnimation("wall");
wall21.scale = 3;
wall21.rotation = 90;
var wall22 = createSprite(335, 210);
wall22.setAnimation("wall");
wall22.scale = 3;
wall22.rotation = 90;
var wall23 = createSprite(200, 240);
wall23.setAnimation("wall");
wall23.scale = 3;
wall23.rotation = 90;
var wall24 = createSprite(270, 275);
wall24.setAnimation("wall");
wall24.scale = 3;
var wall25 = createSprite(300, 275);
wall25.setAnimation("wall");
wall25.scale = 3;
var wall26 = createSprite(300, 246);
wall26.setAnimation("animation_2");
wall26.scale = 4;
wall26.rotation = 90;
var wall27 = createSprite(95, 275);
wall27.setAnimation("wall");
wall27.scale = 3;
var wall28 = createSprite(125, 275);
wall28.setAnimation("wall");
wall28.scale = 3;
var wall29 = createSprite(100, 246);
wall29.setAnimation("animation_2");
wall29.scale = 4;
wall29.rotation = 90;
var wall30 = createSprite(0, 275);
wall30.setAnimation("wall");
wall30.scale = 3;
var wall31 = createSprite(0, 243);
wall31.setAnimation("wall");
wall31.scale = 3;
var wall32 = createSprite(400, 275);
wall32.setAnimation("wall");
wall32.scale = 3;
var wall33 = createSprite(400, 243);
wall33.setAnimation("wall");
wall33.scale = 3;
var wall34 = createSprite(370, 190);
wall34.setAnimation("wall");
wall34.scale = 3.7;
wall34.rotation = 90;
var wall35 = createSprite(32, 190);
wall35.setAnimation("wall");
wall35.scale = 3.7;
wall35.rotation = 90;
var wall36 = createSprite(200, 300);
wall36.setAnimation("animation_1");
wall36.scale = 3.4;
var wall37 = createSprite(365, 287);
wall37.setAnimation("animation_2");
wall37.scale = 2.5;
wall37.rotation = 90;
var wall38 = createSprite(35, 287);
wall38.setAnimation("animation_2");
wall38.scale = 2.5;
wall38.rotation = 90;
var wall39 = createSprite(165, 79);
wall39.setAnimation("wall");
wall39.scale = 2.5;
wall39.rotation = 90;
var wall40 = createSprite(315, 52);
wall40.setAnimation("animation_2");
wall40.scale = 3.5;
var wall41 = createSprite(85, 47.5);
wall41.setAnimation("animation_2");
wall41.scale = 3.8;
var wall42 = createSprite(165, 210);
wall42.setAnimation("wall");
wall42.scale = 2.5;
wall42.rotation = 90;
var wall43 = createSprite(35, 197);
wall43.setAnimation("wall");
wall43.scale = 2.5;
wall43.rotation = 90;
var wall44 = createSprite(370, 185);
wall44.setAnimation("wall");
wall44.scale = 2.5;
wall44.rotation = 90;
//Coins
var pills = createGroup();
var dots;
var TotDots = 0;
var EatDots = 0;

function createdotsx(numdots,x_coor,y_coor) {
  for (var i=0; i< numdots; i++)
{
  dots = createSprite(x_coor+15*i,y_coor,5,5);
  dots.setAnimation("coin");
  dots.scale=1.2;
  pills.add(dots);
 TotDots++;
}
}

function createdotsy(numdots,x_coor,y_coor) {
  for (var i=0; i< numdots; i++)
{
  dots = createSprite(x_coor,y_coor+15*i,5,5);
  dots.setAnimation("coin");
  dots.scale=1.2;
  pills.add(dots);
 TotDots++;
}
}

// Create train of dots
createdotsx(21,50,33);
createdotsx(21,50,286);
createdotsx(6,155,150);
createdotsx(6,155,167);
createdotsy(16,50,45);
createdotsy(16,350,45);
createdotsy(15,116,45);
createdotsy(15,142,45);
createdotsy(5,80,60);
createdotsy(8,80,155);
createdotsy(4,180,75);
createdotsy(4,220,75);
createdotsy(6,180,200);
createdotsy(6,220,200);
createdotsy(15,250,45);
createdotsy(15,275,45);
createdotsy(5,320,65);
createdotsy(8,320,150);

pacman.debug = false;
ghost1.debug = false;
ghost2.debug = false;
ghost3.debug = false;
// ghost4.debug = false;

var title = createSprite(200,200);
title.setAnimation("title2");
title.height=460;
title.width=460;

var startbtn = createSprite(200,270);
startbtn.setAnimation("start1");
startbtn.scale=0.4;
playSound("assets/Pac-Man-intro-music.mp3", false);

function draw() {
  background("black");
  if (mousePressedOver(startbtn)) {
    startbtn.visible=false;
    title.visible=false;
    pacman.visible=true;
  }
  
  // update sprites
  pacmanControls();
  spriteCollide();
  loopEnds();
  ghostCollide();
  ghostControls();
  heartLives();
  coinScore();

  fill("black");
  textSize(20);
  text("Score: "+ score,15,390);
  drawSprites();
  drawSprites();
}

// Create your functions here 190 winning score

function coinScore() {
  
  for (var i = 0;i<TotDots;i++)
 {
  if (pills.get(i) != undefined && pills.get(i).collide(pacman))
  {
    pills.get(i).destroy();
    playSound("assets/category_collect/collect_item_bling_1.mp3", false);
    score = score + 20;
    EatDots++;
  }
 }
 
if ( EatDots== TotDots)
{
  pacman.destroy();
  var success = createSprite(200,200,200,200);
  success.setAnimation("finish");
  success.height=450;
  success.width=450;
  
  var code = createSprite(200,320);
  code.setAnimation("code");
  code.scale=0.6;
  
  ghost1.visible = false;
  ghost2.visible = false;
  ghost3.visible = false;
  // ghost4.visible = false;
  pacman.visible = false;
  heart1.visible = false;
  heart2.visible = false;
  heart3.visible = false;
  pacman.y = 400;
  pacman.x = 400;
}
  
}

function heartLives() {
  if (lives == 4) {
    heart1.visible = false;
    console.log("1");
  }
  if (lives == 3) {
    heart2.visible = false;
    console.log("2");
  }
  if (lives == 2) {
    heart3.visible = false;
    console.log("3");
  }
  if (lives == 1) {
    heart4.visible = false;
    console.log("4");
  }
  if (lives == 0) {
    heart5.visible = false;
    ghost1.visible = false;
    ghost2.visible = false;
    ghost3.visible = false;
    // ghost4.visible = false;
    pacman.visible = false;
    var over = createSprite(200, 170);
    over.setAnimation("gameover2");
    over.height = 460;
    over.width = 400;
    
    var restartbtn = createSprite(200,350);
    restartbtn.setAnimation("restart2");
    restartbtn.scale=0.430;
  }
}
function ghostCollide() {
  if (ghost1.collide(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
  }
  if (ghost2.collide(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
  }
  if (ghost3.collide(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
  }
  // if (ghost4.collide(pacman)) {
  //   lives = lives - 1;
  //   pacman.x = 20;
  //   pacman.y = 122;
  //   pacman.velocityX = 0;
  //   pacman.velocityY = 0;
  // }
}
function ghostControls() {
  if (ghost1.y >= 284) {
    ghost1.velocityY = 0;
    ghost1.velocityX = 7;
  }
  if (ghost1.x >= 350) {
    ghost1.velocityY = -7;
    ghost1.velocityX = 0;
  }
  if ((ghost1.y) <= 40) {
    ghost1.velocityY = 0;
    ghost1.velocityX = -7;
  }
  if (ghost1.isTouching(wall5)) {
    ghost1.velocityY = 7;
    ghost1.velocityX = 0;
  }
  if (ghost2.y == 258) {
    ghost2.velocityY = 0;
    ghost2.velocityX = 7;
  }
  if (ghost2.isTouching(wall23)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -7;
  }
  if (ghost2.isTouching(wall19)) {
    ghost2.velocityX = 7;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(wall20)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = 7;
  }
  if (ghost2.isTouching(wall26)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -7;
  }
  if (ghost2.isTouching(wall7)) {
    ghost2.velocityX = -7;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(wall41)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = 7;
  }
  if (ghost3.isTouching(wall16)) {
    ghost3.velocityX = -7;
    ghost3.velocityY = 0;
  }
  if (ghost3.isTouching(wall3)) {
    ghost3.velocityY = 7;
    ghost3.velocityX = 0;
  }
  if (ghost3.isTouching(wall43)) {
    ghost3.velocityY = 0;
    ghost3.velocityX = 7;
  }
  if (ghost3.isTouching(wall15)) {
    ghost3.velocityY = 7;
    ghost3.velocityX = 0;
  }
  if (ghost3.isTouching(wall29)) {
    ghost3.velocityY = 0;
    ghost3.velocityX = 7;
  }
  if (ghost3.isTouching(wall42)) {
    ghost3.velocityY = -7;
    ghost3.velocityX = 0;
  }
  if (ghost3.y <= 69) {
    ghost3.velocityY = 0;
    ghost3.velocityX = -7;
  }
  if (ghost3.isTouching(wall8)) {
    ghost3.velocityY = 7;
    ghost3.velocityX = 0;
  }
  
  // if (ghost4.isTouching(wall18)) {
  //   ghost4.velocityX = 7;
  //   ghost4.velocityY = 0;
  // }
  // if (ghost4.isTouching(wall44)) {
  //   ghost4.velocityY = -7;
  //   ghost4.velocityX = 0;
  // }
  // if (ghost4.isTouching(wall2)) {
  //   ghost4.velocityY = 0;
  //   ghost4.velocityX = -7;
  // }
  // if (ghost4.isTouching(wall17)) {
  //   ghost4.velocityY = -7;
  //   ghost4.velocityX = 0;
  // }
  // if (ghost4.isTouching(wall40)) {
  //   ghost4.velocityY = 0;
  //   ghost4.velocityX = -7;
  // }
  // if (ghost4.isTouching(wall11)) {
  //   ghost4.velocityY = 7;
  //   ghost4.velocityX = 0;
  // }
  // if (ghost4.y >= 210) {
  //   ghost4.velocityY = 0;
  //   ghost4.velocityX = 7;
  // }
  // if (ghost4.isTouching(wall22)) {
  //   ghost4.velocityY = -7;
  //   ghost4.velocityX = 0;
  // }
  
}
function loopEnds() {
  if (pacman.x < 0) {
    pacman.x = 400;
  }
  if (pacman.x > 400) {
    pacman.x = 0;
  }
}

function spriteCollide() {
  pacman.collide(wall);
  pacman.collide(wall2);
  pacman.collide(wall3);
  pacman.collide(wall4);
  pacman.collide(wall5);
  pacman.collide(wall6);
  pacman.collide(wall7);
  pacman.collide(wall8);
  pacman.collide(wall9);
  pacman.collide(wall10);
  pacman.collide(wall11);
  pacman.collide(wall12);
  pacman.collide(wall13);
  pacman.collide(wall14);
  pacman.collide(wall15);
  pacman.collide(wall16);
  pacman.collide(wall17);
  pacman.collide(wall18);
  pacman.collide(wall19);
  pacman.collide(wall20);
  pacman.collide(wall21);
  pacman.collide(wall22);
  pacman.collide(wall23);
  pacman.collide(wall24);
  pacman.collide(wall25);
  pacman.collide(wall26);
  pacman.collide(wall27);
  pacman.collide(wall28);
  pacman.collide(wall29);
  pacman.collide(wall30);
  pacman.collide(wall31);
  pacman.collide(wall32);
  pacman.collide(wall33);
  pacman.collide(wall34);
  pacman.collide(wall35);
  pacman.collide(wall36);
  pacman.collide(wall37);
  pacman.collide(wall38);
  pacman.collide(wall39);
  pacman.collide(wall40);
  pacman.collide(wall41);
  pacman.collide(wall42);
}
function pacmanControls() {
  if (keyWentDown("right")) {
    pacman.setSpeedAndDirection(6,360);
    pacman.rotation = 360;
  }
  if (keyWentDown("left")) {
    pacman.setSpeedAndDirection(6,180);
    pacman.rotation = 180;
  }
  if (keyWentDown("up")) {
    pacman.setSpeedAndDirection(6,270);
    pacman.rotation = 270;
  }
  if (keyWentDown("down")) {
    pacman.setSpeedAndDirection(6,90);
    pacman.rotation = 90;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
