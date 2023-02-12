import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import './style.css';

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.1, 100);
const hemiLight= new THREE.HemisphereLight(0xffeeb1, 0x080820, 2);
const spotLight = new THREE.SpotLight(0xffa95c,2);
const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();

document.body.appendChild(renderer.domElement);

var axesHelper = new THREE.AxesHelper(size);

camera.position.set(0,0,1);
scene.background = new THREE.Color(0x2F3143);
scene.add(axesHelper);
scene.add(hemiLight);
scene.add(camera);

spotLight.castShadow = true;
spotLight.shadow.bias=-0.0001;
spotLight.shadow.mapSize.width=1024*4;
spotLight.shadow.mapSize.height=1024*4;
scene.add(spotLight);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 2.3;
renderer.shadowMap.enabled = true;


loader.load("discord.glb", (object) => {
  var mesh = object.scene;

  mesh.position.set(0,0,0);
  mesh.rotation.set(-0.15,-0.3,-0.05);
  scene.add(mesh);

  window.addEventListener('wheel', function(event) {
    if(event.layerY===0){
      if(event.deltaY===0){
        mesh.rotation.set(-0.15,-0.3,-0.05);
      }
      else{
        mesh.rotation.y = event.deltaY;
      }
      scrollY=-event.deltaY;
    }
    else{
      mesh.rotation.y += event.deltaY * 0.004;
    }
    if(window.scrollY<= -500 & window.scrollY>= -520){
      mesh.rotation.y=1.72;
    }
    if (window.scrollY <= -2500 & window.scrollY >= -2550) {
      mesh.rotation.y=9.72;
    }
    if (window.scrollY > 0) {
      mesh.rotation.set(-0.15,-0.3,-0.05);
    }
    if (window.scrollY <= -3000) {
      mesh.rotation.set(-0.15,-0.3,-0.05);
    };
  },{ passive: false });

  
});

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  spotLight.position.set(
    spotLight.position.x + 10,
    spotLight.position.y + 10,
    spotLight.position.z + 10
  )
}

animate();