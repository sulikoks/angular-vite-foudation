class AnimationBuilder{}class AnimationFactory{}const AUTO_STYLE="*";function trigger(name,definitions){return{type:7,name:name,definitions:definitions,options:{}}}function animate(timings,styles=null){return{type:4,styles:styles,timings:timings}}function group(steps,options=null){return{type:3,steps:steps,options:options}}function sequence(steps,options=null){return{type:2,steps:steps,options:options}}function style(tokens){return{type:6,styles:tokens,offset:null}}function state(name,styles,options){return{type:0,name:name,styles:styles,options:options}}function keyframes(steps){return{type:5,steps:steps}}function transition(stateChangeExpr,steps,options=null){return{type:1,expr:stateChangeExpr,animation:steps,options:options}}function animation(steps,options=null){return{type:8,animation:steps,options:options}}function animateChild(options=null){return{type:9,options:options}}function useAnimation(animation,options=null){return{type:10,animation:animation,options:options}}function query(selector,animation,options=null){return{type:11,selector:selector,animation:animation,options:options}}function stagger(timings,animation){return{type:12,timings:timings,animation:animation}}function scheduleMicroTask(cb){Promise.resolve().then(cb)}class NoopAnimationPlayer{constructor(duration=0,delay=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=duration+delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(fn=>fn()),this._onDoneFns=[])}onStart(fn){this._originalOnStartFns.push(fn),this._onStartFns.push(fn)}onDone(fn){this._originalOnDoneFns.push(fn),this._onDoneFns.push(fn)}onDestroy(fn){this._onDestroyFns.push(fn)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){scheduleMicroTask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(fn=>fn()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(fn=>fn()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(position){this._position=this.totalTime?position*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(phaseName){const methods="start"==phaseName?this._onStartFns:this._onDoneFns;methods.forEach(fn=>fn()),methods.length=0}}class AnimationGroupPlayer{constructor(_players){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=_players;let doneCount=0,destroyCount=0,startCount=0;const total=this.players.length;0==total?scheduleMicroTask(()=>this._onFinish()):this.players.forEach(player=>{player.onDone(()=>{++doneCount==total&&this._onFinish()}),player.onDestroy(()=>{++destroyCount==total&&this._onDestroy()}),player.onStart(()=>{++startCount==total&&this._onStart()})}),this.totalTime=this.players.reduce((time,player)=>Math.max(time,player.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(fn=>fn()),this._onDoneFns=[])}init(){this.players.forEach(player=>player.init())}onStart(fn){this._onStartFns.push(fn)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(fn=>fn()),this._onStartFns=[])}onDone(fn){this._onDoneFns.push(fn)}onDestroy(fn){this._onDestroyFns.push(fn)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(player=>player.play())}pause(){this.players.forEach(player=>player.pause())}restart(){this.players.forEach(player=>player.restart())}finish(){this._onFinish(),this.players.forEach(player=>player.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(player=>player.destroy()),this._onDestroyFns.forEach(fn=>fn()),this._onDestroyFns=[])}reset(){this.players.forEach(player=>player.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(p){const timeAtPosition=p*this.totalTime;this.players.forEach(player=>{const position=player.totalTime?Math.min(1,timeAtPosition/player.totalTime):1;player.setPosition(position)})}getPosition(){const longestPlayer=this.players.reduce((longestSoFar,player)=>null===longestSoFar||player.totalTime>longestSoFar.totalTime?player:longestSoFar,null);return null!=longestPlayer?longestPlayer.getPosition():0}beforeDestroy(){this.players.forEach(player=>{player.beforeDestroy&&player.beforeDestroy()})}triggerCallback(phaseName){const methods="start"==phaseName?this._onStartFns:this._onDoneFns;methods.forEach(fn=>fn()),methods.length=0}}const ɵPRE_STYLE="!";export{AUTO_STYLE,AnimationBuilder,AnimationFactory,NoopAnimationPlayer,animate,animateChild,animation,group,keyframes,query,sequence,stagger,state,style,transition,trigger,useAnimation,AnimationGroupPlayer as ɵAnimationGroupPlayer,ɵPRE_STYLE};