import * as THREE from 'three';

console.log(THREE)

const scene = new THREE.Scene();


const cube = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'red'});

const mesh = new THREE.Mesh(cube,material);

scene.add(mesh);

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = -1;
camera.position.y = -1;
scene.add(camera);


const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height);

renderer.render(scene,camera);

