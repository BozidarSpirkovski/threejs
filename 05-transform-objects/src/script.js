import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'red'})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'blue'})
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:'green'})
)

const group = new THREE.Group();
// group.add({cube1,cube2,cube3})
group.add(cube1,cube2,cube3)
cube2.position.set(1.5,0,0)
cube3.position.set(-1.5,0,0)
scene.add(group);
group.position.set(0,1,0)

// Position
// mesh.position.x = 4
// mesh.position.y = -0.7
// mesh.position.z = -5
// mesh.position.set(1,0.7,-2)

// scene.add(mesh)
/** get the length of the vector starting from 0 */
// console.log(mesh.position.length())
/** set the position to 1 */
// mesh.position.normalize()

// Scale
// mesh.scale.set(1,2,3)

// Put visual XYZ axes as help 
const axesHelper = new THREE.AxesHelper(4);

scene.add(axesHelper);

//Rotation
// mesh.rotation.reorder('YXZ')
// const cubeRotation = new THREE.Euler(1)
// mesh.rotation.x = -0.5
// mesh.rotation.y = 0.8
// mesh.rotation.z = -0.8

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,4)
// camera.lookAt(mesh.position)
// console.log(mesh.position.distanceTo(camera.position))

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)