import * as THREE from 'three'

const config = {
  numberOfShapes: 200,
  maxSize: 0.5,
  spawnSpread: 7,
  spawnHeight: 20,
  fallBase: 0.04,
  fallScale: 0.003,
  rotBaseX: 0.01,
  rotBaseY: 0.02,
  rotBaseZ: 0.01,
  rotScale: 0.003,
  driftMax: 0.02,
}

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x111118)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 1.8)
dirLight.position.set(5, 10, 7)
scene.add(dirLight)

const cubeColors = [0xf8909c, 0xfba4b0, 0xfebdc8, 0xf8988b, 0xffaa86, 0xfeec85, 0xff9e70, 0x6fcfbf, 0xff967c, 0xfc8faa, 0xe685a4, 0xad8ed6, 0xb1bed6, 0x9ec3d4, 0x7091ca, 0x7699db, 0x9adcf0, 0x84e4d8, 0xa1e9d7, 0xa3e28c, 0xe9eb7f]

const allShapes = []

function bricks() {
  for (let n = 0; n < config.numberOfShapes; n++) {
    const s = config.maxSize
    const geometry = new THREE.BoxGeometry(s * Math.random(), s * Math.random(), s * Math.random())
    const material = new THREE.MeshLambertMaterial({ color: cubeColors[Math.floor(Math.random() * cubeColors.length)] })
    const shape = new THREE.Mesh(geometry, material)

    shape.castShadow = true
    shape.translateX(config.spawnSpread * (Math.random() - 0.5))
    shape.translateZ(config.spawnSpread * (Math.random() - 0.5))
    shape.translateY(config.spawnHeight + config.spawnSpread * (Math.random() - 0.5))
    shape.drift = config.driftMax * (Math.random() - 0.5)
    shape.index = n

    scene.add(shape)
    allShapes.push(shape)
  }
}

const render = () => {
  requestAnimationFrame(render)
  renderer.render(scene, camera)
  for (const shape of allShapes) {
    const n = shape.index
    shape.rotation.x += config.rotBaseX * Math.random() + config.rotScale * n
    shape.rotation.y += config.rotBaseY * Math.random() + config.rotScale * n
    shape.rotation.z += config.rotBaseZ * Math.random() + config.rotScale * n
    shape.position.y -= config.fallBase * Math.random() + config.fallScale * n
    shape.position.x += shape.drift
  }
}

render()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

document.querySelector('.trigger').addEventListener('click', bricks)
